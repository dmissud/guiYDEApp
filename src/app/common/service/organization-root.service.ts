import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {OrganizationDesc} from '../model/OrganizationDesc';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRootService {

  private organizationRootBehaviorSubject = new BehaviorSubject<OrganizationDesc[]>([]);
  organizationRootObservable: Observable<OrganizationDesc[]> = this.organizationRootBehaviorSubject.asObservable();
  private organizationsUrl = '/organizations/root';

  constructor(private api: ApiService) {
  }

  loadApplicationsRoot(): void {
    this.api.get(this.organizationsUrl)
      .pipe(map((reponse: any) => {
        console.log(reponse);
        return reponse as OrganizationDesc[];
      }))
      .subscribe(lstOrgaRoot => this.organizationRootBehaviorSubject.next(lstOrgaRoot));
  }
}
