import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private search : SearchService,
    private clientService : StoreDataClientService
    ) { }

  value;
  results : StoreItem[];

  /**
   * ngOnInit()
   * Subscribe to search terms from the search service, 
   * then subscribe to the results of searchItemByName() from the client service on callback.
   */

  ngOnInit() {
    this.search.searchTerms.subscribe(newTerms => {
      this.value = newTerms; 
      this.clientService.searchItemByName(newTerms).subscribe(
        results => {
          this.results = results;
      })
    });
  }

}
