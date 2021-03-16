import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoreDataClientService } from './store-data-client-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewDetailService {


  private starScore : number;
  private reviewExists = new BehaviorSubject(false);
  private existingScore = new BehaviorSubject(0);
  private existingComment = new BehaviorSubject("");


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

  getCurrentPageReviewStatus(id) : BehaviorSubject<boolean>{
    this.client.getUserReview(id).subscribe(response =>{
      if(response[0] === undefined){
        this.reviewExists.next(false);
        return this.reviewExists;
      }
      if(response[0].score !== undefined && response[0].comment !== undefined){
        this.existingScore.next(response[0].score);
        this.existingComment.next(response[0].comment); 
        this.reviewExists.next(true);
      }
    })
    return this.reviewExists;
  }
}
