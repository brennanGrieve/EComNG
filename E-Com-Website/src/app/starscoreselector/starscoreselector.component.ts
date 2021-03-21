import { Component, Input, OnInit } from '@angular/core';
import { ReviewDetailService } from '../review-detail-service.service';

@Component({
  selector: 'app-starscoreselector',
  templateUrl: './starscoreselector.component.html',
  styleUrls: ['./starscoreselector.component.css']
})
export class StarscoreselectorComponent implements OnInit {


  starDim : Array<Boolean> = [true,true,true,true,true];
  @Input()
  existingScore;

  constructor(
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
      this.starChange(this.existingScore);
  }


  starChange(newScore : number){
    if(newScore < 0 || newScore > 4 || newScore === undefined || newScore === NaN){return}
    this.details.setStarScore(newScore);
    /* 
    * All flags < Newscore must be set to false.
    * This will light up every star of a lower placement.
    * The inverse should also be true; All flags > Newscore must be set to true.
    * This will dim out all stars of a higher placement to the user selection.
    */
    for(var i = 0; i < 5; i++){
      if(i <= newScore){
        this.starDim[i] = false;
      }else{
        this.starDim[i] = true;
      }
    }
  }

}
