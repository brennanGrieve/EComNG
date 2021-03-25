import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReviewDetailService } from '../../services/review-detail-service.service';

@Component({
  selector: 'app-star-score-display',
  templateUrl: './star-score-display.component.html',
  styleUrls: ['./star-score-display.component.css']
})
export class StarScoreDisplayComponent implements OnInit, OnDestroy {

  stateArray : boolean[] = [];
  scoreSubscription : Subscription;

  constructor(
    private details : ReviewDetailService
  ) { }

  ngOnInit(): void {
    this.scoreSubscription = this.details.getExistingScore().subscribe(newScore =>{
      this.updateStateArray(newScore);
    })
  }

  ngOnDestroy():void {
    this.scoreSubscription.unsubscribe();
  }


  updateStateArray(newScore){
    for(var i = 0; i < 5; ++i){
      if(i <= newScore){
        this.stateArray[i] = false;
      }
      else{
        this.stateArray[i] = true;
      }
    }
  }

}
