import { AuthService } from 'shared/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public authService: AuthService,
              public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.user$.pipe(take(1), map( user =>{
      if(user) {
        return true;
      }
      
      this.router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }));
  }
}