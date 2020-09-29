import { Component, OnInit } from '@angular/core';
import {NodeService} from '../service/node.service';
import {TreeNode} from 'primeng/api';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.scss']
})
export class OrganizationViewComponent implements OnInit {
  files$: Observable<TreeNode[]>;

  selectedFile: TreeNode;

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.files$ = this.nodeService.organizationsSubject;
  }
}
