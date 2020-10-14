import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {OrganizationDesc} from '../../model/OrganizationDesc';
import {OrganizationRootService} from '../../service/organization-root.service';
import {TreeApplicationByOrganizationService} from '../../service/tree-application-by-organization.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-tree-applications.component.html',
  styleUrls: ['./main-tree-applications.component.scss']
})
export class MainTreeApplicationsComponent implements OnInit, OnDestroy {
  modeOrganization: boolean;
  roots: OrganizationDesc[];
  selectedRoot: OrganizationDesc;
  roots$: Observable<OrganizationDesc[]>;
  private subscription: Subscription;
  showApplicationView: boolean;

  constructor(private organizationRootService: OrganizationRootService,
              private treeAppicationByOrganizationService: TreeApplicationByOrganizationService) {
    this.roots$ = this.organizationRootService.organizationRootObservable;
    this.subscription = this.roots$.subscribe(
      lstOfRoot => {
        if ((lstOfRoot !== undefined) && (lstOfRoot.length !== 0)) {
          this.treeAppicationByOrganizationService.loadApplicationsTree(lstOfRoot[0].idRefog);
        }
      }
    );
  }

  ngOnInit(): void {
    this.showApplicationView = true;
    this.modeOrganization = true;
    this.organizationRootService.loadApplicationsRoot();
  }

  rootChange(): void {
    console.log(this.selectedRoot);
  }

  ngOnDestroy(): void {
  }

  driveShowApplication($event: boolean): void {
    this.showApplicationView = $event;
  }
}
