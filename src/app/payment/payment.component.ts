import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Payment } from '../models/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment;
  submitted = false;

  constructor(private paymentService: PaymentService) {
    this.payment=new Payment();
   }

  savePaymentInfo(){
    this.paymentService.save(this.payment).then(()=>{
      console.log(this.payment);
      this.submitted = true;
    });
  }

  ngOnInit(): void {
  }

}
