import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  catalog : StoreItem[];

  constructor(private clientService : StoreDataClientService
    ) { }


  ngOnInit() {
    this.getCatalog();
    //create tiles here
  }

  getCatalog() : void {
    this.clientService.getStoreItems().subscribe(catalog => this.catalog = catalog);
  }

}
