import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // appUser: AppUser | undefined;
  appUser: any;
  cartItemCount: number = 0;
  shoppingCart$!: Observable<ShoppingCart>;

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.appUser = user;
    });
    
   this.shoppingCart$ = await this.shoppingCartService.getShoppingCart();

  }

  logout() {
    this.authService.logout();
  }
}
