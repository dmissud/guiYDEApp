import {ApplicationReponse} from './ApplicationReponse';

export interface OrganizationListResponse {
  idRefog: string;
  name: string;
  children: OrganizationListResponse[];
  applications: ApplicationReponse[];
}

