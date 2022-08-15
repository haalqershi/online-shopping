import { Shipping } from './../models/Shipping';
import { Payment } from './../models/payment';
import { ShoppingCart } from './../models/shopping-cart';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { OrderService } from '../order.service';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  @Input() shipping!: Shipping;
  @Output() shippingChange = new EventEmitter<Shipping>();

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router){
  }

}
