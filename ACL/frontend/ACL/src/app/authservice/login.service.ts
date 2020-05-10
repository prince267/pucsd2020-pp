import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router, NavigationEnd } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  TOKEN_KEY = "token"
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

 public logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigateByUrl('/');
  }
  public login(data) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpClient.post("http://localhost:9090/webapi/v1/login", data, options)
  }
}
