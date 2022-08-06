import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from '@firebase/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | any>;


  constructor(
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { 
      this.user$ = angularFireAuth.authState;
    }

  logout() {
    this.angularFireAuth.signOut();
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.angularFireAuth.signInWithRedirect(new firebase.GoogleAuthProvider());   
  }

  get appUser$() : Observable<AppUser | null>{
    return this.user$.pipe(switchMap(user => {
      return user != null ? this.userService.get(user!.uid).valueChanges() : of(null);
    }))
  }
}
