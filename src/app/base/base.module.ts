import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFooterComponent } from './component/custom-footer/custom-footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const paths : Routes = [{ path: "",component: HomeComponent}];


@NgModule({
  declarations: [
    CustomFooterComponent,
    HomeComponent,
    NavbarComponent,
    CustomFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    RouterModule.forChild(paths),
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
    CustomFooterComponent,
  ],
  providers:[]
})
export class BaseModule { }
