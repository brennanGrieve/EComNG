import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  getCartCookie() : string{
    var tokens = document.cookie.split("cart=");
    if(tokens.length > 1){
      return tokens.pop().split(";")[0];
    }else{
      return "";
    }
  }

  addCookie(toAdd){
    document.cookie = toAdd;
  }

  splitCartCookie(toSplit) : number[]{
    var cookieList : string[];
    var cookieValues : number[] = [ ];
    cookieList = toSplit.split(",");
    cookieList.forEach(element => {
      cookieValues.push(parseInt(element));
    });
    cookieValues.pop();
    return cookieValues;    
  }
  
}
