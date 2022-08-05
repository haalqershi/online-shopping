import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import * as firebase from '@firebase/auth';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFireDatabase) { }
  
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      isAdmin: false
    })
  }

  get(userId: string) : AngularFireObject<AppUser>{
    return this.db.object(`/users/${userId}`);
  }
}
