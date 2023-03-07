export interface User {
  id: number;
  email?: string;
  password?: string;
  areas?: Area[];
  tokens?: Token[];
}

export interface Token {
  id: number;
  accessToken: string;
  refrechToken: string;
  serviceId: number;
  token?: User;
  userId?: number;
}

export interface Area {
  id: number;
  action?: any;
  reaction?: any;
  previousAction?: any;
  active?: boolean;
  user?: User;
  userId?: number;
}

export interface Action {
  id: number;
  serviceId?: number;
  title?: string;
  description?: string;
  authId?: number;
  extraData?: any;
}

export interface Reaction {
  id: number;
  serviceId?: number;
  title?: string;
  description?: string;
  authId?: number;
  extraData?: any;
}

export interface Service {
  id: number;
  title?: string;
  description?: string;
  logo?: string;
  extraData?: any;
}

export interface getServiceUserIdByToken {
  (token: string): Promise<number>;
}
