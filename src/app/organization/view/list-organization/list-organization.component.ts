import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrganizationRootService} from '../../../main/service/organization-root.service';
import {Observable} from 'rxjs';
import {OrganizationDesc} from '../../../main/model/OrganizationDesc';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.scss']
})
export class ListOrganizationComponent implements OnInit {
  @Output() actionOnOrganization = new EventEmitter<boolean>();
  @Output() showDetail = new EventEmitter<boolean>();

  @Input() askForNewOrga: boolean;
  selectedOrga: OrganizationDesc;
  allOrganization$: Observable<OrganizationDesc[]>;
  upLoadLabel: string;
  askForUpdateOrga: boolean;

  constructor(private organizationRootService: OrganizationRootService) {
    this.allOrganization$ = this.organizationRootService.organizationRootObservable;
    this.upLoadLabel = 'Nouvelle Organisation';
    this.askForUpdateOrga = false;
  }

  ngOnInit(): void {
    this.selectedOrga = null;
    this.organizationRootService.loadApplicationsRoot();
  }

  openNew(): void {
    this.actionOnOrganization.emit(true);
  }

  deleteSelectedOrga($event: MouseEvent): void {

  }

  onRowUnselect($event: any): void {
    this.upLoadLabel = 'Mise à jour de ' + this.selectedOrga.name;
  }

  onRowSelect($event: any): void {
    this.upLoadLabel = 'Nouvelle Organisation';
  }
}
