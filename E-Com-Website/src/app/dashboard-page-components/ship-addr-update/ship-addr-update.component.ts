import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreDataClientService } from '../../services/store-data-client-service.service';

@Component({
  selector: 'app-ship-addr-update',
  templateUrl: './ship-addr-update.component.html',
  styleUrls: ['./ship-addr-update.component.css']
})
export class ShipAddrUpdateComponent implements OnInit {

  @Input() fName : string;
  @Input() lName : string;
  @Input() shipAddr : string;


  showForm : Boolean = false;
  addrUpdateForm : FormGroup;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
  ) { }

  ngOnInit(): void {
    this.addrUpdateForm = this.builder.group({
      newAddr : ''
    })
  }

  onSubmit(newAddr){
    this.client.POSTNewShippingAddress(newAddr).subscribe(response=>{
      this.shipAddr = newAddr.newAddr;
    })
  }
  
  hideShowForm(){
    this.showForm = !this.showForm;
  }

}
