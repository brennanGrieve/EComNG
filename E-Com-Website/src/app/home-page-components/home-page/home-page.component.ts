import { Component, OnInit } from '@angular/core';
import { StoreDataClientService } from '../../services/store-data-client-service.service';
import { StoreItem } from '../../store-item';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catalog : StoreItem[] = [];
  popular : StoreItem[] = [];
  myRecent : StoreItem[] = [];

  constructor(
    private clientService : StoreDataClientService,
    private cookiesService : CookiesService
    ) { }

 /**
  * OnInit: Get the most recent additions to the catalog, the currently post popular items, and if applicable the user's recent views.
  */

  ngOnInit() {
    this.getRecent();
    this.getPopular();
    this.getMyRecent();
  }

  /**
   * Get the 12 most recent additions to the store, and then subscribe this.catalog to the results. this.catalog is bound to the first 
   * app-product-grid as its data source.
   */

  getRecent() : void {
    this.clientService.getRecentItems().subscribe(catalog => this.catalog = catalog);
  }

  /**
   * Get the 8 most popular items the store, and then subscribe this.popular to the results. this.popular is bound to the second 
   * app-product-grid as its data source.
   */

  getPopular() : void{
    this.clientService.getPopularItems().subscribe(popular => this.popular = popular);
  }

  /**
   * Get the 4 most recent items viewed by the user based on cookies. Subscribe the results of each query to this.myRecent. this.myRecent
   * is bound to the third app-product-grid as its data source.
   */

  getMyRecent() : void{
    var recentViews : number[] = this.cookiesService.splitCookie(this.cookiesService.extractCookieValue("recent="));
    for(var i = 0; i < recentViews.length; i++){
      this.clientService.getItemById(recentViews[i], false).subscribe(itemData => {
        this.myRecent.push(itemData[0]);
      })
    }
  }
}
