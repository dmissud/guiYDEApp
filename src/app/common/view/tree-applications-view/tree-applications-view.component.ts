import {Component, Input, OnInit} from '@angular/core';
import {TreeApplicationByOrganizationService} from '../../service/tree-application-by-organization.service';
import {MessageService, TreeNode} from 'primeng/api';
import {Observable} from 'rxjs';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-organization-view',
  templateUrl: './tree-applications-view.component.html',
  styleUrls: ['./tree-applications-view.component.scss'],
  providers: [MessageService]
})
export class TreeApplicationsViewComponent implements OnInit {
  treeOfApplications$: Observable<TreeNode[]>;

  selectedNode: TreeNode;
  @Input() horizontal: boolean;

  constructor(private nodeService: TreeApplicationByOrganizationService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.treeOfApplications$ = this.nodeService.treeOfApplicationObservable;
    this.horizontal = true;
  }

  nodeSelected($event): void {
    console.log('message');
    this.notificationService.notify('info', 'Information', $event.node.label);
  }
}
