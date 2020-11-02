import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {AuthService} from '../../../main/service/auth.service';
import {NotificationService} from '../../../main/service/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit, OnDestroy {
  loadOrganizationActivated: boolean;
  showDetail: boolean;
  auth: Observable<Auth>;
  private authSubsciption: Subscription;

  constructor(private authService: AuthService,
              private messageService: NotificationService,
              private router: Router) {
    this.loadOrganizationActivated = false;
  }

  ngOnDestroy(): void {
    this.authSubsciption.unsubscribe();
  }

  ngOnInit(): void {
    this.driveDetail(false);
    this.driveActionOnOrganization(false);
    this.checkAccesValide();
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

  driveActionOnOrganization($event: boolean): void {
    this.loadOrganizationActivated = $event;
  }

  driveDetail($event: any): void {
    this.showDetail = $event;
  }
}
