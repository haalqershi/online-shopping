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
  @Input('shopping-cart') shoppingCart : any = {};

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToShoppingCart(product: Product){
    console.log(product);
    this.shoppingCartService.addToShoppingCart(product);
  }

  ngOnInit(): void {
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

}
