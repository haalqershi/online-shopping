import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from 'environments/environment';

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
