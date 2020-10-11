import {Component, Input, OnInit} from '@angular/core';
import {TreeApplicationByOrganizationService} from '../../service/tree-application-by-organization.service';
import {MessageService, TreeNode} from 'primeng/api';
import {Observable} from 'rxjs';
import {NotificationService} from '../../service/notification.service';
import {Organization} from '../../model/Organization';
import {ApplicationDesc} from '../../model/ApplicationDesc';
import {Router} from '@angular/router';
import {ApplicationService} from '../../../application/service/application.service';

@Component({
  selector: 'app-tree-application-view',
  templateUrl: './tree-applications-view.component.html',
  styleUrls: ['./tree-applications-view.component.scss'],
  providers: [MessageService]
})
export class TreeApplicationsViewComponent implements OnInit {
  treeOfApplications$: Observable<TreeNode[]>;

  selectedNode: TreeNode;
  @Input() horizontal: boolean;

  constructor(private nodeService: TreeApplicationByOrganizationService,
              private notificationService: NotificationService,
              private router: Router,
              private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.treeOfApplications$ = this.nodeService.treeOfApplicationObservable;
    this.horizontal = true;
  }

  nodeSelected($event): void {
    if ($event.node instanceof Organization) {
      if ($event.node.applications.length > 0) {
        this.notificationService.notify('info',
          'Information',
          $event.node.label + ' dispose de ' + $event.node.applications.length + ' application(s)');
      }
    } else {
      if ($event.node instanceof ApplicationDesc) {
        this.applicationService.loadApplication($event.node.codeApplication);
        this.router.navigate(['/application']);
      }
    }
  }
}
