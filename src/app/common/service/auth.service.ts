import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Auth} from '../model/Auth';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(new Auth('', '', []));
  public userLogged: Observable<Auth> = this.userLoggedSubject.asObservable();
  private loginUrl = environment.API_YDEAPP_URL + '/authenticate';

  private readonly ydeAuth = 'ydeAuth';

  constructor(private httpClient: HttpClient, private notificationService: NotificationService) {
    const localAuth = localStorage.getItem(this.ydeAuth);
    if (localAuth !== null) {
      const authStr = JSON.parse(localAuth);
      const auth: Auth = new Auth(authStr.uid, authStr.token, authStr.grants);
      this.userLoggedSubject.next(auth);
    }
  }

  get userIsAdmin(): boolean {
    return this.userLoggedSubject.value.isAdmin();
  }

  get userIsLog(): boolean {
    return this.userLoggedSubject.value.isUser();
  }

  login(username: string, password: string): void {
    this.httpClient
      .post(this.loginUrl, {username, password})
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(
        auth => {
          this.saveAuth(new Auth(username, auth.token, auth.grants));
        });
  }

  logout(): void {
    localStorage.removeItem(this.ydeAuth);
    this.userLoggedSubject.next(new Auth('', '', []));
  }

  isLogin(): boolean {
    return !this.userLoggedSubject.value.isAnonymous();
  }

  saveAuth(auth: Auth): void {
    localStorage.setItem(this.ydeAuth, JSON.stringify(auth));
    this.userLoggedSubject.next(auth);
  }

  getToken(): string {
    return this.userLoggedSubject.value.giveToken();
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
      this.notificationService.notify('error', 'Connexion', 'Identification érronée');
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
