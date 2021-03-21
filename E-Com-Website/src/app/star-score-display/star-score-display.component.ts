import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-score-display',
  templateUrl: './star-score-display.component.html',
  styleUrls: ['./star-score-display.component.css']
})
export class StarScoreDisplayComponent implements OnInit {

  @Input()
  displayScore : Number;

  stateArray = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.displayScore);
    this.prepareStateArray();
  }


  prepareStateArray(){
    for(var i = 0; i < 5; i++){
      if(i <= this.displayScore){
        this.stateArray[i] = false;
      }
      else{
        this.stateArray[i] = true;
      }
    }
  }

}
