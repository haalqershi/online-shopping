import { Order } from './../models/order';
import { pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {
  orders$: any;

  constructor(private orderService: OrderService) { 
    this.orders$ = this.orderService.getOrders();
  }
  ngOnInit(): void {
  }

  deleteOrder(orderId: string){
  }

}
