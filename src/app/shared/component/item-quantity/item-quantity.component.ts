import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Product } from 'shared/models/Product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent implements OnInit {

  @Input('product') product!: Product;
  @Input('shopping-cart') shoppingCart!: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToShoppingCart(){
    this.shoppingCartService.addToShoppingCart(this.product);
  }

  removeFromShoppingCart(){
    this.shoppingCartService.removeFromShoppingCart(this.product);
  }

  ngOnInit(): void {
  }

 

}
