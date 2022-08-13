import { HttpService } from './http.service';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from '@firebase/auth';
import { BehaviorSubject, Observable, catchError} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthResponse } from './models/auth-response';
import { UserModel } from './models/user-model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  expiresIn!: any;
  autoLogin() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(userInfo && userInfo._token){
      const userModel: UserModel = new UserModel(userInfo.email, userInfo._token, userInfo._tokenExpirationDate);
      this.expiresIn = new Date(Date.parse(userInfo._tokenExpirationDate)).getTime() - new Date().getTime();
      this.autoLogout()
      this.user$.next(userModel);

    }
  }


  autoLogout(){
    const loggingOut = setTimeout(() =>{
      localStorage.removeItem('userInfo');
      this.user$.next(null);
      this.router.navigate(['/'])
    }, this.expiresIn);
  }

  logout(){
    localStorage.removeItem('userInfo');
    this.user$.next(null);
    this.router.navigate(['/'])
  }


  // user$: Observable<firebase.User | any>;

  user$: BehaviorSubject<UserModel | null>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private httpService: HttpService
    ) { 
      // this.user$ = angularFireAuth.authState;
      this.user$ = new BehaviorSubject<UserModel | null>(null);
    }

  // logout() {
  //   this.angularFireAuth.signOut();
  // }

  // login(){
  //   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //   localStorage.setItem('returnUrl', returnUrl);

  //   this.angularFireAuth.signInWithRedirect(new firebase.GoogleAuthProvider());   
  // }

  login(loginData: any){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl);
   console.log(loginData);
    return this.httpService.login(loginData).pipe( 
      catchError(error => this.handleError(error)),
      tap((res : any) => this.handleAuthenticatin(res))
    );
  }

  handleError(error: any){
    return error
  }

  handleAuthenticatin(authResponse: AuthResponse){
    const tokenExpirationDate = new Date(new Date().getTime() + authResponse.expiresIn*1000);
    let userModel : UserModel = new UserModel(
      authResponse.email,
      authResponse.idToken,
      tokenExpirationDate
    );

    this.user$.next(userModel);
    console.log(JSON.stringify(userModel));
    localStorage.setItem("userInfo", JSON.stringify(userModel));
  }


  get appUser$() : any{
    return this.user$.pipe(switchMap(user => {
      return user != null ? this.userService.get(user.email).valueChanges() : of(null);
    }))
  }
}
