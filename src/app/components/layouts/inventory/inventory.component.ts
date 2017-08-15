import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service'
import { Cart } from '../../../interfaces/carta'
import * as _ from 'lodash'

declare var jQuery:any;

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
      this.cartas = _.chunk(cartas.cartas, 24)
    })
  }

}
