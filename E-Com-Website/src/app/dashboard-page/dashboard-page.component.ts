import { Component, OnInit } from '@angular/core';
import { StoreDataClientService } from '../store-data-client-service.service';
import {CookiesService} from '../cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  username;
  fName;
  lName;
  phNum;
  email;

  constructor(
    private client : StoreDataClientService,
    private router :  Router
  ) { }
  

  ngOnInit(): void {
    this.getUserData();
  }


  getUserData(){
    this.client.fetchUserInfo(this.cookies.extractCookieValue("auth")).subscribe(response=>{
      if(response == null){
        this.router.navigateByUrl('/signedOut');
      }
      console.log(response);
      this.username = response["USER_NAME"];
      this.fName = response["F_NAME"];
      this.lName = response["L_NAME"];
      this.email = response["EMAIL"];
      this.phNum = response["PH_NUM"];
      this.cookies.addAuthCookie(response["authToken"]);
    })
  }
}
