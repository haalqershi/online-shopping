import { Product } from './Product';
import { take } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private db: AngularFireDatabase) { }

  private async getOrAddCartId() : Promise<string> {
    let cartId= localStorage.getItem('cartId');
    if(cartId){
      return cartId;
    } 
    let result: any = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async getShoppingCart(){
    let cartId = await this.getOrAddCartId()
    return this.db.object('/shopping-carts/'+cartId).valueChanges();
  }
 
  private create() {
    return this.db.list('/shopping-carts').push({
      createdAt: new Date().getTime()
    });
  }

  private getItem(shoppingCartId: string, productId: string){
    return this.db.object('/shopping-carts/' + shoppingCartId + '/items/' + productId);
  }

  async addToShoppingCart(product: Product){
    let shoppingCartId = await this.getOrAddCartId();
    
    let item$ = this.getItem(shoppingCartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe((item:any) =>{
      if(item){
        item$.update({quantity: item.quantity+1});
      }else{
        item$.set({product: product, quantity: 1});
      }
    });
  }
}
