import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order: any){
    let placedOrder = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearShoppingCart();
    return placedOrder;
  }
}
