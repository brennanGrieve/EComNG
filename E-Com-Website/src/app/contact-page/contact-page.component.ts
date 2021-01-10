import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm;  
  constructor(
    private builder: FormBuilder
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
  }

}
