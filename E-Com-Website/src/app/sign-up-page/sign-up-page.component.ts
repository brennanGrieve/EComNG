import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { StoreDataClientService } from '../store-data-client-service.service'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpForm : FormGroup;
  uNameFailed : boolean = false;
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
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.builder.group({
      uname : '',
      pass : '',
      pass2 : '',
      email : '',
      fName : '',
      lName : '',
      shipAddr : '',
      phNum : '',
    })
  }

  submitOK(){

  }

  onSubmit(dataToSend){
    this.checkSubmissionData(dataToSend);
    if(this.submitOK){
      
    }
  }

  checkUniqueName(uName){
    this.client.GETUserNameUniqueness(uName).subscribe(
      response=>{
        this.uNameFailed = response["uniqueness"];
      }
    );
  }

  /**
   * Checks to ensure that all form fields have an acceptable value before continuing with submission to the backend.
   * @param toCheck Submission content to be checked for nulls & Empties
   */

  checkSubmissionData(toCheck){
      if(toCheck.uname == "" || toCheck.uname == null){
        this.uNameFailed = true;
      }else{this.uNameFailed = false}
      this.checkUniqueName(toCheck.uname);
      if(toCheck.pass == "" || toCheck.pass == null){
        this.passFailed = true;
      }else{this.passFailed = false}
      if(toCheck.pass2 == "" || toCheck.pass2 == null){
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
