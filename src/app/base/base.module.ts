import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFooterComponent } from './component/custom-footer/custom-footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponent } from './component/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const paths = [

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

]



@NgModule({
  declarations: [
    CustomFooterComponent,
    HomeComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CustomFooterComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(paths),
    NgbModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports:[
    CustomFooterComponent,
    HomeComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CustomFooterComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  providers:[]
})
export class BaseModule { }
