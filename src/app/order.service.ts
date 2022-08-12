import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  deleteOrder(orderId: string) {
    this.db.object('/orders/'+ orderId).remove();
  }

  getOrders() { 
    return this.db.list('/orders').valueChanges();
  }

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order: any){
    let placedOrder = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearShoppingCart();
    return placedOrder;
  }
  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref =>
    ref.orderByChild('userId').equalTo(userId)).valueChanges();
    // return this.db.list('/orders', {
    //   query: {
    //     orderByChild: 'userId',
    //     equalTo: userId        
    //   }
    // });
  }
}
