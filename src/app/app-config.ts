import {Injectable} from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {
  // Provide all the Application Configs here

  public version: string;
  public locale: string;
  public currencyFormat = {style: 'currency', currency: 'USD'};
  public dateFormat = {year: 'numeric', month: 'short', day: 'numeric'};

  // API Related configs
  public apiPort: string;
  public apiProtocol: string;
  public apiHostName: string;
  public baseApiPath: string;

  constructor() {
    this.version = '0.0.1';
    this.apiPort = '9090';
    if (this.apiProtocol === undefined) {
      this.apiProtocol = window.location.protocol;
    }
    if (this.apiHostName === undefined) {
      this.apiHostName = window.location.hostname;
    }
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    if (this.apiHostName.includes('infomud') || this.apiHostName.includes('heroku')) {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + '/';
    } else {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    }
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
    console.log(this);
  }
}
