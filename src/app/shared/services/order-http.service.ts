import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { environment as env} from 'environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpService {
  constructor(private http: HttpClient, private notifierService: NotifierService) { }
 
  getAllOrderById(orderId: any) {
    return this.http.get(`${env.firebaseConfig.databaseURL}/orders/${orderId}.json`).pipe(
      catchError(error => this.handleError(error)));
  }
  
  getAllOrders() {
    
  }

  deleteOrder(id : string){
    return this.http.delete(`${env.firebaseConfig.databaseURL}/orders/${id}.json`).pipe(
      catchError(error => this.handleError(error)));
  }

  private handleError(error: any) {
    if (error.status === 400)
      this.notifierService.notify('warning', 'Invalid Credentials');
    else if (error.status === 404)
      this.notifierService.notify('error', error.error.error.message);
    return error;
  }

}
