import { Observable } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{ 
  shoppingCart$!: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService){
  }
  
  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingCartService.getShoppingCart();
  }

  placeOrder() {
   
  } 
}
