import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // appUser: AppUser | undefined;
  appUser: any;
  cartItemCount: number = 0;

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => {
      this.appUser = user;
    });
    
    let shoppingCart$ = await this.shoppingCartService.getShoppingCart();
    shoppingCart$.subscribe((shoppingCart: ShoppingCart) =>{
      this.cartItemCount = 0;
      for(let productId in shoppingCart.items){
        this.cartItemCount +=shoppingCart.items[productId].quantity;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
