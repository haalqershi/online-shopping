import { ProductService } from 'shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit, AfterViewInit {

  products$: any;

  displayedColumns: string[] = ['id', 'name', 'price', 'category', 'edit', 'delete'];
  dataSource!: MatTableDataSource<UserData>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService) {   
  }

  delete(productId: string){
    this.productService.delete(productId).subscribe();
  }

  ngOnInit(): void {
    
    this.productService.getAll()
    .subscribe((products : any)=> {
      const allProducts: any[]= [];
      this.products$ = products;
      for(let i = 0; i < products.length; i++){
        const tempUsers : any = {};
        tempUsers['key'] = products[i].key;
        tempUsers['id'] = i+1;
        tempUsers['name'] = products[i].val.name;
        tempUsers['price'] = products[i].val.price;
        tempUsers['category'] =products[i].val.category;
        allProducts.push(tempUsers);

      }
      this.dataSource = new MatTableDataSource(allProducts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
