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
    this.http.post('http://13.55.122.69/api/post/postNewAcc.php', formToPOST).subscribe();
  }

  POSTSignInInfo(dataToPOST){
    this.http.post('http://13.55.122.69/api/post/postLoginAttempt.php', dataToPOST).subscribe(UAuthToken =>{
       //put the authtoken in a cookie so that the client can use it to access the account, or if a failure is returned, handle it
    })
  }
}
