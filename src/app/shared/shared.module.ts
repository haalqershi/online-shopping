import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemQuantityComponent } from './component/item-quantity/item-quantity.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { ProductTemplateComponent } from './component/product-template/product-template.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { HttpService } from './services/http.service';
import { OrderHttpService } from './services/order-http.service';
import { OrderService } from './services/order.service';
import { PaymentService } from './services/payment.service';
import { ProductHttpService } from './services/product-http.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    ItemQuantityComponent,
    OrderDetailsComponent,
    ProductTemplateComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ItemQuantityComponent,
    OrderDetailsComponent,
    ProductTemplateComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    OrderService,
    PaymentService,
    HttpService,
    OrderHttpService,
    ProductHttpService
  ]
})
export class SharedModule { }
