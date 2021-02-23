import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoreDataClientService } from '../store-data-client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-addr-update',
  templateUrl: './ship-addr-update.component.html',
  styleUrls: ['./ship-addr-update.component.css']
})
export class ShipAddrUpdateComponent implements OnInit {

  addrUpdateForm;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.addrUpdateForm = this.builder.group({
      newAddr : ''
    })
  }

  onSubmit(newAddr){
    this.client.POSTNewShippingAddress(newAddr).subscribe(response=>{
      
    })
  }

}
