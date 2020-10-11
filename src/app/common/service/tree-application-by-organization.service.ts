import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TreeNode} from 'primeng/api';
import {Application, Organization, OrganizationListResponse} from '../model/Organization';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeApplicationByOrganizationService {

  private treeOfApplicationSubject = new BehaviorSubject<TreeNode[]>([]);
  treeOfApplicationObservable: Observable<TreeNode[]> = this.treeOfApplicationSubject.asObservable();
  private organizationsUrl = 'http://localhost:9090/api/V1/organizations/10000000/applications';

  constructor(private httpClient: HttpClient) {
    this.loadApplicationsTree();
  }

  loadApplicationsTree(): void {
    this.httpClient.get(this.organizationsUrl).pipe(map((organizationLstResponse: any) => {
      const organization = this.buildTreeOfApplications(organizationLstResponse, 0);
      const treeNode: TreeNode = {label: organization.label, children: organization.children};
      return [treeNode];
    })).toPromise()
      .then(orga => this.treeOfApplicationSubject.next(orga));
  }

  private buildTreeOfApplications(organizationLstResponse: OrganizationListResponse, level: number): Organization {
    return new Organization(organizationLstResponse.idRefog,
      organizationLstResponse.name,
      level,
      organizationLstResponse.children.map(orga => this.buildTreeOfApplications(orga, level + 1)),
      organizationLstResponse.applications.map(appli => new Application(appli.codeApplication, appli.shortDescription)));
  }
}
