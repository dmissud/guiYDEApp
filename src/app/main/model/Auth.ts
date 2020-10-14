export class Auth {
  readonly uid: string;
  readonly token: string;
  readonly grants: string[];

  constructor(uid: string, token: string, grants: string[]) {
    this.uid = uid;
    this.token = token;
    this.grants = grants;
  }

  isAnonymous(): boolean {
    return this.uid.length === 0;
  }

  isUser(): boolean {
    return this.grants.includes(`ROLE_USER`);
  }

  isAdmin(): boolean {
    return this.grants.includes(`ROLE_ADMIN`);
  }

  giveToken(): string {
    return this.token;
  }
}
