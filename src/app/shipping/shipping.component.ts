import { ShoppingCart } from './../models/shopping-cart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit, OnDestroy {

  shipping : any = {}; 
  userSubscription!: Subscription;
  currentUserId!: string;
  @Input('cart') cart!: ShoppingCart;

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe((user:any) => this.currentUserId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.currentUserId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order.getOrder());
    // this.shoppingCartService.clearShoppingCart();
    this.router.navigate(['/order/confirmation', result.key]);
  } 

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
