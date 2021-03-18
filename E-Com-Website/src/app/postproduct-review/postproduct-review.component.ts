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
  existingScore;
  existingComment;
  editMode : Boolean = false;

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
      this.existingComment = existingComment;
    })
    this.details.getExistingScore().subscribe(existingScore =>{
      this.existingScore = existingScore;
    })
    this.details.getCurrentPageReviewStatus(this.prodID).subscribe(exists =>{
      if(exists === true){
        this.reviewExists = true;
      }else{
        this.reviewExists = false;
      }
    })
  }

  onSubmit(value){
    var toPOST = [];
    toPOST.push(this.prodID);
    toPOST.push(this.details.getStarScore());
    toPOST.push(value.desc);

    //perform a check here; if the review already exists, a different api call should be made to preserve RESTfulness.

    this.client.POSTReview(toPOST).subscribe(response =>{
      
    })
  }

  toggleEditing(){
    this.editMode = !this.editMode;
  }

}
