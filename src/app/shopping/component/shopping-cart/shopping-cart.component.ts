import { map, Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$!: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { 
  }

  async ngOnInit() {
    (await this.shoppingCartService.getShoppingCart()).subscribe((x : ShoppingCart) =>{
      this.cart$ = x;
    })
  }

  clearShoppingCart(){
    this.shoppingCartService.clearShoppingCart();
  }

}
