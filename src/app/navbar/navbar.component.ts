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

  constructor(private authService: AuthService) {
    this.authService.appUser$.subscribe(user =>{
        // if(user){
          this.appUser = user;
        // }
    });
   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
}
