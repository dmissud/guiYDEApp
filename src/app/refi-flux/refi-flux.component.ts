import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../common/service/auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '../common/model/Auth';
import {NotificationService} from '../common/service/notification.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-refi-flux',
  templateUrl: './refi-flux.component.html',
  styleUrls: ['./refi-flux.component.scss']
})
export class RefiFluxComponent implements OnInit, OnDestroy {

  uploadedFiles: any[] = [];
  user$: Observable<Auth>;
  httpHeaders: HttpHeaders = new HttpHeaders();
  private userSubsciption: Subscription;
  url: string;

  constructor(private router: Router,
              private authService: AuthService,
              private messageService: NotificationService) {
    this.url = 'http://localhost:9090/api/V1/uploadBatchRefi';
  }

  ngOnInit(): void {
    this.user$ = this.authService.userLogged;
    this.userSubsciption = this.user$.subscribe(() => {
      if (!this.authService.userIsAdmin) {
        this.messageService.notify('warn', 'Right', 'Not Allowed');
        this.router.navigate(['']);
      }
    });
    this.httpHeaders.set('Accept', '*/*');
  }

  ngOnDestroy(): void {
    this.userSubsciption.unsubscribe();
  }

  onUpload(event): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.notify('info', 'File Uploaded', '');
  }
}
