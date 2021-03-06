import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { CookiesService } from '../../services/cookies.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  loginForm : FormGroup;
  success : Boolean = true;
  constructor(
    private builder : FormBuilder,
    private auth : UserAuthService,
    private cookies : CookiesService,
    private router : Router
  ) { }

  /**
   * OnInit - Build the login form with the fields 'user' and 'pass'.
   */

  ngOnInit() {
    this.loginForm = this.builder.group({
      user: '',
      pass: '',
    })
  }

  onSubmit(loginData){
    /**
     * Make login call to the backend here.
     */
    if(this.checkLoginData(loginData)){
      this.auth.POSTSignInInfo(loginData).subscribe(UAuthToken =>{
        //put the authtoken in a cookie so that the client can use it to access the account, or if a failure is returned, handle it
        if(UAuthToken["failed"] === undefined){
          this.cookies.addAuthCookie(UAuthToken);
          this.router.navigateByUrl("/dashboard");
          this.auth.updateLoginStatus(true);
        }else{
          this.success = false;
        }
      })
    }
  }

  checkLoginData(loginData){
    if(loginData.user == null || loginData.user == ''){return false}
    if(loginData.pass == null || loginData.pass == ''){return false}
    return true;
  }

}
