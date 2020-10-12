import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Auth} from '../model/Auth';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(new Auth('', '', []));
  public userLogged: Observable<Auth> = this.userLoggedSubject.asObservable();
  private loginUrl = '/authenticate';

  private readonly ydeAuth = 'ydeAuth';

  constructor(private api: ApiService) {
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
    this.api.post(this.loginUrl, {username, password})
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
    console.log(auth);
    localStorage.setItem(this.ydeAuth, JSON.stringify(auth));
    this.userLoggedSubject.next(auth);
  }

  getToken(): string {
    return this.userLoggedSubject.value.giveToken();
  }


}
