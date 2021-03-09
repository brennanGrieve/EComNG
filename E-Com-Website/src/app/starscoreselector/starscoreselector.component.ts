import { Component, OnInit } from '@angular/core';
import { ReviewDetailService } from '../review-detail-service.service';

@Component({
  selector: 'app-starscoreselector',
  templateUrl: './starscoreselector.component.html',
  styleUrls: ['./starscoreselector.component.css']
})
export class StarscoreselectorComponent implements OnInit {

  star1Dim : Boolean = true;
  star2Dim : Boolean = true;
  star3Dim : Boolean = true;
  star4Dim : Boolean = true;
  star5Dim : Boolean = true;

  constructor(
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
  }


  starChange(newScore : number){
    this.details.setStarScore(newScore);
    /* 
    * All flags < Newscore must be set to false.
    * This will light up every star of a lower placement.
    * The inverse should also be true; All flags > Newscore must be set to true.
    * This will dim out all stars of a higher placement to the user selection.
    */
    if(newScore >= 1){
      this.star1Dim = false;
    }else{this.star1Dim = true}
    if(newScore >= 2){
      this.star2Dim = false
    }else{this.star2Dim = true}
    if(newScore >= 3){
      this.star3Dim = false;
    }else{this.star3Dim = true}
    if(newScore >= 4){
      this.star4Dim = false;
    }else{this.star4Dim = true}
    if(newScore >= 5){
      this.star5Dim = false;
    }else{this.star5Dim = true}
  }

}
