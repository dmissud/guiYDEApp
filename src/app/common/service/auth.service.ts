import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject: BehaviorSubject<User> = new BehaviorSubject<User>(new User('', '', []));
  public userLogged: Observable<User> = this.userLoggedSubject.asObservable();
  private loginUrl = environment.API_YDEAPP_URL + '/authenticate';

  constructor(private httpClient: HttpClient) {
  }

  get userIsAdmin(): boolean {
    return this.userLoggedSubject.value.isAdmin();
  }

  get userIsLog(): boolean {
    return this.userLoggedSubject.value.isUser();
  }

  login(username: string, password: string): void {
    this.httpClient.post(this.loginUrl, {username, password})
      .pipe(map((response: any) => new User(username, response.token, response.grants)))
      .toPromise()
      .then(user => this.userLoggedSubject.next(user))
      .catch(err => console.log(err));
  }

  logout(): void {
    this.userLoggedSubject.next(new User('', '', []));
  }

  isLogin(): boolean {
    return !this.userLoggedSubject.value.isAnonymous();
  }

  getToken(): string {
    return this.userLoggedSubject.value.giveToken();
  }
}
