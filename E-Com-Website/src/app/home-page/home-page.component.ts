import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';
import { CookiesService } from '../cookies.service';

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


  ngOnInit() {
    this.getCatalog();
    this.getPopular();
    this.getMyRecent();
  }

  getCatalog() : void {
    this.clientService.getStoreItems().subscribe(catalog => this.catalog = catalog);
  }
  getPopular() : void{
    this.clientService.getPopularItems().subscribe(popular => this.popular = popular);
  }
  getMyRecent() : void{
    var recentViews : number[] = this.cookiesService.splitCookie(this.cookiesService.extractCookieValue("recent="));
    for(var i = 0; i < recentViews.length; i++){
      this.clientService.getItemById(recentViews[i], false).subscribe(itemData => {
        this.myRecent.push(itemData[0]);
      })
    }
  }
}
