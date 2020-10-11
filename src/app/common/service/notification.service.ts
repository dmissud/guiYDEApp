import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export type Severities = 'success' | 'info' | 'warn' | 'error';

export interface Notification {
  severity: Severities;
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationChangeSubject: BehaviorSubject<Notification> = new BehaviorSubject<Notification>(null);
  notificationChange: Observable<Notification> = this.notificationChangeSubject.asObservable();

  constructor() {
  }

  notify(severity: Severities, summary: string, detail: string): void {
    this.notificationChangeSubject.next({severity, summary, detail});
  }
}
