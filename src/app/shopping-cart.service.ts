import { ShoppingCart } from './models/shopping-cart';
import { Product } from './Product';
import { map, Observable, take } from 'rxjs';
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

  async getShoppingCart()  {
    let cartId = await this.getOrAddCartId()
    return this.db.object('/shopping-carts/'+cartId).valueChanges()
      .pipe(map((x: any) => {
        return new ShoppingCart(x.items);
      }));
  }
 
  private create() {
    return this.db.list('/shopping-carts').push({
      createdAt: new Date().getTime()
    });
  }

  private getItem(shoppingCartId: string, productId: string){
    return this.db.object('/shopping-carts/' + shoppingCartId + '/items/' + productId);
  }

  addToShoppingCart(product: Product){
    this.updateQuantity(product, 1);
  }

  removeFromShoppingCart(product: Product) {
    this.updateQuantity(product, -1);
  }
  
  private async updateQuantity(product: Product, incrementOrDecrement: number){
    let shoppingCartId = await this.getOrAddCartId();
    
    let item$ = this.getItem(shoppingCartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe((item:any) =>{
      if(item){
        item$.update({quantity: item.quantity + incrementOrDecrement});
      }else{
        item$.set({product: product, quantity: 1});
      }
    });
  }

  async clearShoppingCart() {
    let shoppingCartId = await this.getOrAddCartId();
    this.db.object('/shopping-carts/' + shoppingCartId + '/items').remove();
  }
}
