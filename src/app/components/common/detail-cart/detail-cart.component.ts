import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service'
import { Cart } from '../../../interfaces/carta'

@Component({
  selector: 'detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {

  constructor(private InventoryService: InventoryService) { }

  ngOnInit() {
    
  }

}
