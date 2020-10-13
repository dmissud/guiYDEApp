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
  private deleteUserUrl = '/users/';

  constructor(private http: HttpClient, private api: ApiService, private messageService: NotificationService) {
  }

  /*getUsersSmall(): any {
    return this.http.get<any>('assets/users-small.json')
      .toPromise()
      .then(res => res.data as User[])
      .then(data => data);
  }*/

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
      this.api.delete(this.deleteUserUrl + selectedUser.uid)
        .subscribe(() => this.getUsers());
      console.log('URL : ', this.deleteUserUrl + selectedUser.uid);
    }
  }

  addOrUpdate(user: User): void {
    let lstUser: User[] = this.usersBehaviorSubject.getValue();
    if (user.lastName.trim()) {
      if (user.id) {
        lstUser[this.findIndexById(lstUser, user.id)] = user;
        this.messageService.notify('success', 'Successful', 'User Updated');
      } else {
        user.id = this.createId();
        lstUser = [user, ...lstUser];
        this.messageService.notify('success', 'Successful', 'User created');
      }

      this.usersBehaviorSubject.next(lstUser);
    }
  }

  findIndexById(users: User[], id: string): number {
    let index = -1;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
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
