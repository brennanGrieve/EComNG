import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoreDataClientService } from './store-data-client-service.service';
import { CookiesService } from './cookies.service'

@Injectable({
  providedIn: 'any'
})
export class ReviewDetailService {


  private starScore : number = -1;
  private reviewExists = new BehaviorSubject(false);
  private existingScore = new BehaviorSubject(-1);
  private existingComment = new BehaviorSubject("");


  constructor(
    private client : StoreDataClientService,
    private cookies : CookiesService
  ) { }


  fetchUserName(){
    return this.client.fetchUserName(this.cookies.extractCookieValue("auth="));
  }

  getStarScore() : number{
    return this.starScore;
  }

  setStarScore(newScore : number){
    this.starScore = newScore;
    if(this.existingScore.value != newScore){
      this.existingScore.next(newScore);
    }
  }

  getExistingScore(){
    return this.existingScore;
  }

  setExistingScore(newScore : number){
    if(this.existingScore.value != newScore){
      this.existingScore.next(newScore);
    }
  }
  
  getExistingComment(){
    return this.existingComment;
  }

  setExistingComment(newValue : string){
    if(newValue != this.existingComment.value){
      this.existingComment.next(newValue);
    }
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
