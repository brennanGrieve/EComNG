import { Component, Input, OnInit } from '@angular/core';
import { StoreDataClientService } from '../store-data-client-service.service';
import { FormBuilder } from '@angular/forms';
import { ReviewDetailService } from '../review-detail-service.service'
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-postproduct-review',
  templateUrl: './postproduct-review.component.html',
  styleUrls: ['./postproduct-review.component.css'],
  providers: [ ReviewDetailService ]
})
export class POSTProductReviewComponent implements OnInit {

  starScore;
  textComment;
  @Input()
  prodID;
  reviewExists : Boolean = false;
  existingScore : Number = -1;
  existingComment;
  editMode : Boolean = false;
  missingScore : Boolean = false;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
    this.textComment = this.builder.group({
      desc : ''
    })
    this.details.getExistingComment().subscribe(existingComment =>{
      console.log("Comment callback fired");
      this.existingComment = existingComment;
    })
    this.details.getExistingScore().subscribe(existingScore =>{
      console.log("Score callback Fired.");
      this.existingScore = existingScore;
    });
    this.details.getCurrentPageReviewStatus(this.prodID).subscribe(exists =>{
      console.log("Status callback fired.");
      if(exists === true){
        this.reviewExists = true;
      }else{
        this.reviewExists = false;
      }
    })
  }

  onSubmit(value){
    console.log("Submitting");
    var check = this.details.getStarScore();
    if(check === -1 || check === undefined || check === NaN){
      this.missingScore = true;
      return;
    }
    this.missingScore = false;
    var toPOST = [];
    toPOST.push(this.prodID);
    toPOST.push(this.details.getStarScore());
    toPOST.push(value.desc);
    if(this.reviewExists){
      this.client.POSTReviewEdit(toPOST).pipe(take(1)).subscribe(response =>{
        if(response["success"] != undefined){
          this.details.setExistingComment(value.desc);
          this.editMode = false;
        }
      })
    }else{
      this.client.POSTReview(toPOST).pipe(take(1)).subscribe(response =>{
        if(response["success"] != undefined){
          this.details.setExistingComment(value.desc);
          this.reviewExists = true;
        }
      })
    }
  }

  toggleEditing(){
    this.textComment.patchValue({
      desc: this.existingComment
    })
    this.editMode = !this.editMode;
  }

}
