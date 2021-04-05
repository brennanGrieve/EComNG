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


  dimPath : string = '/assets/starDim.png';
  halfLitPath : string = '/assets/starHalf.png';
  litPath : string = '/assets/starLit.png';
  
  stateArray : string[] = [this.dimPath, this.dimPath, this.dimPath, this.dimPath, this.dimPath];


  ngOnInit(): void {
    if(this.toDisplay == null){
      this.toDisplay = -1;
    }
    this.updateStateArray(this.toDisplay);
  }

  updateStateArray(newScore){
    for(var i = 0; i < 5; ++i){
      if(i <= newScore){
        this.stateArray[i] = this.litPath;
      } 
      if(newScore - i > 0.24 && newScore - i < 0.76){
        this.stateArray[i + 1] = this.halfLitPath;
        return
      }
    }
  }



}
