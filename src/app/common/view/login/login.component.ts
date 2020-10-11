import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../../model/Auth';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter<boolean>();

  user$: Observable<Auth>;
  userName: string;
  userPassword: string;
  private subscription: Subscription;

  constructor(private authService: AuthService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.userLogged;
    this.subscription = this.user$.subscribe(auth => {
      if (auth.isAnonymous()) {
        this.notificationService.notify('success', 'Connexion', 'Vous êtes de-connecté(e)');
      } else {
        this.notificationService.notify('success', 'Connexion', 'Vous êtes connecté(e)');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doConnection($event: MouseEvent): void {
    this.authService.login(this.userName, this.userPassword);
    this.dismiss.emit(false);
  }

  doDeconnection($event: MouseEvent): void {
    this.authService.logout();
    this.userName = '';
    this.userPassword = '';
    this.dismiss.emit(false);
  }
}
