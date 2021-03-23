import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreDataClientService } from '../store-data-client-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReviewDetailService } from '../review-detail-service.service'
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-postproduct-review',
  templateUrl: './postproduct-review.component.html',
  styleUrls: ['./postproduct-review.component.css'],
  providers: [ ReviewDetailService ]
})
export class POSTProductReviewComponent implements OnInit, OnDestroy {

  starScore : number;
  textComment : FormGroup;
  @Input()
  prodID : number;
  reviewExists : Boolean = false;
  existingScore : number = -1;
  existingComment : string;
  editMode : Boolean = false;
  missingScore : Boolean = false;

  scoreSub : Subscription;
  commentSub : Subscription;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
    this.textComment = this.builder.group({
      desc : ''
    })
    this.commentSub = this.details.getExistingComment().subscribe(existingComment =>{
      this.existingComment = existingComment;
    })
    this.scoreSub = this.details.getExistingScore().subscribe(existingScore =>{
      this.existingScore = existingScore;
    });
    this.details.getCurrentPageReviewStatus(this.prodID).subscribe(exists =>{
      if(exists === true){
        this.reviewExists = true;
      }else{
        this.reviewExists = false;
      }
    })
  }

  ngOnDestroy() : void {
    this.scoreSub.unsubscribe;
    this.commentSub.unsubscribe;
  }

  onSubmit(value){
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
