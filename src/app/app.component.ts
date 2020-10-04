import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  display: boolean;
  val: boolean;

  constructor(private messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
    this.display = true;
  }

  ngOnInit(): void {
    this.val = true;
    this.primengConfig.ripple = true;

  }

  update(): void {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'});
  }

  delete(): void {
    this.messageService.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted'});
  }



}
