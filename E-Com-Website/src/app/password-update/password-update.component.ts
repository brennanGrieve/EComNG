import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service'
import { CookiesService } from '../cookies.service'

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  passChangeForm;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private cookies : CookiesService,
  ) { }

  ngOnInit(): void {
    this.passChangeForm = this.builder.group({
      pass1: '',
      pass2: '',
    })
  }

  onSubmit(newPass){
    if(newPass.pass1 == newPass.pass2){
      this.client.POSTNewPass(newPass.pass1);
    }
  }

}
