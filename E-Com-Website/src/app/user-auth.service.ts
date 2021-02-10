import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreItem } from './store-item';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private http : HttpClient
  ) { }

  POSTSignUpForm(formToPOST){
    this.http.post('http://13.55.122.69/api/post/postNewAcc.php', formToPOST).subscribe(
      response=> console.log(response)
    );
  }
}
