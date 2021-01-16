import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    console.log("Now attempting a backend GET. If you see this printout and the grid works, then the backend is providing.")
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getRecent.php');
  }

  getPopularItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/getPopular.php');
  }

  getItemSpecifications(currentId : number) : Observable<Object[]>{
    return this.http.get<Object[]>('http://13.55.122.69/api/get/getSpecs.php?id='+currentId);
  }

  getItemById(currentId : number) : Observable<StoreItem>{
    return this.http.get<StoreItem>('http://13.55.122.69/api/get/getById.php?id='+currentId);
  }

searchItemByName(searchTerms : string) : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>('http://13.55.122.69/api/get/searchByName.php?name=' + searchTerms);
  }

}
