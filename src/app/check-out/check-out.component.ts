import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy{ 
  shipping : any = {}; 
  cart!: ShoppingCart;
  shoppingCartSubscription!: Subscription;
  currentUserId!: string;
  userSubscription!: Subscription;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService, private authService: AuthService, private router: Router){

  }
  
  async placeOrder() {
    let order = new Order(this.currentUserId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order.getOrder());
    this.shoppingCartService.clearShoppingCart();
    this.router.navigate(['/order/confirmation', result.key]);
  } 
  
  async ngOnInit() {
    let shoppingCart$ = await this.shoppingCartService.getShoppingCart();
    this.shoppingCartSubscription = shoppingCart$.subscribe(cart => {
      this.cart = cart;
    });
    this.userSubscription = this.authService.user$.subscribe(user => this.currentUserId = user.uid);
  }
  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
