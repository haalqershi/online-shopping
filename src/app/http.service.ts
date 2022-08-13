import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post<AuthResponse>(environment.signUrl + environment.firebaseConfig.apiKey, {
      email: loginData.email,
      password: loginData.password,
      returnSecureToken: true
    })
  }

  
}
