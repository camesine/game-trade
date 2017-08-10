import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../../interfaces/carta'


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart

  constructor() { }

  ngOnInit() {
  }

}
