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
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = this.authService.user$.pipe(switchMap((u:any) => {
      return this.orderService.getOrdersByUser(u?.email)
    }));
  }

  ngOnInit(): void {
  }

}
