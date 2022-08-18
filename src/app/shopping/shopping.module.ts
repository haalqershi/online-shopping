import { AdminModule } from './../admin/admin.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrderConfirmationComponent } from './component/order-confirmation/order-confirmation.component';
import { OrdersComponent } from './component/orders/orders.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ProductsComponent } from './component/products/products.component';
import { ShippingComponent } from './component/shipping/shipping.component';
import { ShoppingCartItemsSummaryComponent } from './component/shopping-cart-items-summary/shopping-cart-items-summary.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { OrderDetailsComponent } from 'shared/component/order-details/order-details.component';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImgSliderComponent } from './component/img-slider/img-slider.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const paths = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'orders/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuardService]
  },
   {
    path: 'order/confirmation/:id',
    component: OrderConfirmationComponent,
    canActivate: [AuthGuardService]
  },
]

@NgModule({
  declarations: [
    CheckOutComponent,
    OrdersComponent,
    ShoppingCartComponent,
    ShoppingCartComponent,
    ProductFilterComponent,
    OrderConfirmationComponent,
    ShoppingCartItemsSummaryComponent,
    PaymentComponent,
    ShippingComponent,    
    ProductsComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminModule,
    RouterModule.forChild(paths),
    NgbModule,
    FormsModule,
    MatSliderModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports:[
    CheckOutComponent,
    OrdersComponent,
    ShoppingCartComponent,
    ShoppingCartComponent,
    ProductFilterComponent,
    OrderConfirmationComponent,
    ShoppingCartItemsSummaryComponent,
    PaymentComponent,
    ShippingComponent,    
    ProductsComponent,
    ImgSliderComponent
  ],
  providers:[
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD ' } 
  ]
})
export class ShoppingModule { }
