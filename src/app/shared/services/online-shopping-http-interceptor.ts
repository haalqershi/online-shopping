import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';

@Injectable()
export class OnlineShoppingHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(request);
        }
        const req = request.clone({
          headers: request.headers.set('Accept', 'application/json'),
          params: new HttpParams().set(
            'auth', user.token ? user.token : ''
          )
        })
        console.log("request data " + req);
        return next.handle(request);
      })
    )
  }
}
