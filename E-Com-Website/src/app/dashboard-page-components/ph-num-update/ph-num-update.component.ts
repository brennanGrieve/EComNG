import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreDataClientService } from '../../services/store-data-client-service.service';

@Component({
  selector: 'app-ph-num-update',
  templateUrl: './ph-num-update.component.html',
  styleUrls: ['./ph-num-update.component.css']
})
export class PhNumUpdateComponent implements OnInit {

  phnForm : FormGroup;
  @Input() phNum : string;
  showForm : Boolean = false;
  inputGood : Boolean = true;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
  ) { }

  ngOnInit(): void {
    this.phnForm = this.builder.group({
      newNumber : ''
    })
  }

  onSubmit(newNumber){
    console.log(newNumber.newNumber);
    if(!isNaN(newNumber.newNumber) && newNumber.newNumber != null){
      this.inputGood = true;
      this.client.POSTNewPhoneNumber(newNumber).subscribe(response=>{
        this.phNum = newNumber.newNumber;
      })
    }else{
      this.inputGood = false;
    }
  }

  hideShowForm(){
    this.showForm = !this.showForm;
  }

}
