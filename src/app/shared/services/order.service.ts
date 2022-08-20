import { OrderHttpService } from 'shared/services/order-http.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService, private orderHttpService: OrderHttpService, private notifierService: NotifierService) { }

  getOrderById(orderId: any) {
    return this.orderHttpService.getAllOrderById(orderId);
  }
  deleteOrder(orderId: string) {
    this.orderHttpService.deleteOrder(orderId).subscribe(()=>{
      this.notifierService.notify('success', 'Order was deleted successfully!');
    });
  }

  getOrders() {
    return this.db
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


  async placeOrder(order: any) {
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
