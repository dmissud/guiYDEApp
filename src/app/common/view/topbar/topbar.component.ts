import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../../service/auth.service';
import {Auth} from '../../model/Auth';

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
  private applicationItems: MenuItem;
  private usersItems: MenuItem;
  private refiItems: MenuItem;
  private userSubsciption: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.auth$ = this.authService.userLogged;
    this.userSubsciption = this.auth$.subscribe(user => {
        this.buildGeneralMenu(user.isAdmin());
        this.uid = user.uid;
        console.log(this.uid);
      }
    );

  }

  ngOnDestroy(): void {
    this.userSubsciption.unsubscribe();
  }

  private buildGeneralMenu(withAdminTools: boolean): void {
    console.log('isAdmin:', withAdminTools);
    this.initializeItemForMenu(withAdminTools);
    this.generalItems = [
      {
        label: 'YDEApp',
        title: 'Une application pour parcourir les entrepôts d\'applications',
        icon: 'pi yde-theme yde-logo'
      },
      this.applicationItems,
      this.usersItems,
      this.refiItems
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
          routerLink: '/organisation'
        },
        {
          label: 'Repository',
          icon: 'pi pi-fw pi-list',
          title: 'Parcours classique à tiroir',
        }
      ]
    };
    this.usersItems = {
      label: 'Utilisateur',
      icon: 'pi pi-fw pi-users',
      visible: isAdmin,
      routerLink: '/users'
    };
    this.refiItems = {
      label: 'Importation REFi',
      icon: 'pi pi-fw pi-upload',
      visible: isAdmin,
      routerLink: '/refi'
    };
  }

}
