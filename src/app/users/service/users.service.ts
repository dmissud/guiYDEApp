import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotificationService} from '../../main/service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: string[] = ['ACTIF', 'INACTIF'];

  private usersBehaviorSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  usersObservable: Observable<User[]> = this.usersBehaviorSubject.asObservable();

  constructor(private http: HttpClient, private messageService: NotificationService) {
  }

  /*getUsersSmall(): any {
    return this.http.get<any>('assets/users-small.json')
      .toPromise()
      .then(res => res.data as User[])
      .then(data => data);
  }*/

  getUsers(): Promise<User[]> {
    return this.http.get<any>('assets/users.json')
      .toPromise()
      .then(res => {
        this.usersBehaviorSubject.next(res.data);
        console.log(res.data);
        return res.data as User[];
      });
  }

  deleteUsers(selectedUsers: User[]): void {
    this.usersBehaviorSubject.next(
      this.usersBehaviorSubject.getValue().filter(val => !selectedUsers.includes(val)));
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
