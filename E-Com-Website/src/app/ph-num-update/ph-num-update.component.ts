import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ph-num-update',
  templateUrl: './ph-num-update.component.html',
  styleUrls: ['./ph-num-update.component.css']
})
export class PhNumUpdateComponent implements OnInit {

  phnForm;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.phnForm = this.builder.group({
      newNumber : ''
    })
  }

  onSubmit(newNumber){
    this.client.POSTNewPhoneNumber(newNumber).subscribe(response=>{
      this.router.navigateByUrl("/dashboard");
    })
  }

}
