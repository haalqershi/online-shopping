import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-items-summary',
  templateUrl: './shopping-cart-items-summary.component.html',
  styleUrls: ['./shopping-cart-items-summary.component.css']
})
export class ShoppingCartItemsSummaryComponent implements OnInit {

  @Input('cart')
  cart!: ShoppingCart;
  
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
