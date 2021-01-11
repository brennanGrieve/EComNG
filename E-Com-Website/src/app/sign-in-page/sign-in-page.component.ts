import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


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
  }

}
