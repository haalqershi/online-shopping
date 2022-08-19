import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'shared/models/Product';
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
  p:any;
  isSearch: boolean = false;

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

  public searchForProducts(searchFor: string, searchCategory: string): void {
    let searchResult: Product[] = [];
    
    for (const product of this.products) {
      if(searchCategory && searchCategory.length > 0){
        if (product.category.toLocaleLowerCase() === searchCategory.toLocaleLowerCase() 
            && product.name.toLocaleLowerCase().indexOf(searchFor.toLocaleLowerCase()) !== -1) {
          searchResult.push(product);
        }
      }else{
        if (product.name.toLocaleLowerCase().indexOf(searchFor.toLocaleLowerCase()) !== -1) {
          searchResult.push(product);
        }
      }
    }

    this.isSearch = true;
    this.filteredProducts = searchResult;

  }
}
