import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';
import { StoreDataClientService } from '../store-data-client-service.service';
import { StoreItem } from '../store-item';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  private cartItems : StoreItem[] = [];
  private cartList;

  constructor(
    private cookies : CookiesService,
    private client : StoreDataClientService
  ) { }

  ngOnInit() {
    this.cartList = this.cookies.splitCartCookie(this.cookies.getCartCookie());
    /*
    * Use for loops to subscribe each index of cartItems to a returned piece of cart data.
    */
    console.log(this.cartItems)
  }
}
