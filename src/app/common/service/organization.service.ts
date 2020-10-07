import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TreeNode} from 'primeng/api';
import {Application, Organization, OrganizationListResponse} from '../model/Organization';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class OrganizationService {

  organizationsSubject = new BehaviorSubject([]);
  private organizationsUrl = 'http://localhost:9090/api/V1/organizations/10000000';

  constructor(private httpClient: HttpClient) {
    this.loadOrganizations();
  }

  loadOrganizations(): void {
    this.httpClient.get(this.organizationsUrl).pipe(map((organizationLstResponse: any) => {
      const organization = this.buildOrganization(organizationLstResponse);
      const treeNode: TreeNode = {label: organization.label, children: organization.children};
      return [treeNode];
    })).toPromise()
      .then(orga => this.organizationsSubject.next(orga));
  }

  private buildOrganization(organizationLstResponse: OrganizationListResponse): Organization {
    return new Organization(organizationLstResponse.idRefog,
      organizationLstResponse.name,
      organizationLstResponse.children.map(orga => this.buildOrganization(orga)),
      organizationLstResponse.applications.map(appli => new Application(appli.codeApplication, appli.shortDescription)));
  }
}
