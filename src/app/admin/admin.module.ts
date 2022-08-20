import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsComponent } from 'shared/component/order-details/order-details.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { OrdersAdminComponent } from './component/orders-admin/orders-admin.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductsAdminComponent } from './component/products-admin/products-admin.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const paths = [
  {
    path: 'admin',
    canActivate: [AuthGuardService, AdminAuthGuardService],
    children: [
      { path: 'orders',
        component: OrdersAdminComponent
      },
      {
        path: 'orders/:id',
        component: OrderDetailsComponent
      },
      {
        path: 'products/add',
        component: ProductFormComponent
      },
      {
        path: 'products/:productId',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductsAdminComponent
      }
    ]
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
  exports: [
    OrdersAdminComponent,
    ProductFormComponent,
    ProductsAdminComponent,
  ],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminModule { }
