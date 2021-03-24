import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerms = new BehaviorSubject("");


  /**
   * Updates the BehaviorSubject this.searchTerms with a new set of seach terms from the top bar's search input.
   * @param newTerms The search terms being pushed to the BehaviorSubject.
   */
  public updateTerms(newTerms) : void {
    this.searchTerms.next(newTerms);
  }

  constructor() { }
}
