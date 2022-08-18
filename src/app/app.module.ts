import { BaseModule } from './base/base.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { environment } from './../environments/environment';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './base/component/home/home.component';
import { NavbarComponent } from './base/component/navbar/navbar.component';
import { LoginComponent } from './base/component/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { OrdersAdminComponent } from './admin/component/orders-admin/orders-admin.component';
import { ProductsAdminComponent } from './admin/component/products-admin/products-admin.component';
import { ProductFormComponent } from './admin/component/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { OrderDetailsComponent } from 'shared/component/order-details/order-details.component';
import { OnlineShoppingHttpInterceptor } from './online-shopping-http-interceptor';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ImgSliderComponent } from './shopping/component/img-slider/img-slider.component';
import { CustomFooterComponent } from './base/component/custom-footer/custom-footer.component';
import { SignupComponent } from './base/component/signup/signup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResetPasswordComponent } from './base/component/reset-password/reset-password.component';
import { ProductsComponent } from './shopping/component/products/products.component';
import { ShoppingCartComponent } from './shopping/component/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/component/check-out/check-out.component';
import { OrderConfirmationComponent } from './shopping/component/order-confirmation/order-confirmation.component';
import { OrdersComponent } from './shopping/component/orders/orders.component';


const paths = [
  {
    path: '',
    component: ProductsComponent
  },
  // {
  //   path: 'products',
  //   component: ProductsComponent
  // },
  // {
  //   path: 'cart',
  //   component: ShoppingCartComponent
  // },
  //  {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  // {
  //   path: 'reset',
  //   component: ResetPasswordComponent
  // },
  // {
  //   path: 'checkout',
  //   component: CheckOutComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'orders',
  //   component: OrdersComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'orders/:id',
  //   component: OrderDetailsComponent,
  //   canActivate: [AuthGuardService]
  // },
  //  {
  //   path: 'order/confirmation/:id',
  //   component: OrderConfirmationComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'admin/orders',
  //   component: OrdersAdminComponent,
  //   canActivate: [AuthGuardService, AdminAuthGuardService]
  // },
  // {
  //   path: 'admin/orders/:id',
  //   component: OrderDetailsComponent,
  //   canActivate: [AuthGuardService, AdminAuthGuardService]
  // },
  // {
  //   path: 'admin/products/add',
  //   component: ProductFormComponent,
  //   canActivate: [AuthGuardService, AdminAuthGuardService]
  // },
  // {
  //   path: 'admin/products/:productId',
  //   component: ProductFormComponent,
  //   canActivate: [AuthGuardService, AdminAuthGuardService]
  // },
  // {
  //   path: 'admin/products',
  //   component: ProductsAdminComponent,
  //   canActivate: [AuthGuardService, AdminAuthGuardService]
  // },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    BaseModule,
    NgbModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatSliderModule,
    RouterModule.forRoot(paths),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    // FormsModule,
    // MatBadgeModule,
    HttpClientModule,
    // MatTableModule,
    // MatFormFieldModule,
    // MatPaginatorModule,
    // MatInputModule,
    // MatSortModule,
    // NgxPaginationModule
    ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass : OnlineShoppingHttpInterceptor, multi: true},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD ' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
