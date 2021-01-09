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
  private resourceUrl = "api/catalog"


  getStoreItems() : Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>(this.resourceUrl);
  }

  getItemById(toFetch : number) : Observable<StoreItem>{
    const targetUrl = this.resourceUrl + "/" + toFetch;
    return this.http.get<StoreItem>(targetUrl);
  }

searchItemByName(searchTerms : string) : Observable<StoreItem[]>{
    const searchUrl = this.resourceUrl + "/?name=$" + searchTerms;
    console.log(searchUrl);
    return this.http.get<StoreItem[]>(searchUrl);
  }

}
