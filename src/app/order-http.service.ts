import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpService {
  constructor(private http: HttpClient) { }
 
  getAllOrderById(orderId: any) {
    return this.http.get(`${env.firebaseConfig.databaseURL}/orders/${orderId}.json`);
  }
  
  getAllOrders() {
    
  }

  deleteOrder(id : string){
    return this.http.delete(`${env.firebaseConfig.databaseURL}/orders/${id}.json`);
  }

}
