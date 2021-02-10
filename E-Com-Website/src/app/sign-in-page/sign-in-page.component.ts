import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service'


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  loginForm;
  constructor(
    private builder : FormBuilder
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
    console.log(loginData);
    if(this.checkLoginData(loginData)){
      
    }
  }

  checkLoginData(loginData){
    if(loginData.user == null || loginData.user == ''){return false}
    if(loginData.pass == null || loginData.pass == ''){return false}
    return true;
  }

}
