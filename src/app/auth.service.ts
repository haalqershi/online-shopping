import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from '@firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | unknown>;


  constructor(
    private angularFireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
    ) { 
      this.user$ = angularFireAuth.authState;
    }

  logout() {
    this.angularFireAuth.signOut();
  }

  login(){

  }
}
