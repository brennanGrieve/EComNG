import { Component, Input, OnInit } from '@angular/core';
import { StoreDataClientService } from '../store-data-client-service.service';
import { FormBuilder } from '@angular/forms';
import { ReviewDetailService } from '../review-detail-service.service'
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-postproduct-review',
  templateUrl: './postproduct-review.component.html',
  styleUrls: ['./postproduct-review.component.css']
})
export class POSTProductReviewComponent implements OnInit {

  starScore;
  textComment;
  @Input()
  prodID;
  reviewExists : Boolean = false;
  existingScore;
  existingComment;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
    this.textComment = this.builder.group({
      desc : ''
    })
    this.details.getCurrentPageReviewStatus(this.prodID).pipe(take(1)).subscribe(exists =>{
      if(exists === true){
        this.existingScore = this.details.getExistingScore().subscribe();
        this.existingComment = this.details.getExistingComment().subscribe();
        this.reviewExists = true;
      }else{
        this.reviewExists = false;
      }
    })
  }

  onSubmit(value){
    console.log("Attempting submission");
    var toPOST = [];
    toPOST.push(this.prodID);
    toPOST.push(this.details.getStarScore());
    toPOST.push(value.desc);
    this.client.POSTReview(toPOST).subscribe(response =>{
      
    })
  }

}
