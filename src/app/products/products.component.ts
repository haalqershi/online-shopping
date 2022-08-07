import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:  any[] = [];
  categories$: Observable<any[]>;
  category: any;
  filteredProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) { // todo: decouple the nested subscribtion 
    this.productService.getAll().subscribe( products =>{
      this.products = products;
      
      route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ? 
          this.products?.filter((p: any) => p.val.category === this.category) : this.products;
      });
    });

    this.categories$ = this.categoryService.getAll();

   
  }

  ngOnInit(): void {
  }

}
