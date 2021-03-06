import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { UserAuthService } from '../services/user-auth.service';
import {CookiesService} from '../services/cookies.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  value : string = '';
  loggedIn : boolean = false;

  constructor(
    private search : SearchService,
    private authService : UserAuthService,
    private cookies : CookiesService) { }
  
  ngOnInit() {
    this.getLoginStatus();
  }

  /** 
   * Pass input from the search box (Property bound to value) to the search service. Called when the search button is pressed.
   **/
  
  updateSearchTerms(){
    this.search.updateTerms(this.value);
  }

  enterHandling(){
    document.getElementById("searchBtn").click();
  }

  getLoginStatus(){
    this.authService.getLoginStatus().subscribe(loginStatus =>{
      this.loggedIn = loginStatus;
    })
  }

  logOut(){
    this.cookies.destroyAuthCookie();
    this.authService.updateLoginStatus(false);
  }
  
}

