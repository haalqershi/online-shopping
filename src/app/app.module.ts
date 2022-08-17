import { ProductHttpService } from './product-http.service';
import { OrderHttpService } from './order-http.service';
import { HttpService } from './http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaymentService } from './payment.service';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { environment } from './../environments/environment';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, CanActivate } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ItemQuantityComponent } from './item-quantity/item-quantity.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ShoppingCartItemsSummaryComponent } from './shopping-cart-items-summary/shopping-cart-items-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OnlineShoppingHttpInterceptor } from './online-shopping-http-interceptor';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { SignupComponent } from './signup/signup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
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
  {
    path: 'admin/orders',
    component: OrdersAdminComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/orders/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products/add',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products/:productId',
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: 'admin/products',
    component: ProductsAdminComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    LoginComponent,
    ShoppingCartComponent,
    OrdersComponent,
    CheckOutComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductTemplateComponent,
    ItemQuantityComponent,
    OrderConfirmationComponent,
    ShoppingCartItemsSummaryComponent,
    PaymentComponent,
    ShippingComponent,
    OrderDetailsComponent,
    ImgSliderComponent,
    CustomFooterComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    RouterModule.forRoot(paths),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    MatBadgeModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    NgxPaginationModule
    ],
  providers: [ 
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartComponent,
    OrderService,
    PaymentService,
    HttpService,
    OrderHttpService,
    ProductHttpService,
    {provide: HTTP_INTERCEPTORS, useClass : OnlineShoppingHttpInterceptor, multi: true},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD ' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
