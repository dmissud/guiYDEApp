import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Observable, Subscription} from 'rxjs';
import {User} from '../model/User';

@Component({
  selector: 'app-refi-flux',
  templateUrl: './refi-flux.component.html',
  styleUrls: ['./refi-flux.component.scss']
})
export class RefiFluxComponent implements OnInit, OnDestroy {

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
