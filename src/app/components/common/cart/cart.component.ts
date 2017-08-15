import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../../interfaces/carta'
import { InventoryService } from '../../../services/inventory.service'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart

  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
  }

  Seleccion() {
    this.InventoryService.CartaSeleccionada = this.cart
  }

}
