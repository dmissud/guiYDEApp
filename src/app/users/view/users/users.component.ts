import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {Router} from '@angular/router';
import {AuthService} from '../../../main/service/auth.service';
import {ConfirmationService} from 'primeng/api';
import {User} from '../../model/user';
import {UserService} from '../../service/users.service';
import {NotificationService} from '../../../main/service/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  auth$: Observable<Auth>;
  private authSubscription: Subscription;

  userDialog: boolean;

  users: User[];
  users$: Observable<User[]>;
  user: User;
  selectedUsers: User[];
  submitted: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private messageService: NotificationService,
              private userService: UserService,
              private confirmationService: ConfirmationService) {
    this.users$ = this.userService.usersObservable;
  }

  ngOnInit(): void {
    this.auth$ = this.authService.userLogged;
    this.authSubscription = this.auth$.subscribe(() => {
      if (!this.authService.userIsAdmin) {
        this.messageService.notify( 'warn', 'Right', 'Not Allowed');
        this.router.navigate(['']);
      }
    });
    this.userService.getUsers();
    // let datas: User[] = this.userService.getUsers() ;
    // console.log('Récupération des datas : ', datas);

  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }


  openNew(): void {
    this.user = new User('', '', '', 'YDE_user', []);
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers(): void {
    this.confirmationService.confirm({
      message: 'Confirmez-vous la suppression de ' + this.selectedUsers.length + ' utilisateur(s) ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUsers(this.selectedUsers);
        this.selectedUsers = null;
        this.messageService.notify('success', 'Successful', 'Users Deleted');
      }
    });
  }

  editUser(user: User): void {
    this.user = user;
    this.userDialog = true;
  }

  hideDialog(): void {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser(): void {
    this.submitted = true;
    this.user.password = 'YDE_user';
    this.userService.add(this.user);
    this.userDialog = false;
    this.user = new User('', '', '', 'YDE_user', []);
  }

  updateUser(): void {
    this.submitted = true;
    this.userService.update(this.user);
    this.userDialog = false;
    this.user = new User('', '', '', 'YDE_user', []);
  }
}
