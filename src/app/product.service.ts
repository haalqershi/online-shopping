import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(newProduct: any) {
    return this.db.list('/products').push(newProduct);
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

  update(productId: any, product: any){
    return this.db.object('/products/'+productId).update(product);
  }

  get(productId: any){
    return this.db.object('/products/' + productId);
  }

  delete(productId: any){
    return this.db.object('/products/'+ productId).remove();
  }
}
