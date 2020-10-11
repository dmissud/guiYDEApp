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

  get icon(): string {
    return 'pi yde-theme yde-application';
  }

}

export class Organization implements TreeNode {
  private readonly idRefog: string;
  private readonly name: string;
  private readonly level: number;
  private readonly organizations: Organization[];
  private readonly applications: Application[];

  constructor(idRefog: string,
              name: string,
              level: number,
              organizations: Organization[],
              applications: Application[]) {
    this.idRefog = idRefog;
    this.name = name;
    this.level = level;
    this.organizations = organizations;
    this.applications = applications;
  }

  get icon(): string {
    let representation: string;
    switch (this.level) {
      case 0:
      case 1:
        representation = 'pi yde-theme yde-hierarchie-parent';
        break;
      default:
        representation = 'pi yde-theme yde-hierarchie-first';
    }
    return representation;
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
