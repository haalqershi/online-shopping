import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from '../models/payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  //payment: Payment;
  submitted = false;
  @Input() payment!: Payment;
  @Output() paymentChange = new EventEmitter<Payment>();

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
