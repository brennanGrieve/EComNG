import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }


  updateRecentViews(newID : number, expiry : Date){
    var toEdit = this.splitCookie(this.extractCookieValue("recent="));
    if(Number.isNaN(toEdit[0])){toEdit.pop()}
    if(toEdit.length >= 4){
      toEdit.pop();
    }
    toEdit.unshift(newID);
    var newRVCookie = toEdit.toString();
    this.addCookie("recent=" + newRVCookie + "; expires=" + expiry.toUTCString() + "; path=/");
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
    return cookieValues;    
  }

  removeFromCartCookie(idToDelete : number){
    var revisedCookieValue : string = this.extractCookieValue("cart=");
    var removalToken : string = idToDelete.toString() + "," ;
    revisedCookieValue = revisedCookieValue.replace(removalToken, "")
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var revisedCookie = "cart=" + revisedCookieValue + "; expires=" + expiry.toUTCString() + ";path=/";
    this.addCookie(revisedCookie);
  }
  
}
