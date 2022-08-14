import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { exhaustMap, Observable, pipe, take } from 'rxjs';

@Injectable()
export class OnlineShoppingHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap(user => {
        if(!user){
          console.log("interceptor is firing");
          return next.handle(request);
        }
        const req = request.clone({
          headers: request.headers.set('Accept', 'application/json'),
          params: new HttpParams().set(
            'auth', user.token ? user.token : ''
          )
        })
        console.log("request data "+ req);
        return next.handle(request);
      })
    )
  }
}
