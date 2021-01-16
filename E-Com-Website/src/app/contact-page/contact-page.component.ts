import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service';


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

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: '',
      email: '',
      query: ''
    })
  }

  onSubmit(queryData){
    /*
    * Once the backend is ready, use angular's HTTP module to POST to server. Perhaps encapsulate in another service that focuses
    * entirely on PUT/POST methods? Already have one for GET methods.
    */
   this.sendSuccess = false;
   this.checkQueryData(queryData);
   if(this.queryFailed == true || this.mailFailed == true || this.nameFailed == true){return}
   this.client.POSTContactQuery(queryData);
   this.contactForm.reset();
   this.sendSuccess = true;
  }

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