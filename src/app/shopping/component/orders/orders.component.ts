import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: any;

  constructor(private orderService: OrderService, private authService: AuthService) { 
    this.orders$ = this.authService.user$.pipe(switchMap((u:any) => {
      return this.orderService.getOrdersByUser(u.email)
    }));
  }
  ngOnInit(): void {
  }

  
}
