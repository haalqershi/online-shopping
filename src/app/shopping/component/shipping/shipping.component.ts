import { Shipping } from 'shared/models/Shipping';
import { Payment } from 'shared/models/payment';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { UserModel } from 'shared/models/user-model';

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
