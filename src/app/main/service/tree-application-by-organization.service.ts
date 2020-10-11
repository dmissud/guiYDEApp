import {Injectable} from '@angular/core';

import {TreeNode} from 'primeng/api';
import {Organization} from '../model/Organization';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {OrganizationListResponse} from '../model/OrganizationListReponse';
import {ApplicationDesc} from '../model/ApplicationDesc';

@Injectable({
  providedIn: 'root'
})
export class TreeApplicationByOrganizationService {

  private treeOfApplicationSubject = new BehaviorSubject<TreeNode[]>([]);
  treeOfApplicationObservable: Observable<TreeNode[]> = this.treeOfApplicationSubject.asObservable();
  private organizationsUrl = '/organizations';

  constructor(private api: ApiService) {
    // this.loadApplicationsTree('10000000');
  }

  loadApplicationsTree(idRefog: string): void {
    let url: string;
    url = this.organizationsUrl + '/' + idRefog + '/applications';
    this.api.get(url).pipe(map((organizationLstResponse: any) => {
      const organization = this.buildTreeOfApplications(organizationLstResponse, 0);
      const treeNode: TreeNode = {label: organization.label, children: organization.children};
      return [treeNode];
    })).subscribe(orga => this.treeOfApplicationSubject.next(orga));
  }

  private buildTreeOfApplications(organizationLstResponse: OrganizationListResponse, level: number): Organization {
    return new Organization(organizationLstResponse.idRefog,
      organizationLstResponse.name,
      level,
      organizationLstResponse.children.map(orga => this.buildTreeOfApplications(orga, level + 1)),
      organizationLstResponse.applications.map(appli => new ApplicationDesc(appli.codeApplication, appli.shortDescription)));
  }
}
