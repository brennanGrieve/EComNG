import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  /**
   * Fetches the recent cookie, splits it, checks for invalid/duplicate members, maintains a max length of 4, then uses unshift()
   * to add the new value to the front of the array. Following that, it stringifies the array and uses it to update the cookie via
   * addCookie();
   * @param newID The new ID to add to the recent cookie
   * @param expiry The new calculated expiry date for the recent cookie
   */

  updateRecentViews(newID : number, expiry : Date){
    var toEdit = this.splitCookie(this.extractCookieValue("recent="));
    if(Number.isNaN(toEdit[0])){toEdit.pop()}
    if(toEdit.includes(newID)){return}
    if(toEdit.length >= 4){
      toEdit.pop();
    }
    toEdit.unshift(newID);
    var newRVCookie = toEdit.toString();
    this.addCookie("recent=" + newRVCookie + "; expires=" + expiry.toUTCString() + "; path=/");
  }

  /**
   * Finds the cookie being searched for, splits it from the rest of the cookie data with string.split(), pops unneeded runoff then
   * returns the cookie value.
   * @param cookieName The name of the cookie to be fetched.
   */

  extractCookieValue(cookieName : string) : string{
    var tokens = document.cookie.split(cookieName);
    if(tokens.length > 1){return tokens.pop().split(";")[0];
    }else{return ""}
  }

  /**
   * Wrapping function for writing cookies.
   * @param toAdd The full form of the cookie to be added.
   */

  addCookie(toAdd){
    document.cookie = toAdd;
  }

  /**
   * Splits the string value of the provided cookie into a string array, then parses it into a number array for return.
   * @param toSplit The current cookie string to split.
   */

  splitCookie(toSplit) : number[]{
    var cookieList : string[];
    var cookieValues : number[] = [ ];
    cookieList = toSplit.split(",");
    cookieList.forEach(element => {
      cookieValues.push(parseInt(element));
    });
    return cookieValues;    
  }

  /**
   * removeFromcartCookie()
   * Fetches the full string form of the cart cookie, then uses String.replace to remove the Id before rewriting the new string
   * back into the cookie with a refreshed expiry date of +7 days.
   * @param idToDelete The id in number form of the item to be removed from the cart cookie.
   */

  removeFromCartCookie(idToDelete : number){
    var revisedCookieValue : string = this.extractCookieValue("cart=");
    var removalToken : string = idToDelete.toString() + "," ;
    revisedCookieValue = revisedCookieValue.replace(removalToken, "")
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    var revisedCookie = "cart=" + revisedCookieValue + "; expires=" + expiry.toUTCString() + ";path=/";
    this.addCookie(revisedCookie);
  }
  addAuthCookie(authToken){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 65535);
    var authCookie = "auth=" + authToken + "; expires=" + expiry + ";path=/";
    this.addCookie(authCookie);
  }
  checkAuthCookie() : boolean{
    var authCookie = this.extractCookieValue("auth");
    if(authCookie == null){
      return false;
    }else{
      return true;
    }
  }
  destroyAuthCookie(){
    var destroyedAuth = "auth=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
    this.addCookie(destroyedAuth);
  }
}
