import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../environments/environment';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { OnlineShoppingHttpInterceptor } from 'shared/services/online-shopping-http-interceptor';
import { ProductsComponent } from './shopping/component/products/products.component';
import { SharedModule } from 'shared/shared.module';
import { BaseModule } from './base/base.module';
import { ShoppingModule } from './shopping/shopping.module';

const paths = [ 
  { path: ''
    ,component: ProductsComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)    
  },
  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ShoppingModule,
    BaseModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(paths),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    ],
  providers: [ 
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD ' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
