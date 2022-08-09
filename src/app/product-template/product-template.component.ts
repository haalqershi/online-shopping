import { ShoppingCart } from './../models/shopping-cart';
import { Product } from './../Product';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  @Input('product') product!: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart')
  shoppingCart!: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToShoppingCart(){
    this.shoppingCartService.addToShoppingCart(this.product);
  }


  ngOnInit(): void {
  }

}
