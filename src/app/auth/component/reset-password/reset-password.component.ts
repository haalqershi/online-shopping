import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  email!: string;
  displayLoading = '';
  resetForm = false;
  message = true;
  subscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.subscription = this.authService.resetPassword(this.email)
      .subscribe(() => {
        this.resetForm = true;
        this.message = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
