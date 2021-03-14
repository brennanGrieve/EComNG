import { Injectable } from '@angular/core';
import { StoreDataClientService } from './store-data-client-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewDetailService {


  private starScore : number;
  private reviewExists : Boolean;
  private existingScore;
  private existingComment;


  constructor(
    private client : StoreDataClientService
  ) { }

  getStarScore() : number{
    return this.starScore;
  }

  setStarScore(newScore : number){
    this.starScore = newScore;
  }

  getExistingScore(){
    return this.existingScore;
  }
  
  getExistingComment(){
    return this.existingComment;
  }

  getCurrentPageReviewStatus(id) : Boolean{
    //call this oninit of the product details page
    this.client.getUserReview(id).subscribe(response =>{
      //check the result; if we get something back, a review exists and should be displayed for editing instead of initial creation
    })
    return false;
  }
}
