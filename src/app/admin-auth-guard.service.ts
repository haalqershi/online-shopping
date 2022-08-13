import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(
      private authService: AuthService,
      private userService: UserService
    ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.user$
    // .pipe(switchMap((curUser:any) => this.userService.get(curUser.email).valueChanges()))
    // .pipe(map((appUser: any) => appUser!.isAdmin || false));
    .pipe(map((appUser: any) => appUser));

  }
}
