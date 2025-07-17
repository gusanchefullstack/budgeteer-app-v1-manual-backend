import { UserStatus, Role } from "./enums";
import { Transaction } from "./transaction";

export interface UserCreate {
  name: string;
  username: string;
  password: string;
  status: UserStatus;
  role: Role;
}

export interface UserUpdate {
  id: string;
  name: string;
  username: string;
  password: string;
  status: UserStatus;
  role: Role;
}
