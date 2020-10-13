import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../main/service/auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {NotificationService} from '../../../main/service/notification.service';
import {RefiService} from '../../service/refi.service';

@Component({
  selector: 'app-refi-flux',
  templateUrl: './refi-flux.component.html',
  styleUrls: ['./refi-flux.component.scss']
})
export class RefiFluxComponent implements OnInit, OnDestroy {

  auth: Observable<Auth>;
  loadRefiActivated: boolean;
  showDetail: boolean;
  fluxLoader$: Observable<boolean>;
  private authSubsciption: Subscription;
  private fluxRefiSubsciption: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private fluxRefiService: RefiService,
              private messageService: NotificationService) {
  }

  ngOnInit(): void {
    this.dismissDetail();
    this.dismissNewFlux();

    this.checkAccesValide.call(this);
    this.piloteAffichageOnLoad();
  }

  private checkAccesValide(): void {
    this.auth = this.authService.userLogged;
    this.authSubsciption = this.auth.subscribe(() => {
      if (!this.authService.userIsAdmin) {
        this.messageService.notify('warn', 'Right', 'Not Allowed');
        this.router.navigate(['']);
      }
    });
  }

  private piloteAffichageOnLoad(): void {
    this.fluxLoader$ = this.fluxRefiService.isLoading;
    this.fluxRefiSubsciption = this.fluxLoader$.subscribe(
      show => {
        if (show) {
          this.dismissNewFlux();
          this.activateDetail();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubsciption.unsubscribe();
    this.fluxRefiSubsciption.unsubscribe();
  }

  activateNewFlux(): void {
    this.loadRefiActivated = true;
  }

  dismissNewFlux(): void {
    this.loadRefiActivated = false;
  }

  activateDetail(): void {
    this.showDetail = true;
  }

  dismissDetail(): void {
    this.showDetail = false;
  }
}
