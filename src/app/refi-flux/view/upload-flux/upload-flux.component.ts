import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {HttpHeaders} from '@angular/common/http';
import {NotificationService} from '../../../main/service/notification.service';
import {ApiService} from '../../../main/service/api.service';

@Component({
  selector: 'app-upload-flux',
  templateUrl: './upload-flux.component.html',
  styleUrls: ['./upload-flux.component.scss']
})
export class UploadFluxComponent implements OnInit {
  uploadedFiles: any[] = [];
  user$: Observable<Auth>;
  httpHeaders: HttpHeaders = new HttpHeaders();
  url: string;

  constructor(private api: ApiService,
              private messageService: NotificationService) {
    this.url = api.ydeAppUrl + '/uploadBatchRefi';
  }

  ngOnInit(): void {
    this.httpHeaders.set('Accept', '*/*');
  }

  onUpload(event): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.notify('info', 'File Uploaded', '');
  }
}
