import { environment as env } from 'environments/environment';
import { Product } from 'shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    // return this.http.get(`${env.firebaseConfig.databaseURL}/products.json`)
    //   .pipe(
    //     map((actions : any) => {
    //         return actions.map((action : any) => ({
    //             key: action.key,
    //             val: action.payload.val()
    //         }));
    //     }));
  }

  addProduct(product : Product){
    return this.http.post(`${env.firebaseConfig.databaseURL}/products.json`, product);
  }

  getProduct(productId : string){
    return this.http.get(`${env.firebaseConfig.databaseURL}/products/${productId}.json`);
  }

  updateProduct(productId : string, product : Product){
    return this.http.put(`${env.firebaseConfig.databaseURL}/products/${productId}.json`, product);
  }

  deleteProduct(productId : string){
    return this.http.delete(`${env.firebaseConfig.databaseURL}/products/${productId}.json`);
  }
}
