import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../../common/model/User';
import {Router} from '@angular/router';
import {AuthService} from '../../../common/service/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  private userSubsciption: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.userLogged;
    this.userSubsciption = this.user$.subscribe(() => {
      if (!this.authService.userIsAdmin) {
        this.messageService.add({severity: 'warn', summary: 'Right', detail: 'Not Allowed'});
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubsciption.unsubscribe();
  }
}
