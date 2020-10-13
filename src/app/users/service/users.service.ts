import {Injectable} from '@angular/core';
import {IUser, User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotificationService} from '../../main/service/notification.service';
import {map} from 'rxjs/operators';
import {ApiService} from '../../main/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: string[] = ['ACTIF', 'INACTIF'];

  private usersBehaviorSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersObservable: Observable<User[]> = this.usersBehaviorSubject.asObservable();

  private getUsersUrl = '/users';
  private UseCaseUserUrl = '/users/';

  constructor(private http: HttpClient, private api: ApiService, private messageService: NotificationService) {
  }

  getUsers(): void {
    this.api.get(this.getUsersUrl)
      .pipe(map((response: IUser[]) => {
        return response.map((iuser: IUser) => new User(iuser.uid, iuser.lastName, iuser.firstName, iuser.roles));
      }))
      .subscribe((lstUserHttp: User[]) => this.usersBehaviorSubject.next(lstUserHttp));
  }

  deleteUsers(selectedUsers: User[]): void {

    for (let i = 0; i < selectedUsers.length; i++) {
      const selectedUser: User = selectedUsers[i];
      this.api.delete(this.UseCaseUserUrl + selectedUser.uid)
        .subscribe(() => this.getUsers());
      console.log('URL : ', this.UseCaseUserUrl + selectedUser.uid);
    }
  }

  update(user: User): void {
    if (user.lastName.trim()) {
      const iuser: IUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.roles
      };
      console.log('update in IUser', iuser);
      this.api.put(this.UseCaseUserUrl + user.uid, iuser)
        .subscribe(() => {
          this.messageService.notify('success', 'Successful', 'User Updated');
          this.getUsers();
        });
    }
  }

  add(user: User): void {
    let lstUser: User[] = this.usersBehaviorSubject.getValue();
    lstUser = [user, ...lstUser];
    console.log('Création en cours', user.uid);
    this.api.post(this.getUsersUrl, user).subscribe(() => this.getUsers());
    this.messageService.notify('success', 'Successful', 'User created');
    this.usersBehaviorSubject.next(lstUser);
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
