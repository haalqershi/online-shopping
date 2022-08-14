import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {take} from 'rxjs/operators';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product : any = {};
  productId: any;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route : ActivatedRoute
    ) { 
    this.categories$ = categoryService.getAll();
    this.productId = this.route.snapshot.paramMap.get('productId');
    if(this.productId){
      this.productService.get(this.productId).pipe(take(1)).subscribe((p: any) => {
        this.product = p;
      });
    }
  }

  ngOnInit(): void {
  }

  save(newProduct: Product){
    if(this.productId){
      console.log(newProduct);
      this.productService.update(this.productId, newProduct).subscribe();
    }else{
      this.productService.create(newProduct).subscribe();
    }
    this.router.navigate(['/admin/products']);
   
  }

  delete(){
    if(!confirm('Do you want to delete this Product?')){
      return;
    }
    this.productService.delete(this.productId).subscribe();
    this.router.navigate(['/admin/products']);
  }

}
