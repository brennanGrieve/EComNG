import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-score-display',
  templateUrl: './star-score-display.component.html',
  styleUrls: ['./star-score-display.component.css']
})
export class StarScoreDisplayComponent implements OnInit {

  @Input()
  displayScore : Number;

  constructor() { }

  ngOnInit(): void {
  }

}
