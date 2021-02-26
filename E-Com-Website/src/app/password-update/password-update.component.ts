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
  passFormVisible : Boolean = false;

  constructor(
    private builder : FormBuilder,
    private client : StoreDataClientService,
    private cookies : CookiesService,
  ) { }

  ngOnInit(): void {
    this.passChangeForm = this.builder.group({
      oldPass:'',
      pass1: '',
      pass2: '',
    })
  }

  onSubmit(newPass){
    if(newPass.pass1 == newPass.pass2){
      var postData = [newPass.pass1, newPass.oldPass];
      this.client.POSTNewPass(postData).subscribe(result =>{
        if(result != null){
          this.cookies.addAuthCookie(result);
        }
        else{
          //The password was wrong, so handle notifying the user here
        }
      })
    }
  }
  
  hideShowPassForm(){
    this.passFormVisible = !this.passFormVisible;
  }

}
