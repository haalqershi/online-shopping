import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl: string = "";
  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute){
    if(this.route.snapshot.queryParams.hasOwnProperty('returnUrl')){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
  }

  login(loginForm: NgForm){
    if(!loginForm.valid) return;
    this.authService.login(loginForm.value).subscribe(res => {
      this.router.navigate(['/' + this.returnUrl], {relativeTo: this.route});
    });
  }

  ngOnInit(): void {
  }

}
