import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StoreItem } from '../store-item';
import { Review } from '../interfaces/review';


@Injectable({
  providedIn: 'root'
})
export class StoreDataClientService {

  constructor(
    private http: HttpClient,
    ){
  }


  /**
   * Performs HTTP GET request for the 12 most recent store items.
   */

  getRecentItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getRecent.php');
  }

  /**
   * Perfoms HTTP GET request for the 8 most popular store items.
   */

  getPopularItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getPopular.php');
  }

  /**
   * Performs HTTP GET request for the specification data of a store item.
   * @param currentId id of the item to fetch specs of.
   */

  getItemSpecifications(currentId : number) : Observable<Object[]>{
    return this.http.get<Object[]>('http://13.55.122.69/api/get/getSpecs.php?id='+currentId);
  }

  /**
   * Performs HTTP GET request for an item by its ID.
   * @param currentId The id of the item to be fetched.
   * @param view To be sent server-side so the server knows if it should increment the view count of the item.
   */

  getItemById(currentId : string, view : boolean) : Observable<StoreItem>{
    if(view){return this.http.get<StoreItem>('http://13.55.122.69/api/get/getById.php?id='+currentId + '&inc=1');}
    else{return this.http.get<StoreItem>('http://13.55.122.69/api/get/getById.php?id='+currentId)}
  }

  /**
   * Performs an HTTP GET request for results of a search query.
   * @param searchTerms The search terms to be used in the request.
   */

  searchItemByName(searchTerms : string) : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getSearchResults.php?name=' + searchTerms);
  }

  getUserReview(prodId : String){
    return this.http.get<Object>('http://13.55.122.69/api/get/getUserReview.php?id=' + prodId);
  }

  /**
   * Performs HTTP POST request to send a user query to the server for storage.
   * @param queryToPOST Query data to be POSTed to the server.
   */

  POSTContactQuery(queryToPOST){
    this.http.post('http://13.55.122.69/api/post/postQuery.php', queryToPOST).subscribe();
  }

  GETUserNameUniqueness(toCheck : String) : Observable<Object>{
    return this.http.get<Object>('http://13.55.122.69/api/get/getUserNameUniqueness.php?name=' + toCheck);
  }

  GETEmailUniqueness(toCheck : String) : Observable<Object>{
    return this.http.get<Object>('http://13.55.122.69/api/get/getEmailUniqueness.php?email=' + toCheck);
  }

  GETReviewsByOffset(offset: number, id : number){
    return this.http.get<Review[]>('http://13.55.122.69/api/get/getItemReviews.php?id='+ id + '&offset=' + offset);
  }

  fetchUserInfo(authToken){
    return this.http.post('http://13.55.122.69/api/post/postUDataRequest.php', authToken);
  }

  fetchUserName(authToken){
    return this.http.post('http://13.55.122.69/api/post/postUNameRequest.php', authToken);
  }

  POSTNewPass(newPass){
    return this.http.post('http://13.55.122.69/api/post/postNewPass.php', newPass);
  }

  POSTNewEmail(newEmail : string){
    return this.http.post('http://13.55.122.69/api/post/postNewEmail.php', newEmail);
  }
  
  POSTNewPhoneNumber(newNumber : string ){
    return this.http.post('http://13.55.122.69/api/post/postNewPhoneNumber.php', newNumber);
  }

  POSTNewShippingAddress(newAddr : string){
    return this.http.post('http://13.55.122.69/api/post/postNewShippingAddress.php', newAddr);
  }
  
  POSTReview(toPOST){
    return this.http.post('http://13.55.122.69/api/post/postReview.php', toPOST);
  }
  POSTReviewEdit(toPOST){
    return this.http.post('http://13.55.122.69/api/post/postReviewEdit.php', toPOST)
  }

}
