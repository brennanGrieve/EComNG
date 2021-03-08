import { Component, OnInit } from '@angular/core';
import { ReviewDetailService } from '../review-detail-service.service';

@Component({
  selector: 'app-starscoreselector',
  templateUrl: './starscoreselector.component.html',
  styleUrls: ['./starscoreselector.component.css']
})
export class StarscoreselectorComponent implements OnInit {

  constructor(
    private details : ReviewDetailService,
  ) { }

  ngOnInit(): void {
  }


  starChange(newScore : number){
    this.details.setStarScore(newScore);
  }

}
