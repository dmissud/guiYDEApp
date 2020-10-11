import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  display: boolean;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.display = true;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onConfirm(): void {
    this.messageService.clear('c');
  }

  onReject(): void {
    this.messageService.clear('c');
  }

  clear(): void {
    this.messageService.clear();
  }
}
