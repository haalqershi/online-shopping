import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]>;
  categories$: Observable<any[]>;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService) {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit(): void {
  }

}
