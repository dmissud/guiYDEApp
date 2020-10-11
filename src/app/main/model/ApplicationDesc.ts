import {TreeNode} from 'primeng/api';

export class ApplicationDesc implements TreeNode {
  readonly codeApplication: string;
  readonly shortDescription: string;

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
