import { Shipping } from 'shared/models/Shipping';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

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
