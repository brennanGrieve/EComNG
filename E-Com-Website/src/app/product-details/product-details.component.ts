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
  specs : Object[] = [];
  columnsToDisplay = ['Key', 'Value'];
  stockLevelColor;
  currentProductId = this.currentRoute.snapshot.paramMap.get('productId');
  constructor(    
    private clientService : StoreDataClientService,
    private cookies : CookiesService,
    private currentRoute: ActivatedRoute,
    ) {   }

  ngOnInit() {
    this.currentProductId = this.currentRoute.snapshot.paramMap.get('productId');
    this.getProductById(this.currentProductId);
    this.addToRecent();
  }

  getProductById(toFetch){
    this.clientService.getItemById(toFetch, true).subscribe(
      currentProduct => {
        this.currentProduct = currentProduct[0];
        if(this.currentProduct.stockLevel < 10){
          this.stockLevelColor = "orange"
        }
        if(this.currentProduct.stockLevel == 0){
          this.stockLevelColor = "red";
        }
        if(this.currentProduct.stockLevel > 10){
          this.stockLevelColor = "#262697";
        }
        this.clientService.getItemSpecifications(this.currentProduct.id).subscribe(specs => this.specs = specs)
      }
    );
  }


  addToCart(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var current = this.cookies.extractCookieValue("cart=");
    current = current + this.currentProduct.id + ",";
    var newCookie = "cart=" + current + "; expires=" + expiry.toUTCString() + ";path=/";
    this.cookies.addCookie(newCookie);
  }

  addToRecent(){
    console.log("Attempting add to recent cookie...");
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    console.log("Date is set. Now comes the function call.");
    this.cookies.updateRecentViews(parseInt(this.currentProductId), expiry);
  }

}
