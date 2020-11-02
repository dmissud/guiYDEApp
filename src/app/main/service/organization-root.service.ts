import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {OrganizationDesc} from '../model/OrganizationDesc';
import {JsonFormatter} from 'tslint/lib/formatters';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRootService {

  private organizationRootBehaviorSubject = new BehaviorSubject<OrganizationDesc[]>([]);
  organizationRootObservable: Observable<OrganizationDesc[]> = this.organizationRootBehaviorSubject.asObservable();
  private organizationsRootUrl = '/organizations';

  constructor(private api: ApiService) {
  }

  loadApplicationsRoot(): void {
    this.api.get(this.organizationsRootUrl + '?isRootOnly=true')
      .pipe(map((reponse: any) => {
        return reponse as OrganizationDesc[];
      }))
      .subscribe(lstOrgaRoot => this.organizationRootBehaviorSubject.next(lstOrgaRoot));
  }

  upLoad(fileOrganization: File): void {
      fileOrganization.text().then(res => this.api.post(this.organizationsRootUrl, JSON.parse(res))
        .subscribe(() => this.loadApplicationsRoot()));
  }
}
