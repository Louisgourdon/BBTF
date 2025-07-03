export interface ErrorRes {
  error: string;
  status: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: ("Admin" | "Contributor" | "Visitor")[];
}
