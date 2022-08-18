import { OrderModel } from 'shared/models/order-model';
import { OrderService } from 'shared/services/order.service';
import { Order } from 'shared/models/order';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  
  orderId: any;
  order$: OrderModel = {
    datePlaced: 0,
    items: [],
    shipping: undefined,
    userId: ''
  };
  subscription!: Subscription;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private orderService: OrderService
) { 
 
}

ngOnInit()  {
  this.orderId = this.route.snapshot.paramMap.get('id');
  this.subscription = this.orderService.getOrderById(this.orderId).subscribe((res:any) =>{
    let obj = new OrderModel(res.datePlaced, res.items, res.shpping, res.userId);
    this.order$ = obj;
    });
  }

  getTotalPrice(items: any){
    let total = 0;
    for(let i in items){
      total += items[i].totalPrice;
    }
    return total;
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
