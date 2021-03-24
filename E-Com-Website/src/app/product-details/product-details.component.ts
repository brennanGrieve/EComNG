import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataClientService } from '../services/store-data-client-service.service';
import { StoreItem } from '../store-item';
import { CookiesService} from '../services/cookies.service';
import { UserAuthService } from '../services/user-auth.service';


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
  loggedIn : boolean;
  currentProductId = this.currentRoute.snapshot.paramMap.get('productId');

  constructor(    
    private clientService : StoreDataClientService,
    private cookies : CookiesService,
    private currentRoute: ActivatedRoute,
    private auth : UserAuthService
    ) {   }

  /**
  * OnInit - get the product ID from the current router route, then grab the product's data and add it to the recentViews cookie.
  */

  ngOnInit() {
    this.currentProductId = this.currentRoute.snapshot.paramMap.get('productId');
    this.getProductById(this.currentProductId);
    this.addToRecent();
    this.auth.getLoginStatus().subscribe(status =>{
      this.loggedIn = status;
    });

  }

  /**
   * Get the data on the product via Id, then set this.stockLevelColor based on the product's stockLevel.
   * @param toFetch id of the product to be fetched. Passed into clientService.getItemByID()
   */

  getProductById(toFetch){
    this.clientService.getItemById(toFetch, true).subscribe(
      currentProduct => {
        this.currentProduct = currentProduct[0];
        if(this.currentProduct.stockLevel < 10){this.stockLevelColor = "orange"}
        if(this.currentProduct.stockLevel == 0){this.stockLevelColor = "red";}
        if(this.currentProduct.stockLevel > 10){this.stockLevelColor = "#262697";}
        this.clientService.getItemSpecifications(this.currentProduct.id).subscribe(specs => this.specs = specs)
      }
    );
  }

  /**
   * Add the ID of the product to the cart cookie, and refresh the cart cookies expiry date to 7 days from now.
   */

  addToCart(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var current = this.cookies.extractCookieValue("cart=");
    current = current + this.currentProduct.id + ",";
    var newCookie = "cart=" + current + "; expires=" + expiry.toUTCString() + ";path=/";
    this.cookies.addCookie(newCookie);
  }

  /**
   * Add the current product to the recent views cookie, and set the expiry date to 24 hours from now.
   */

  addToRecent(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    this.cookies.updateRecentViews(parseInt(this.currentProductId), expiry);
  }
}
