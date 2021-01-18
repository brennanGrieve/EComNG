import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StoreItem } from './store-item';


@Injectable({
  providedIn: 'root'
})
export class StoreDataClientService {

  constructor(
    private http: HttpClient,
    ){
  }


  getStoreItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getRecent.php');
  }

  getPopularItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getPopular.php');
  }

  getItemSpecifications(currentId : number) : Observable<Object[]>{
    return this.http.get<Object[]>('http://13.55.122.69/api/get/getSpecs.php?id='+currentId);
  }

  getItemById(currentId : number, view : boolean) : Observable<StoreItem>{
    if(view){return this.http.get<StoreItem>('http://13.55.122.69/api/get/getById.php?id='+currentId + '&inc=1');}
    else{return this.http.get<StoreItem>('http://13.55.122.69/api/get/getById.php?id='+currentId)}
  }

searchItemByName(searchTerms : string) : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getSearchResults.php?name=' + searchTerms);
  }

POSTContactQuery(queryToPOST){
  console.log(queryToPOST);
  this.http.post('http://13.55.122.69/api/post/postQuery.php', queryToPOST).subscribe();
  }

}
