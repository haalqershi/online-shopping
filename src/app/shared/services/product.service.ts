import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProductHttpService } from 'shared/services/product-http.service';
import { Product } from 'shared/models/Product';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase, private productHttpService: ProductHttpService, private router: Router, private notifierService: NotifierService) { }

  create(newProduct: Product) {
    return this.productHttpService.addProduct(newProduct).pipe(
      catchError(error => this.handleError(error))
    )
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
  }

  update(productId: any, product: Product){
    return this.productHttpService.updateProduct(productId, product).pipe(
      catchError(error => this.handleError(error))
    )
  }


  get(productId: any){
    return this.productHttpService.getProduct(productId).pipe(
      catchError(error => this.handleError(error))
    )
  }

  delete(productId: any){
    return this.productHttpService.deleteProduct(productId).pipe(
      catchError(error => this.handleError(error))
    )
  }

  private handleError(error: any) {
    if (error.status === 400)
      this.notifierService.notify('warning', 'Invalid Credentials');
    else if (error.status === 404)
      this.notifierService.notify('error', error.error.error.message);
    return error;
  }
}
