import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReviewDetailService } from '../../services/review-detail-service.service';

@Component({
  selector: 'app-starscoreselector',
  templateUrl: './starscoreselector.component.html',
  styleUrls: ['./starscoreselector.component.css']
})
export class StarscoreselectorComponent implements OnInit, OnDestroy {


  starDim : Array<Boolean> = [true,true,true,true,true];
  scoreSubscription : Subscription;

  constructor(
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
    this.scoreSubscription = this.details.getExistingScore().subscribe(newScore =>{
      this.starChange(newScore);
    })
  }

  ngOnDestroy(): void{
    this.scoreSubscription.unsubscribe();
  }


  starChange(newScore : number){
    if(newScore < 0 || newScore > 4 || newScore === undefined || newScore === NaN){return}
    this.details.setStarScore(newScore);
    for(var i = 0; i < 5; i++){
      if(i <= newScore){
        this.starDim[i] = false;
      }else{
        this.starDim[i] = true;
      }
    }
  }

}
