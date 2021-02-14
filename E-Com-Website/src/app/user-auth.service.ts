import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookiesService } from './cookies.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private http : HttpClient,
    private cookies : CookiesService
  ) { }

  private loginStatus = new BehaviorSubject<boolean>(null)

  POSTSignUpForm(formToPOST) : Observable<Object>{
    return this.http.post('http://13.55.122.69/api/post/postNewAcc.php', formToPOST);
  }

  POSTSignInInfo(dataToPOST) : Observable<Object>{
    return this.http.post('http://13.55.122.69/api/post/postLoginAttempt.php', dataToPOST)
  }
  updateLoginStatus(newStatus : boolean){
    this.loginStatus.next(newStatus);
  }
  getLoginStatus() : BehaviorSubject<boolean>{
    if(this.loginStatus.value == null){
      /**
       * Perform initial check to initialize loginStatus with the correct state
       */
    }
    return this.loginStatus;
  }
}
