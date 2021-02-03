import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { StoreDataClientService } from '../store-data-client-service.service'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
  ) { }

  ngOnInit(): void {
  }

}
