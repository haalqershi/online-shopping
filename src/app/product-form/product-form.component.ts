import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SnapshotAction } from '@angular/fire/compat/database';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService,
              private productService: ProductService
    ) { 
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  save(newProduct: any){
    this.productService.create(newProduct);
  }

}
