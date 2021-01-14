import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems : StoreItem[] = [];
  private cartList : number[];
  totalPrice = 0;

  constructor(
    private cookies : CookiesService,
    private client : StoreDataClientService
  ) { }

  ngOnInit() {
    this.cartList = this.cookies.splitCartCookie(this.cookies.getCartCookie());
   for(var i = 0; i < this.cartList.length; i++){
     this.client.getItemById(this.cartList[i]).subscribe(itemData =>{
       this.cartItems.push(itemData[0]);
       this.totalPrice += parseInt(itemData[0].price);
     })
   }
  }

  removeFromCart(itemToRemove){
    this.cartItems.splice(this.cartItems.indexOf(itemToRemove), 1);
    this.totalPrice -= itemToRemove.price;
    this.cookies.removeFromCartCookie(itemToRemove.id);
  }
}
