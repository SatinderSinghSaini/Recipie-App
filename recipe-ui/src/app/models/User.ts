export class User {
  public id: Number;
  public email: string;
  public pwd: string;
  public role: string;
  public authStatus: boolean;
  constructor(
    id?: Number,
    email?: string,
    pwd?: string,
    role?: string,
    authStatus?: boolean
  ) {
    this.id = id || 0;
    this.email = email || '';
    this.pwd = pwd || '';
    this.role = role || '';
    this.authStatus = authStatus || false;
  }
}
