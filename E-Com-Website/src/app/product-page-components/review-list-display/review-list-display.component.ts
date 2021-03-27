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
  displayedReviews : Review[] = [];

  constructor(
    private client : StoreDataClientService
  ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.client.GETReviewsByOffset(this.indexOffset, this.prodID).subscribe(response =>{
      for(var i = 0; i < response.length; i++){
        console.log(i);
        this.displayedReviews[i] = response[i];
      }
      this.indexOffset += 5;
    })
  }

}
