import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: any;

  constructor(private orderService: OrderService) { 
    this.orders$ = this.orderService.getOrders();
  }
  ngOnInit(): void {
  }

  deleteOrder(orderId: any){
    console.log(orderId);
    this.orderService.deleteOrder(orderId);
  }

}
