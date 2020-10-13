export interface IUser {
  uid?: string;
  lastName: string;
  firstName: string;
  roles: string[];
}

export class User {
  uid: string;
  lastName: string;
  firstName: string;
  isUser: boolean;
  isAdmin: boolean;

  constructor(uid: string, lastName: string, firstName: string,  roles: string[]) {
    this.uid = uid;
    this.lastName = lastName;
    this.firstName = firstName;
    this.roles = roles;
  }

  get roles(): string[] {
    let roles: string[] = [];
    if (this.isAdmin) {
      roles = ['ROLE_ADMIN', ...roles];
    }
    if (this.isUser) {
      roles = ['ROLE_USER', ...roles];
    }
    return roles;
  }

  set roles(roles: string[]) {
    this.isAdmin = roles.includes('ROLE_ADMIN');
    this.isUser = roles.includes('ROLE_USER');
  }
}
