import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  generalItems: MenuItem[];
  applicationItems: MenuItem;
  usersItems: MenuItem;
  refiItems: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.uploadCssFileForTheme('bootstrap4-light-blue');
    this.applicationItems = {
      label: 'Application',
      icon: 'pi pi-th-large',
      items: [
        {label: 'Par Organisation', icon: 'pi pi-fw pi-sitemap'},
        {label: 'Repository', icon: 'pi pi-fw pi-list'}
      ]
    };
    this.usersItems = {
      label: 'Utilisateur',
      icon: 'pi pi-fw pi-users',
      items: [
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
    };
    this.refiItems = {
      label: 'Importation REFi',
      icon: 'pi pi-fw pi-upload',
    };
    this.generalItems = [
      this.applicationItems,
      this.usersItems,
      this.refiItems,
      {
        label: 'Paramètre',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Thème',
            icon: 'pi pi-fw pi-trash',
            items: [
              {
                label: 'bootstrap4-light-blue',
                icon: 'pi yde-theme1',
                command: (event: any) => this.uploadCssFileForTheme(event.item.label)
              },
              {
                label: 'bootstrap4-light-purple',
                icon: 'pi yde-theme2',
                command: (event: any) => this.uploadCssFileForTheme(event.item.label)
              },
              {
                label: 'bootstrap4-dark-blue',
                icon: 'pi yde-theme3',
                command: (event: any) => this.uploadCssFileForTheme(event.item.label)
              },
              {
                label: 'bootstrap4-dark-purple',
                icon: 'pi yde-theme4',
                command: (event: any) => this.uploadCssFileForTheme(event.item.label)
              }
            ]
          },
        ]
      }
    ];
    this.usersItems.visible = false;
    this.refiItems.visible = false;
  }

  uploadCssFileForTheme(styleName: string): void {
    const head = document.getElementsByTagName('head')[0];

    const themeLink = document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${styleName}.css`;
    } else {
      const style = document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}.css`;

      head.appendChild(style);
    }
  }

}
