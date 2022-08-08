import { ShoppingCartService } from './../shopping-cart.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../Product';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products:  any[] = [];
  category: any;
  filteredProducts: any[] = [];
  shoppingCart: any;
  subscription!: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { // todo: decouple the nested subscribtion 
    
    this.productService.getAll().subscribe( products =>{

      this.products = products.map((pro:any) => {
        let product: Product = pro.val;
        product.key = pro.key;
        return product;
      })
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ? 
          this.products?.filter((p: any) => p.category == this.category) : this.products;
      });
    });
  }



  async ngOnInit() {
    this.subscription =  (await this.shoppingCartService.getShoppingCart()).subscribe(cart =>{
      this.shoppingCart = cart;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
