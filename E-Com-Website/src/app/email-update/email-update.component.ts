import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-update',
  templateUrl: './email-update.component.html',
  styleUrls: ['./email-update.component.css']
})
export class EmailUpdateComponent implements OnInit {

  emailChangeForm;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.emailChangeForm = this.builder.group({
      newEmail : ''
    })
  }

  onSubmit(newEmail){
    this.client.POSTNewEmail(newEmail).subscribe(response=>{
      this.router.navigateByUrl("/dashboard");
    })
  }

}
