export class Auth {
  readonly uid: string;
  private token: string;
  private grants: string[];

  constructor(uid: string, token: string, grants: string[]) {
    this.uid = uid;
    this.token = token;
    this.grants = grants;
  }

  isAnonymous(): boolean {
    return this.uid.length === 0;
  }

  isUser(): boolean {
    return this.grants.includes(`USER`);
  }

  isAdmin(): boolean {
    return this.grants.includes(`ADMIN`);
  }

  giveToken(): string {
    return this.token;
  }
}
