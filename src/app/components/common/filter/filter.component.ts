import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.chosen-select').chosen({ width: "100%" });
  }

}
