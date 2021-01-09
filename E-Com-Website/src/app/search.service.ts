import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerms;

  public updateTerms(newTerms) : void {
    this.searchTerms = newTerms;
  }
  public getTerms() : Observable<String> {
    return of(this.searchTerms);
  }

  constructor() { }
}
