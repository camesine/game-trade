import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
    jQuery('.product-images').slick({
            dots: true
        });
  }

}
