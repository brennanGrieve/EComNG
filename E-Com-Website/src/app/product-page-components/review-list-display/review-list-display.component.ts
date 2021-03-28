import { Component, Input, OnInit } from '@angular/core';
import { StoreDataClientService } from '../../services/store-data-client-service.service';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-review-list-display',
  templateUrl: './review-list-display.component.html',
  styleUrls: ['./review-list-display.component.css']
})
export class ReviewListDisplayComponent implements OnInit {


  @Input()
  prodID : number;
  indexOffset : number = 0;
  topOffset : number = 0;
  displayedReviews : Review[] = [];
  lastPage : boolean = false;
  firstPage : boolean = true;

  constructor(
    private client : StoreDataClientService
  ) { }

  ngOnInit(): void {
    this.getReviews(0);
  }

  getReviews(offsetChange : number){
    this.indexOffset += offsetChange;
    if(this.indexOffset < 0){
      this.indexOffset = 0;
      this.topOffset = 0;
      return;
    }
    if(this.indexOffset == 0){
      this.firstPage = true;
    }else{this.firstPage = false};
    console.log(this.firstPage);
    this.client.GETReviewsByOffset(this.indexOffset, this.prodID).subscribe(response =>{
      console.log(response);
      var i = 0
      for(i; i < response.length; i++){
        this.displayedReviews[i] = response[i];
        console.log(i);
      }
      this.topOffset = this.indexOffset + i;
      if(i < 4){
        this.lastPage = true;
      }else{this.lastPage = false;}
      for(i; i < 5; i++){
        this.displayedReviews[i] = null;
      }
      console.log(this.displayedReviews);
      console.log(this.lastPage);
    })
  }

}
