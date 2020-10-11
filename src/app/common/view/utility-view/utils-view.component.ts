import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-utils-view',
  templateUrl: './utils-view.component.html',
  styleUrls: ['./utils-view.component.scss']
})
export class UtilsViewComponent implements OnInit {
  @Output() dismiss = new EventEmitter<boolean>();
  items: MenuItem[];
  private paramItems: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
    this.uploadCssFileForTheme('bootstrap4-light-blue');

    this.paramItems = {
      label: 'Thème',
      icon: 'pi pi-fw pi-cog',
      styleClass: 'p-col-12',
      items: [
        {separator: true},
        {
          label: 'Bootstrap',
          disabled: true
        },
        {separator: true},
        {
          label: 'Bootstrap light Blue',
          icon: 'pi yde-theme yde-theme-bootstrap4-light-blue',
          command: (event: any) => this.uploadCssFileForTheme('bootstrap4-light-blue')
        },
        {
          label: 'Bootstrap light purple',
          icon: 'pi yde-theme yde-theme-bootstrap4-light-purple',
          command: (event: any) => this.uploadCssFileForTheme('bootstrap4-light-purple')
        },
        {
          label: 'Bootstrap dark blue',
          icon: 'pi yde-theme yde-theme-bootstrap4-dark-blue',
          command: (event: any) => this.uploadCssFileForTheme('bootstrap4-dark-blue')
        },
        {
          label: 'bootstrap dark purple',
          icon: 'pi yde-theme yde-theme-bootstrap4-dark-purple',
          command: (event: any) => this.uploadCssFileForTheme('bootstrap4-dark-purple')
        },
        {separator: true},
        {label: 'Material Design', disabled: true},
        {separator: true},
        {
          label: 'Light indigo',
          icon: 'pi yde-theme yde-theme-md-light-indigo',
          command: (event: any) => this.uploadCssFileForTheme('md-light-indigo')
        },
        {
          label: 'Light deep purple',
          icon: 'pi yde-theme yde-theme-md-light-deeppurple',
          command: (event: any) => this.uploadCssFileForTheme('md-light-deeppurple')
        },
        {
          label: 'Dark indigo',
          icon: 'pi yde-theme yde-theme-md-dark-indigo',
          command: (event: any) => this.uploadCssFileForTheme('md-dark-indigo')
        },
        {
          label: 'Dark deep purple',
          icon: 'pi yde-theme yde-theme-md-dark-deeppurple',
          command: (event: any) => this.uploadCssFileForTheme('md-dark-deeppurple')
        }
      ]
    };
    this.items = [this.paramItems];
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

  onDismiss($event: boolean): void {
    this.dismiss.emit($event);
  }
}
