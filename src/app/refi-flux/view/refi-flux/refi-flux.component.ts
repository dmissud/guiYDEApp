import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../main/service/auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {NotificationService} from '../../../main/service/notification.service';

@Component({
  selector: 'app-refi-flux',
  templateUrl: './refi-flux.component.html',
  styleUrls: ['./refi-flux.component.scss']
})
export class RefiFluxComponent implements OnInit, OnDestroy {

  auth: Observable<Auth>;
  private authSubsciption: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private messageService: NotificationService) {
  }

  ngOnInit(): void {
    this.auth = this.authService.userLogged;
    this.authSubsciption = this.auth.subscribe(() => {
      if (!this.authService.userIsAdmin) {
        this.messageService.notify('warn', 'Right', 'Not Allowed');
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubsciption.unsubscribe();
  }

}
