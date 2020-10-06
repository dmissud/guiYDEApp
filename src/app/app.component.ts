import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  display: boolean;

  constructor(private primengConfig: PrimeNGConfig) {
    this.display = true;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
