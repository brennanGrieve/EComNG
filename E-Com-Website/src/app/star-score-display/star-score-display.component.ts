import { Component, Input, OnInit } from '@angular/core';
import { ReviewDetailService } from '../review-detail-service.service';

@Component({
  selector: 'app-star-score-display',
  templateUrl: './star-score-display.component.html',
  styleUrls: ['./star-score-display.component.css']
})
export class StarScoreDisplayComponent implements OnInit {

  stateArray = [];

  constructor(
    private details : ReviewDetailService
  ) { }

  ngOnInit(): void {
    this.details.getExistingScore().subscribe(newScore =>{
      this.updateStateArray(newScore);
    })
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
