import {TreeNode} from 'primeng/api';

export interface ApplicationReponse {
  codeApplication: string;
  shortDescription: string;
}

export interface OrganizationListResponse {
  idRefog: string;
  name: string;
  children: OrganizationListResponse[];
  applications: ApplicationReponse[];
}

export class Application implements TreeNode {
  private readonly codeApplication: string;
  private readonly shortDescription: string;

  constructor(codeApplication: string, shortDescription: string) {
    this.codeApplication = codeApplication;
    this.shortDescription = shortDescription;
  }

  get label(): string {
    return this.shortDescription;
  }

  get data(): string {
    return this.codeApplication;
  }
}

export class Organization implements TreeNode {
  private readonly idRefog: string;
  private readonly name: string;
  private readonly organizations: Organization[];
  private readonly applications: Application[];

  constructor(idRefog: string,
              name: string,
              organizations: Organization[],
              applications: Application[]) {
    this.idRefog = idRefog;
    this.name = name;
    this.organizations = organizations;
    this.applications = applications;
  }

  get label(): string {
    return this.name;
  }

  get data(): string {
    return 'Documents Folder';
  }

  get children(): TreeNode[] {
    return [...this.organizations, ...this.applications];
  }
}
