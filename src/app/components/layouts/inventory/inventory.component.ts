import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service'
import { Cart } from '../../../interfaces/carta'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  cartas: Cart[]

  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
    this.InventoryService.getCartas().then(cartas => {
      console.log(cartas)
      this.cartas = cartas.cartas
    })
  }

}
