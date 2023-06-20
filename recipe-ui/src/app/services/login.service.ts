import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(userData: any): Observable<any> {
    window.sessionStorage.setItem('userData', JSON.stringify(userData));

    return this.httpClient.get('http://localhost:8080/user', {
      observe: 'response',
      withCredentials: true,
    });
  }
}
