import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  resetPassword(userEmail: string) {
    console.log(userEmail);
    return this.http.post<string>(environment.resetPwdUrl + environment.firebaseConfig.apiKey, {
      requestType: "PASSWORD_RESET",
      email: userEmail,
    })
  }

  register(userEmail: string, pwd: string, name: any) {
    console.log("email: " + userEmail);
    console.log("password: " + pwd);
    return this.http.post<AuthResponse>(environment.signUpUrl + environment.firebaseConfig.apiKey, {
      email: userEmail,
      password: pwd,
      returnSecureToken: true
    })
  }

  login(loginData: any) {
    return this.http.post<AuthResponse>(environment.signUrl + environment.firebaseConfig.apiKey, {
      email: loginData.email,
      password: loginData.password,
      returnSecureToken: true
    })
  }

}
