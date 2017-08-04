import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
declare var jQuery:any;

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.AuthService.logout()
  }
  
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

}
