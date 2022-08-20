import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl: string = "";
  public displayLoading: boolean = false;


  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute, private notifierService: NotifierService){
    if(this.route.snapshot.queryParams.hasOwnProperty('returnUrl')){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
  }

  login(loginForm: NgForm){
    if(!loginForm.valid){
      this.notifierService.notify('warning', 'Invalid Email or password');
      return;
    }
    this.authService.login(loginForm.value).subscribe(()=> {
      this.notifierService.notify('success', 'Logged in successfully');
      this.router.navigate(['/' + this.returnUrl], {relativeTo: this.route});
    });
  }

  ngOnInit(): void {
  }

}
