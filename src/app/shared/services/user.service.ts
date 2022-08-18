import { UserModel } from 'shared/models/user-model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import * as firebase from '@firebase/auth';
import { AppUser } from 'shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFireDatabase) { }
  
  save(user: any){
    // this.db.object('/users/' + user.localId).update({
    //   name: user.displayName,
    //   email: user.email,
    //   isAdmin: true
    // })
  }

  get(userId: string) : any{
    return this.db.object(`/users/${userId}`);
  }
}
