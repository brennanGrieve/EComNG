import { Component, Input, OnInit } from '@angular/core';
import { StoreDataClientService } from '../../services/store-data-client-service.service';
import { Review } from '../../interfaces/review';
import { ReviewDetailService } from '../../services/review-detail-service.service';

@Component({
  selector: 'app-review-list-display',
  templateUrl: './review-list-display.component.html',
  styleUrls: ['./review-list-display.component.css']
})
export class ReviewListDisplayComponent implements OnInit {


  @Input()
  prodID : number;
  indexOffset : number = 0;
  displayedReviews : Review[] = [];
  lastPage : boolean = false;
  firstPage : boolean = true;
  currentUser = "";
  reviewsExist : boolean = true;

  constructor(
    private client : StoreDataClientService,
    private details : ReviewDetailService
  ) { }

  ngOnInit(): void {
    this.details.fetchUserName().subscribe(name =>{
      this.currentUser = name["USER_NAME"];
      this.getReviews(0);
    })
  }

  getReviews(offsetChange : number){
    this.indexOffset += offsetChange;
    if(this.indexOffset < 0){
      this.indexOffset = 0;
      return;
    }
    if(this.indexOffset == 0){
      this.firstPage = true;
    }else{this.firstPage = false};
    this.client.GETReviewsByOffset(this.indexOffset, this.prodID).subscribe(response =>{
      if(response["empty"] != null){
        if(this.indexOffset == 0){
          this.reviewsExist = false
        }else{
          this.indexOffset = 0;
          return;
        }
      }
      var i = 0
      for(i; i < response.length; i++){
        if(this.currentUser === response[i].USER_NAME){continue}
        this.displayedReviews[i] = response[i];
      }
      if(i < 4){
        this.lastPage = true;
      }else{this.lastPage = false;}
      for(i; i < 5; i++){
        this.displayedReviews[i] = null;
      }
    })
  }

}
