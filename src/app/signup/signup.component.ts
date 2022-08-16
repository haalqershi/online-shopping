import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  public displayLoading: boolean = false;
  password1 : number | any;
  password2 : number | any;
  username : string | undefined;
  lastName : string = "";
  firstName : string = "";
  email : string = "";

  onRegister(user: any){

  }
    
}