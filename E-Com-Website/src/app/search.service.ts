import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerms;

  public updateTerms(newTerms) : void {
    this.searchTerms = newTerms;
  }
  public getTerms() : string {
    return this.searchTerms;
  }

  constructor() { }
}
