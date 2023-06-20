import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let httpHeaders = new HttpHeaders();
    let userData = JSON.parse(window.sessionStorage.getItem('userData')!);
    if (userData && userData.userName) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' + window.btoa(userData.userName + ':' + userData.password)
      );
    }

    let csrf = sessionStorage.getItem('XSRF-TOKEN');
    if (csrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', csrf);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    let req = request.clone({ headers: httpHeaders });

    return next.handle(req);
  }
}
