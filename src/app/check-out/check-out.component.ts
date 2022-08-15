import { Shipping } from './../models/Shipping';
import { Payment } from './../models/payment';
import { Observable, Subscription, map } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{ 
  counter : number = 0;
  payment: Payment = new Payment();
  shipping: Shipping = new Shipping();
  userSubscription!: Subscription;
  currentUserId!: any;
  cart! : ShoppingCart;
  
  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService, private authService: AuthService, private router: Router){
  }
  
  async ngOnInit(){
     await (await this.shoppingCartService.getShoppingCart()).subscribe(cart => {
      this.cart = cart
    })
    this.userSubscription = this.authService.user$.subscribe((user:any) => this.currentUserId = user.email);
  }

  placeOrder() {
      console.log("currentUser Id: " + this.currentUserId)
      console.log("items: " + this.cart.items)
      let order = new Order(this.currentUserId, this.shipping, this.cart);
      this.orderService.placeOrder(order.getOrder()).then((res)  =>{
        const key = res.key;
        this.router.navigate(['/order/confirmation', key]);
      });
  } 

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  printAll(){
    console.log(this.payment);
    console.log(this.shipping);
  }


}
