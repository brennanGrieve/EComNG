import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';
import { CookiesService} from '../cookies.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentProduct : StoreItem;
  columnsToDisplay = ['Key', 'Value'];
  stockLevelColor;
  constructor(    
    private clientService : StoreDataClientService,
    private cookies : CookiesService,
    private currentRoute: ActivatedRoute,
    ) {   }

  ngOnInit() {
    const currentProductId = this.currentRoute.snapshot.paramMap.get('productId');
    this.getProductById(currentProductId);
  }

  getProductById(toFetch){
    this.clientService.getItemById(toFetch).subscribe(
      currentProduct => {
        this.currentProduct = currentProduct;
        if(currentProduct.stock < 10){
          this.stockLevelColor = "orange"
        }
        if(currentProduct.stock == 0){
          this.stockLevelColor = "red";
        }
        if(currentProduct.stock > 10){
          this.stockLevelColor = "#262697";
        }
      }
    );
  }

  addToCart(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var current = this.cookies.getCartCookie();
    current = current + this.currentProduct.id + ",";
    var newCookie = "cart=" + current + "; expires=" + expiry.toUTCString() + ";path=/";
    this.cookies.addCookie(newCookie);
  }

}
