import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreDataClientService } from '../services/store-data-client-service.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm;  
  nameFailed;
  mailFailed;
  queryFailed;
  sendSuccess;

  constructor(
    private builder: FormBuilder,
    private client: StoreDataClientService
  ) { }

  /**
   * OnInit - Builds an angular reactive form with the fields name, email, and query.
   */

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: '',
      email: '',
      query: ''
    })
  }

  /**
   * onsubmit()
   * Checks the contents of the query via checkQueryData(), then passes any acceptable queries into POSTContactQuery() to be sent 
   * along to the server for storage until they can be addressed.
   * @param queryData The contents of the query form, to be checked nad then submitted if found acceptable.
   */

  onSubmit(queryData){
   this.sendSuccess = false;
   this.checkQueryData(queryData);
   if(this.queryFailed == true || this.mailFailed == true || this.nameFailed == true){return}
   this.client.POSTContactQuery(queryData);
   this.contactForm.reset();
   this.sendSuccess = true;
  }


  /**
   * Function to check for nulls or empty fields when a user attempts to submit a query.
   * @param queryData Query attempt to be checked for nulls or empty strings.
   */
  
  checkQueryData(queryData){
    if(queryData.name == '' || queryData.name == null){
      this.nameFailed = true;
    }else{this.nameFailed = false}
    if(queryData.email == '' || queryData.email == null){
      this.mailFailed = true;
    }else{this.mailFailed = false}
    if(queryData.query == '' || queryData.query == null){
      this.queryFailed = true;
    }else{this.queryFailed = false}
  }
}