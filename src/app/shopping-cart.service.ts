import { take } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private db: AngularFireDatabase) { }

  private async getOrAddCartId() {
    let cartId= localStorage.getItem('cartId');
    if(cartId){
      return cartId;
    } 
    let result: any = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getShoppingCart(cartId: string){
    return this.db.object('/shopping-carts/'+cartId).valueChanges();
  }
 
  private create() {
    return this.db.list('/shopping-carts').push({
      createdAt: new Date().getTime()
    });
  }

  async addToShoppingCart(product: any){
    let shoppingCartId = await this.getOrAddCartId();
    let item$ = this.db.object('/shopping-carts/' + shoppingCartId + '/items/' + product.key);

    item$.valueChanges().pipe(take(1)).subscribe((item:any) =>{
      console.log("AddToShoppingCart() is firing");
      console.log("Current Product: " + product.key);
      if(item) item$.update({quantity: item.quantity+1});
      else item$.set({product: product, quantity: 1});
    })
  }
}
