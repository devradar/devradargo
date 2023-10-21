export interface SkillChange {
  date: string;
  newLevel: number;
  text: string;
  id: string;
}

export interface Skill {
  title: string;
  category: number;
  changes: SkillChange[];
  link: string;
  id?: string;
  description: string;
  level: number;
  index?: number;
}

export interface Meta {
  title: string;
  categories: string[];
  levels: string[];
}

export interface UserRole {
  admin?: boolean;
  editor?: boolean;
  viewer?: boolean;
}
export interface User {
  uid: string;
  lastLogin: string;
  name: string;
  radar: string;
  id?: string;
  displayName?: string;
  roles?: UserRole;
}

export enum LoginState {
  LOGIN_PENDING = 0,
  LOGGED_IN,
  LOGOUT_PENDING,
  LOGGED_OUT,
  UNKNOWN
}

export enum RadarTabState {
  RadarChart = 0,
  History
}