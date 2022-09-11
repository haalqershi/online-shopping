import { AuthService } from 'shared/services/auth.service';
import { Signup } from 'shared/models/signup';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  public displayLoading: boolean = false;
  newUser : Signup = new Signup();
  private returnUrl: string = "";

  constructor(public authService: AuthService, private router: Router){
  }

  onRegister(){
       let fullname = this.newUser.firstName + this.newUser.lastName;
    this.authService.register(this.newUser.email, this.newUser.password1, fullname)
    .subscribe(res => {
      this.router.navigate(['/auth/login']);
    });
  }

}