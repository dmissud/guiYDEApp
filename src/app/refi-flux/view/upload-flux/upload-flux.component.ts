import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from '../../../main/model/Auth';
import {HttpHeaders} from '@angular/common/http';
import {NotificationService} from '../../../main/service/notification.service';
import {ApiService} from '../../../main/service/api.service';
import {RefiService} from '../../service/refi.service';

@Component({
  selector: 'app-upload-flux',
  templateUrl: './upload-flux.component.html',
  styleUrls: ['./upload-flux.component.scss']
})
export class UploadFluxComponent implements OnInit {
  @Output() dismiss = new EventEmitter<boolean>();

  uploadedFiles: any[] = [];
  user$: Observable<Auth>;
  httpHeaders: HttpHeaders = new HttpHeaders();
  url: string;
  loadingRefi: boolean;

  constructor(private api: ApiService,
              private messageService: NotificationService,
              private refiService: RefiService) {
    this.url = api.ydeAppUrl + refiService.fluxRefiUrl;
    this.loadingRefi = false;
  }

  ngOnInit(): void {
    this.httpHeaders.set('Accept', '*/*');
  }

  onUpload(event): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
      this.refiService.upLoad(file);
      this.stopLoadRefi();
    }

    this.messageService.notify('info', 'File Uploaded', '');
  }

  stopLoadRefi(): void {
    this.dismiss.emit(false);
  }


}
