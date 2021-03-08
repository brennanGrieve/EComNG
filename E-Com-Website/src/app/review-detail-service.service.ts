import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewDetailService {


  private starScore : number;


  constructor() { }

  getStarScore() : number{
    return this.starScore;
  }

  setStarScore(newScore : number){
    this.starScore = newScore;
  }
}
