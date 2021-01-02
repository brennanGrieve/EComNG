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

}
