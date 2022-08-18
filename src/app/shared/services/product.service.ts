import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProductHttpService } from 'shared/services/product-http.service';
import { Product } from 'shared/models/Product';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase, private productHttpService: ProductHttpService, private router: Router) { }

  create(newProduct: Product) {
    // return this.db.list('/products').push(newProduct);
    return this.productHttpService.addProduct(newProduct)
  }

  getAll() {
    return  this.db
    .list('/products')
    .snapshotChanges()
    .pipe(
    map((actions) => {
        return actions.map((action) => ({
            key: action.key,
            val: action.payload.val()
        }));
    }));
    //this.productHttpService.getAllProducts().subscribe();
  }

  update(productId: any, product: Product){
    return this.productHttpService.updateProduct(productId, product).pipe(
      catchError(error => this.handleError(error))
    )
    // return this.db.object('/products/'+productId).update(product);
  }


  get(productId: any){
    return this.productHttpService.getProduct(productId).pipe(
      catchError(error => this.handleError(error))
    )
    // return this.db.object('/products/' + productId);
  }

  delete(productId: any){
    return this.productHttpService.deleteProduct(productId).pipe(
      catchError(error => this.handleError(error))
    )
    // return this.db.object('/products/'+ productId).remove();
  }


  handleError(error: Error){
    return 'error'
  }
}
