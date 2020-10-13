export class User {
  uid: string;
  lastName: string;
  firstName: string;
  password: string;
  roles: string[];

  constructor(uid: string, lastName: string, firstName: string, password: string, roles: string[]) {
    this.uid = uid;
    this.lastName = lastName;
    this.firstName = firstName;
    this.password = password;
    this.roles = roles;
  }

  // Getter /Setter isAdmin
  get isAdmin(): boolean {
    return this.roles.includes('ROLE_ADMIN');
  }
  set isAdmin(admin: boolean) {
    if (admin) {
      if (!this.roles.includes('ROLE_ADMIN')) {
        this.roles = ['ROLE_ADMIN', ...this.roles];
      }
    } else {
      if (this.roles.includes('ROLE_ADMIN')) {
        this.roles.splice(this.roles.indexOf('ROLE_ADMIN'), 1);
      }
    }
  }
  get isUser(): boolean {
    return this.roles.includes('ROLE_USER');
  }
  set isUser(user: boolean) {
    if (user) {
      if (!this.roles.includes('ROLE_USER')) {
        this.roles = ['ROLE_USER', ...this.roles];
      }
    } else {
      if (this.roles.includes('ROLE_USER')) {
        this.roles.splice(this.roles.indexOf('ROLE_USER'), 1);
      }
    }
  }
}
