import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  products$: Observable<any[]>;
  constructor(private productService: ProductService) { 
    this.products$ = this.productService.getAll();
    // this.products$.forEach(x =>{
    //   console.log(x);
    // })
  }

  delete(productId: string){
    this.productService.delete(productId).subscribe();
  }

  ngOnInit(): void {
  }

}
