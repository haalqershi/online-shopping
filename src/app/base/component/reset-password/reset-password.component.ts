import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email!: string;
  displayLoading = '';
  resetForm  = false;
  message = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.authService.resetPassword("alqershi.hesham@gmail.com")
    .subscribe(res => {
      this.resetForm = true;
      this.message = false;
      // this.router.navigate(['/login']);
    });
  }

}
