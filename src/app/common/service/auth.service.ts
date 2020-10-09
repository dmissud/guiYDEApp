import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../model/Auth';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(new Auth('', '', []));
  public userLogged: Observable<Auth> = this.userLoggedSubject.asObservable();
  private loginUrl = environment.API_YDEAPP_URL + '/authenticate';

  private readonly ydeAuth = 'ydeAuth';

  constructor(private httpClient: HttpClient) {
    const localAuth = localStorage.getItem(this.ydeAuth);
    if (localAuth !== null) {
      const authStr = JSON.parse(localAuth);
      const auth: Auth = new Auth(authStr.uid, authStr.token, authStr.grants);
      console.log(auth);
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
    this.httpClient.post(this.loginUrl, {username, password})
      .pipe(map((response: any) => new Auth(username, response.token, response.grants)))
      .toPromise()
      .then(auth => this.saveAuth(auth))
      .catch(err => console.log(err));
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
}
