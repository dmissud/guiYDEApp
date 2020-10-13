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
    for (const selectedUser of selectedUsers) {
      this.api.delete(this.UseCaseUserUrl + selectedUser.uid)
        .subscribe(() => {
          this.getUsers();
          this.messageService.notify('success', 'Successful', 'Utilisateur' + selectedUser + ' supprimé');
        });
    }
  }

  update(user: User): void {
    if (user.lastName.trim()) {
      const iuser: IUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.roles
      };
      this.api.put(this.UseCaseUserUrl + user.uid, iuser)
        .subscribe(() => {
          this.messageService.notify('success', 'Successful', 'Utilisateur mis à jour');
          this.getUsers();
        });
    }
  }

  add(user: User): void {
    const iuser: IUser = {
      uid: user.uid,
      firstName: user.firstName,
      lastName: user.lastName,
      password: '',
      roles: user.roles
    };
    this.api.post(this.getUsersUrl, iuser).subscribe(() => {
      this.messageService.notify('success', 'Successful', 'Utilisateur créé');
      this.getUsers();
    });
  }


}
