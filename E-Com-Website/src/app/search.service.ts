import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerms = new BehaviorSubject("");

  public updateTerms(newTerms) : void {
    this.searchTerms.next(newTerms);
  }

  constructor() { }
}
