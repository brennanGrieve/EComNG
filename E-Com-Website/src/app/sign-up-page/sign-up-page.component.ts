import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { StoreDataClientService } from '../store-data-client-service.service'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpForm

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
      firstName : '',
      lastName : '',
      shipAddr : '',
      phNum : '',
    })
  }

  onSubmit(dataToSend){
    this.checkSubmissionData(dataToSend);
  }

  checkSubmissionData(toCheck){

  }

}
