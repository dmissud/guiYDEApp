export class Auth {
  private readonly name: string;
  private token: string;
  private grants: string[];

  constructor(name: string, token: string, grants: string[]) {
    this.name = name;
    this.grants = grants;
  }

  isAnonymous(): boolean {
    return this.name.length === 0;
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
