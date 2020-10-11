import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NotificationService} from './notification.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ydeAppUrl = environment.API_YDEAPP_URL;

  constructor(private http: HttpClient,
              private notificationService: NotificationService) {
  }

  get(url: string, urlParams?: HttpParams): Observable<any> {
    console.log(this.ydeAppUrl + url);
    return this.http.get(this.ydeAppUrl + url, {headers: this.getHeaders(), params: urlParams})
      .pipe(catchError(error => this.handleError(error)));
  }

  post(url: string, body: object): Observable<any> {
    console.log(this.ydeAppUrl + url);
    console.log(body);
    console.log(JSON.stringify(body));
    return this.http.post(this.ydeAppUrl + url, body, {headers: this.getHeaders()})
      .pipe(catchError(error => this.handleError(error)));
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.log(error);
      switch (error.status) {
        case 404:
          this.notificationService.notify('error', 'Ressource inconnue', '');
          break;

      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
