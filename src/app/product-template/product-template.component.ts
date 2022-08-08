import { Product } from './../Product';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  @Input('product') product: Product= {
    key: '',
    category: '',
    name: '',
    price: 0,
    imgUrl: ''
  };
  @Input('show-actions') showActions = true;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToShoppingCart(product: Product){
    console.log(product);
    this.shoppingCartService.addToShoppingCart(product);
  }

  ngOnInit(): void {
  }

}
