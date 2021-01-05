import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  value = '';

  constructor(private search : SearchService) { }
  
  ngOnInit() {
  }
  updateSearchTerms(){
    this.search.updateTerms(this.value);
  }
  
}

