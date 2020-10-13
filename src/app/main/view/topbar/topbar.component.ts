import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../../service/auth.service';
import {Auth} from '../../model/Auth';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
  generalItems: MenuItem[];
  display: boolean;
  auth$: Observable<Auth>;
  uid: string;
  isLoading$: Observable<boolean>;
  private applicationItems: MenuItem;
  private adminItems: MenuItem;
  private userSubsciption: Subscription;

  constructor(private authService: AuthService,
              private loaderService: LoaderService) {
    this.isLoading$ = loaderService.isLoading;
  }

  ngOnInit(): void {
    this.auth$ = this.authService.userLogged;
    this.userSubsciption = this.auth$.subscribe(user => {
        this.buildGeneralMenu(user.isAdmin());
        this.uid = user.uid;
      }
    );

  }

  ngOnDestroy(): void {
    this.userSubsciption.unsubscribe();
  }

  onDismiss($event: boolean): void {
    this.display = $event;
  }

  private buildGeneralMenu(withAdminTools: boolean): void {
    this.initializeItemForMenu(withAdminTools);
    this.generalItems = [
      {
        label: 'YDEApp',
        title: 'Une application pour parcourir les entrepôts d\'applications',
        icon: 'pi yde-theme yde-logo',
        routerLink: '/'
      },
      // this.applicationItems,
      this.adminItems
    ];
  }

  private initializeItemForMenu(isAdmin: boolean): void {
    this.applicationItems = {
      label: 'Applications',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Par Organisation',
          icon: 'pi pi-fw pi-sitemap',
          title: 'Parcours via un arbre horizontal',
          routerLink: '/tree'
        },
        {
          label: 'Repository',
          icon: 'pi pi-fw pi-list',
          title: 'Parcours classique à tiroir',
        }
      ]
    };
    this.adminItems = {
      label: 'Administration',
      icon: 'pi yde-theme yde-admin',
      visible: isAdmin,
      items: [
        {
          label: 'Importation REFi',
          icon: 'pi pi-fw pi-upload',
          routerLink: '/refi'
        },
        {
          label: 'Utilisateurs',
          icon: 'pi pi-fw pi-users',
          routerLink: '/users'
        },
        {
          label: 'Organisations',
          icon: 'pi pi-fw pi-sitemap',
          routerLink: '/organization'
        }
      ]
    };
  }
}
