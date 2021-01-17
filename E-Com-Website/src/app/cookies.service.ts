import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  getCartCookie() : string{
    return this.extractCookieValue("cart=")
  }

  getRecentViewsCookie() : string{
    var tokens = document.cookie.split("recent=");
    if(tokens.length > 1){return tokens.pop().split(";")[0];
    }else{return ""}
  }

  updateRecentViews(newID : number){
    var toEdit = this.splitCookie(this.getRecentViewsCookie());
  }

  extractCookieValue(cookieName : string) : string{
    var tokens = document.cookie.split(cookieName);
    if(tokens.length > 1){return tokens.pop().split(";")[0];
    }else{return ""}
  }

  addCookie(toAdd){
    document.cookie = toAdd;
  }

  splitCookie(toSplit) : number[]{
    var cookieList : string[];
    var cookieValues : number[] = [ ];
    cookieList = toSplit.split(",");
    cookieList.forEach(element => {
      cookieValues.push(parseInt(element));
    });
    cookieValues.pop();
    return cookieValues;    
  }

  removeFromCartCookie(idToDelete : number){
    var revisedCookieValue : string = this.getCartCookie();
    var removalToken : string = idToDelete.toString() + "," ;
    revisedCookieValue = revisedCookieValue.replace(removalToken, "")
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var revisedCookie = "cart=" + revisedCookieValue + "; expires=" + expiry.toUTCString() + ";path=/";
    this.addCookie(revisedCookie);
  }
  
}
