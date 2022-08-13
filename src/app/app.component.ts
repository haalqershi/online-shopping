import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public AuthService: AuthService,
              public router: Router,
              public userService: UserService){
    AuthService.user$.subscribe((user:any) =>{
      if(user){
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      }
    })
  }

  userEmail: string = '';
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.AuthService.user$.subscribe(
      user=>{
        if(user){
          this.userEmail = user.email;
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      }
    )
    this.AuthService.autoLogin();
  }
}
