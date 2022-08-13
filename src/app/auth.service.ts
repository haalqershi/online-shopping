import { HttpService } from './http.service';
import { UserModel } from './models/user-model';
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



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | any>;

  user: BehaviorSubject<UserModel | null>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private httpService: HttpService
    ) { 
      this.user$ = angularFireAuth.authState;
      this.user = new BehaviorSubject<UserModel | null>(null);
    }

  logout() {
    this.angularFireAuth.signOut();
  }

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

    this.user.next(userModel);
    console.log(JSON.stringify(userModel));
    localStorage.setItem("userInfo", JSON.stringify(userModel));
  }


  get appUser$() : Observable<AppUser | null>{
    return this.user$.pipe(switchMap(user => {
      return user != null ? this.userService.get(user!.uid).valueChanges() : of(null);
    }))
  }
}
