import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private API = environment.API_YDEAPP_URL;

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let enrichRequest: HttpRequest<unknown> = request;
    if ((this.authService.isLogin()) && (request.url.includes(this.API))) {
      enrichRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getToken())
      });
    }
    return next.handle(enrichRequest);
  }
}
