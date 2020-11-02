import {TreeNode} from 'primeng/api';
import {ApplicationDesc} from './ApplicationDesc';

export class Organization implements TreeNode {
  private readonly idRefog: string;
  private readonly name: string;
  private readonly level: number;
  private readonly organizations: Organization[];
  readonly applications: ApplicationDesc[];

  constructor(idRefog: string,
              name: string,
              level: number,
              organizations: Organization[],
              applications: ApplicationDesc[]) {
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
    const pos: number = this.name.indexOf('-');
    if (pos < 0) {
      return this.name;
    } else {
      return this.name.slice(0, pos - 1);
    }
  }

  get data(): string {
    return this.name;
  }

  get children(): TreeNode[] {
    return [...this.organizations, ...this.applications];
  }
}
