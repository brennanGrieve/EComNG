import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { StoreDataClientService } from '../../services/store-data-client-service.service';
import { UserAuthService } from '../../services/user-auth.service';
import { CookiesService } from '../../services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpForm : FormGroup;
  userFailed : boolean = false;
  passFailed : boolean = false;
  pass2Failed : boolean = false;
  emailFailed : boolean = false;
  fNameFailed : boolean = false;
  lNameFailed : boolean = false;
  shipAddrFailed : boolean = false;
  phNumFailed : boolean = false;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private authClient : UserAuthService,
    private cookies : CookiesService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.builder.group({
      user : '',
      pass : '',
      pass2 : '',
      email : '',
      fName : '',
      lName : '',
      shipAddr : '',
      phNum : '',
    })
  }
  /**
   * Checks the failure flags and aborts any attempt to submit to the server if any are set.
   */

  submitOK() : Boolean{
    if(this.userFailed){return false}
    if(this.passFailed){return false}
    if(this.pass2Failed){return false}
    if(this.emailFailed){return false}
    if(this.fNameFailed){return false}
    if(this.lNameFailed){return false}
    if(this.shipAddrFailed){return false}
    if(this.phNumFailed){return false}
    return true;
  }

  onSubmit(dataToSend){
    this.checkSubmissionData(dataToSend);
    this.client.GETUserNameUniqueness(dataToSend.user).subscribe(
      response=>{
          if(response == null){
            this.client.GETEmailUniqueness(dataToSend.email).subscribe(
              response=>{
                if(response == null){
                  if(this.submitOK()){
                    this.authClient.POSTSignUpForm(dataToSend).subscribe(authToken=>{
                      this.cookies.addAuthCookie(authToken);
                      this.router.navigateByUrl("/dashboard");
                    });
                  }
                }else{
                  this.emailFailed = true;
                }
              }
            )
          }else{
            this.userFailed = true;
          }
      }
    );
    
  }


  /**
   * Checks to ensure that all form fields have an acceptable value before continuing with submission to the backend.
   * @param toCheck Submission content to be checked for nulls & Empties
   */

  checkSubmissionData(toCheck){
      if(toCheck.user == "" || toCheck.user == null){
        this.userFailed = true;
      }else{this.userFailed = false}
      if(toCheck.pass == "" || toCheck.pass == null || toCheck.pass.length < 6){
        this.passFailed = true;
      }else{this.passFailed = false}
      if(toCheck.pass2 == "" || toCheck.pass2 == null || toCheck.pass2 !== toCheck.pass){
        this.pass2Failed = true;
      }else{this.pass2Failed = false}
      if(toCheck.email == "" || toCheck.email == null){
        this.emailFailed = true;
      }else{this.emailFailed = false}
      if(toCheck.fName == "" || toCheck.fName == null){
        this.fNameFailed = true;
      }else{this.fNameFailed = false}
      if(toCheck.lName == "" || toCheck.lName == null){
        this.lNameFailed = true;
      }else{this.lNameFailed = false}
      if(toCheck.shipAddr == "" || toCheck.shipAddr == null){
        this.shipAddrFailed = true;
      }else{this.shipAddrFailed = false}
      if(toCheck.phNum == "" || toCheck.phNum == null){
        this.phNumFailed = true
      }else{this.phNumFailed = false}
  }

}
