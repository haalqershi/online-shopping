import { OrderHttpService } from 'shared/services/order-http.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  getOrderById(orderId: any) {
    return this.orderHttpService.getAllOrderById(orderId);
  }
  deleteOrder(orderId: string) {
    this.orderHttpService.deleteOrder(orderId).subscribe();
  }

  getOrders() { 
    // this.orderHttpService.getAllOrders();
    // return this.db.list('/orders').valueChanges();
    return  this.db
    .list('/orders')
    .snapshotChanges()
    .pipe(
    map((actions) => {
        return actions.map((action) => ({
            key: action.key,
            val: action.payload.val()
        }));
    }));
  }

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService, private orderHttpService: OrderHttpService) { }

  async placeOrder(order: any){
    let placedOrder = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearShoppingCart();
    return placedOrder;
  }
  getOrdersByUser(userId: string) {
    // userId = "alqershi.hesham@gmail.com";
    return this.db.list('/orders', ref =>
    ref.orderByChild('userId').equalTo(userId)).snapshotChanges()
    .pipe(
    map((actions) => {
        return actions.map((action) => ({
            key: action.key,
            val: action.payload.val()
        }));
    }));
  }
}
