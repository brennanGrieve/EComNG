import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentProduct : StoreItem;
  constructor(    
    private clientService : StoreDataClientService,
    private currentRoute: ActivatedRoute
    ) {   }

  ngOnInit() {
    const currentProductId = this.currentRoute.snapshot.paramMap.get('productId');
    this.getProductById(currentProductId);
  }

  getProductById(toFetch){
    this.clientService.getItemById(toFetch).subscribe(currentProduct => this.currentProduct = currentProduct);
  }

}
