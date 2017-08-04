import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import 'jquery-slimscroll';

declare var jQuery:any;

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

}
