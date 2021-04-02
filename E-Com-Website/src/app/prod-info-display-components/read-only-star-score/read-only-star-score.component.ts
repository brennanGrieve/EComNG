import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-only-star-score',
  templateUrl: './read-only-star-score.component.html',
  styleUrls: ['./read-only-star-score.component.css']
})
export class ReadOnlyStarScoreComponent implements OnInit {

  constructor() { }

  @Input()
  toDisplay : number;

  stateArray : boolean[] = [];


  ngOnInit(): void {
    if(this.toDisplay == null){
      this.toDisplay = -1;
    }
    this.updateStateArray(this.toDisplay);
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
