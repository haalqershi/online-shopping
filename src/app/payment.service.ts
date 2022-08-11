import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Payment } from './models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private db: AngularFireDatabase) { 
    
  }

  save(payment: Payment){
    return this.db.list('/payment').push(payment);
  }
}


