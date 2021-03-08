import { Component, OnInit } from '@angular/core';
import { StoreDataClientService } from '../store-data-client-service.service';
import { FormBuilder } from '@angular/forms';
import { ReviewDetailService } from '../review-detail-service.service'

@Component({
  selector: 'app-postproduct-review',
  templateUrl: './postproduct-review.component.html',
  styleUrls: ['./postproduct-review.component.css']
})
export class POSTProductReviewComponent implements OnInit {

  starScore;
  textComment;
  prodID;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
    this.textComment = this.builder.group({
      desc : ''
    })
  }

  onSubmit(value){
    var toPOST : Array<Object>;
    toPOST[0] = this.prodID;
    toPOST[1] = this.details.getStarScore();
    toPOST[2] = value.desc;
    this.client.POSTReview(toPOST).subscribe(response =>{
      
    })
  }

}
