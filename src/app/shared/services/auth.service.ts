import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthResponse } from 'shared/models/auth-response';
import { UserModel } from 'shared/models/user-model';
import { HttpService } from 'shared/services/http.service';
import { UserService } from 'shared/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  expiresIn!: any;
  user$: BehaviorSubject<UserModel | null>;

  constructor(
    private router: Router,
    private userService: UserService,
    private httpService: HttpService,
    private notifierService: NotifierService
  ) {
    this.user$ = new BehaviorSubject<UserModel | null>(null);
  }

  login(loginData: any) {
    return this.httpService.login(loginData).pipe(
      catchError(error => this.handleError(error)),
      tap((res: any) => this.handleAuthenticatin(res))
    );
  }

  register(email: any, pwd: any, name: any) {
    return this.httpService.register(email, pwd, name).pipe(
      catchError(error => this.handleError(error)));
  }

  resetPassword(email: string) {
    return this.httpService.resetPassword(email).pipe(
      catchError(error => this.handleError(error))
    );
  }

  autoLogin() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (userInfo && userInfo._token) {
      const userModel: UserModel = new UserModel(userInfo.email, userInfo._token, userInfo._tokenExpirationDate);
      this.expiresIn = new Date(Date.parse(userInfo._tokenExpirationDate)).getTime() - new Date().getTime();
      this.autoLogout()
      this.user$.next(userModel);

    }
  }

  autoLogout() {
    const loggingOut = setTimeout(() => {
      localStorage.removeItem('userInfo');
      this.user$.next(null);
      this.router.navigate(['/'])
    }, this.expiresIn);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.user$.next(null);
    this.router.navigate(['/'])
  }



  handleAuthenticatin(authResponse: AuthResponse) {
    const tokenExpirationDate = new Date(new Date().getTime() + authResponse.expiresIn * 1000);
    let userModel: UserModel = new UserModel(
      authResponse.email,
      authResponse.idToken,
      tokenExpirationDate
    );

    this.user$.next(userModel);
    console.log(JSON.stringify(userModel));
    localStorage.setItem("userInfo", JSON.stringify(userModel));
  }

  get appUser$(): any {
    return this.user$.pipe(switchMap(user => {
      return user != null ? this.userService.get(user.email).valueChanges() : of(null);
    }))
  }

  isAdmin() {
    return true;
  }

  private handleError(error: any) {
    if (error.status === 400)
      this.notifierService.notify('warning', 'Invalid Credentials');
    else if (error.status === 404)
      this.notifierService.notify('error', error.error.error.message);
    return error;
  }

}
