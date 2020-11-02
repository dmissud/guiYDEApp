import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotificationService} from '../../../main/service/notification.service';
import {HttpHeaders} from '@angular/common/http';
import {OrganizationRootService} from '../../../main/service/organization-root.service';

@Component({
  selector: 'app-upload-organization-tree',
  templateUrl: './upload-organization-tree.component.html',
  styleUrls: ['./upload-organization-tree.component.scss']
})
export class UploadOrganizationTreeComponent implements OnInit {
  @Output() dismiss = new EventEmitter<boolean>();

  httpHeaders: HttpHeaders = new HttpHeaders();
  uploadedFiles: any[] = [];
  url: string;

  constructor(private messageService: NotificationService,
              private organizationRootService: OrganizationRootService) {
  }

  ngOnInit(): void {
    this.httpHeaders.set('Accept', '*/*');
  }

  stopLoadOrganization(): void {
    this.dismiss.emit(false);
  }

  onUpload(event): void {
    for (const organization of event.files) {
      this.uploadedFiles.push(organization);
      this.organizationRootService.upLoad(organization);
      this.stopLoadOrganization();
    }
    this.messageService.notify('info', 'File Uploaded', '');
  }
}
