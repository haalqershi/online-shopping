import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SnapshotAction } from '@angular/fire/compat/database';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product : any = {};
  id: any;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route : ActivatedRoute
    ) { 
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('productId');
    if(this.id){
      console.log("valid id: " + this.id);
      this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => {
        this.product = p;
        console.log("current product: ");
        console.log(this.product);
      });
    }
  }

  ngOnInit(): void {
  }

  save(newProduct: any){
    if(this.id){
      this.productService.update(this.id, newProduct);
    }else{
      this.productService.create(newProduct);
    }
    
    this.router.navigate(['/admin/products']);
  }

}
