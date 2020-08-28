import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  posts = [
    {
      title: 'Ground control to Captain Angular',
      content: 'My first step with angular ... dqsdq dqs dqs defzefe feiazàçe a ezdçij doziej' +
        'aopizjd doij dopizja doi  zdoizad dfpoza dzao. LJljdlkqsj ijij da piej ao zaihdfiuezo' +
        'dadza zdoiazj d djzioa d  odiazjd oijd apzjj ijd zaijduebfoazij dzoiaddbeazij pazoijd d.',
      dateCreation : '05/12/2020, 11:00',
      nbClick: 0
    },
    {
      title: 'it\'s Coffe time',
      content: 'My coffee with angular ... dqsdq dqs dqs defzefe feiazàçe a ezdçij doziej' +
        'aopizjd doij dopizja doi  zdoizad dfpoza dzao. LJljdlkqsj ijij da piej ao zaihdfiuezo' +
        'dadza zdoiazj d djzioa d  odiazjd oijd apzjj ijd zaijduebfoazij dzoiaddbeazij pazoijd d.',
      dateCreation : '05/10/2020, 23:45',
      nbClick: 0
    },
    {
      title: 'A other day withs Spring Boot',
      content: '30 days with Spring Boot and  ... dqsdq dqs dqs defzefe feiazàçe a ezdçij doziej' +
        'aopizjd doij dopizja doi  zdoizad dfpoza dzao. LJljdlkqsj ijij da piej ao zaihdfiuezo' +
        'dadza zdoiazj d djzioa d  odiazjd oijd apzjj ijd zaijduebfoazij dzoiaddbeazij pazoijd d.',
      dateCreation : '05/04/2020, 06:34',
      nbClick: 0
    }
  ];

  constructor() {
  }
}
