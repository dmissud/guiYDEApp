import {Injectable} from '@angular/core';
import {User} from '../model/user';
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
      .pipe(map((response: any) => {
        return response as User[];
      }))
      .subscribe(lstUserHttp => this.usersBehaviorSubject.next(lstUserHttp));
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
    const lstUser: User[] = this.usersBehaviorSubject.getValue();

    const index = this.findIndexByUid(lstUser, user.uid);
    if (user.lastName.trim()) {
      lstUser[this.findIndexByUid(lstUser, user.uid)] = user;
      this.api.put(this.UseCaseUserUrl + user.uid, {
        firstName: user.firstName, lastName: user.lastName,
        password: user.password, roles: user.roles
      })
        .subscribe(() => this.getUsers());
      this.messageService.notify('success', 'Successful', 'User Updated');
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

  findIndexByUid(users: User[], uid: string): number {
    let index = -1;
    for (let i = 0; i < users.length; i++) {
      if (users[i].uid === uid) {
        index = i;
        break;
      }
    }

    return index;
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
