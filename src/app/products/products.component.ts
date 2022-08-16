import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../Product';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:  any[] = [];
  category: any;
  filteredProducts: any[] = [];
  shoppingCart$!: Observable<ShoppingCart>;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { // todo: decouple the nested 

  }

  async ngOnInit() {
    this.shoppingCart$ =  await this.shoppingCartService.getShoppingCart();
    this.getProducts();
  }

  private filtering(){
    this.filteredProducts = (this.category) ? 
    this.products?.filter((p: any) => p.category == this.category) : this.products;
  }

  private getProducts(){
    this.productService.getAll().subscribe( products =>{

      this.products = products.map((pro:any) => {
        let product: Product = pro.val;
        product.key = pro.key;
        return product;
      })
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
        this.filtering()
      });
    });
  }
}
