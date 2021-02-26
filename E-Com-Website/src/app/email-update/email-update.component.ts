import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service';

@Component({
  selector: 'app-email-update',
  templateUrl: './email-update.component.html',
  styleUrls: ['./email-update.component.css']
})
export class EmailUpdateComponent implements OnInit {

  emailChangeForm;
  @Input() email;
  showForm : Boolean = false;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
  ) { }

  ngOnInit(): void {
    this.emailChangeForm = this.builder.group({
      newEmail : ''
    })
  }

  onSubmit(newEmail){
    this.client.POSTNewEmail(newEmail).subscribe(response=>{
      this.email = newEmail.newEmail;
    })
  }

  hideShowForm(){
    this.showForm = !this.showForm;
  }

}
