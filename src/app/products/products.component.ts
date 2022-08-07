import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:  any[] = [];
  category: any;
  filteredProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { // todo: decouple the nested subscribtion 
    this.productService.getAll().subscribe( products =>{
      this.products = products;
      
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ? 
          this.products?.filter((p: any) => p.val.category === this.category) : this.products;
      });
    });
  }

  ngOnInit(): void {
  }

}
