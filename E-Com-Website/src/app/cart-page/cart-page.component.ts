import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../services/cookies.service';
import { StoreDataClientService } from '../services/store-data-client-service.service';
import { StoreItem } from '../store-item';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems : StoreItem[] = [];
  cartList : number[] = [];
  totalPrice = 0;

  constructor(
    private cookies : CookiesService,
    private client : StoreDataClientService
  ) { }

  /**
   * OnInit - Grabs the contents of the cart cookie and splits it appropriately via cookies.extractCookieValue and cookies.splitCookie.
   * Afterwards, it grabs each store item and subscribes an index of the this.itemData array to hold the received data for display.
   * Also increases this.totalprice by the itemData.price of each stock item fetched.
   */

  ngOnInit() {
    this.cartList = this.cookies.splitCookie(this.cookies.extractCookieValue("cart="));
    this.cartList.pop();
    for(var i = 0; i < this.cartList.length; i++){
      this.client.getItemById(this.cartList[i],false).subscribe(itemData =>{
        this.cartItems.push(itemData[0]);
        this.totalPrice += parseInt(itemData[0].price);
     })
   }
  }

  /**
   * Uses array.splice() to remove a specified ID from the array of items currently loaded, decreases the total Price display appropriately,
   * and then calls cookies.removeFromCartCookie() to remove it from the cookie data as well.
   * @param itemToRemove the storeItem to remove from the cart.
   */

  removeFromCart(itemToRemove : StoreItem){
    this.cartItems.splice(this.cartItems.indexOf(itemToRemove), 1);
    this.totalPrice -= itemToRemove.price;
    this.cookies.removeFromCartCookie(itemToRemove.id);
  }
}
