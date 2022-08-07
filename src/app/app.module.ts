import { ProductService } from './product.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
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
  {
    path: 'admin/orders',
    component: OrdersAdminComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  }
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
    ProductTemplateComponent
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
    FormsModule
  ],
  providers: [ 
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
