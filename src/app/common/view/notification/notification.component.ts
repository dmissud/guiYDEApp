import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from 'primeng/api';
import {NotificationService} from '../../service/notification.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  msgs: Message[] = [];
  private subscription: Subscription;
  private timeCount: number;

  constructor(private notificationService: NotificationService) {
    this.timeCount = -1;
  }

  ngOnInit(): void {
    this.subscribeToNotifications();
  }

  subscribeToNotifications(): void {
    this.subscription = this.notificationService.notificationChange
      .subscribe(notification => {
        if (notification !== null) {
          this.msgs = [notification];
          clearTimeout(this.timeCount);
          this.timeCount = setTimeout(() => {
            this.msgs = [];
            this.timeCount = 0;
          }, 3000);
          console.log(this.timeCount);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
