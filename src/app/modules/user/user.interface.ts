import { USER_ROLES } from "./user.constant";

export interface TUser {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
}

export type TUserRoles = keyof typeof USER_ROLES;
