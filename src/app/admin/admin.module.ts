import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersAdminComponent } from './component/orders-admin/orders-admin.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductsAdminComponent } from './component/products-admin/products-admin.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { OrderDetailsComponent } from 'shared/component/order-details/order-details.component';

const paths = [
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
  }
]


@NgModule({
  declarations: [
    OrdersAdminComponent,
    ProductFormComponent,
    ProductsAdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    RouterModule.forChild(paths),
    FormsModule,
    MatBadgeModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule
    
  ],
  exports:[
    OrdersAdminComponent,
    ProductFormComponent,
    ProductsAdminComponent,
  ],
  providers:[
    AdminAuthGuardService
  ]
})
export class AdminModule { }
