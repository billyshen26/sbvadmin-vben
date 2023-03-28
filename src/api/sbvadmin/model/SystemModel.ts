import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
// 用户模型
export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  homePath: string;
  last_login_at: string;
  last_login_ip: string;
  enabled: boolean;
  locked: boolean;
}

// 权限模型
export interface Permission {
  id: number;
  pid: number;
  requestUrl: string;
  requestMethod: string;
  name: string;
  i18n: string;
  description: string;
  path: string;
  component?: string;
  icon?: string;
  type: number;
  status: number;
  orderNo: number;
}

// 角色模型
export interface Role {
  id: number;
  name: string;
  nameZh: string;
  description: string;
  status: number;
  orderNo: number;
  menu: number[];
}

export type UserParams = BasicPageParams & {
  id: number;
  createdAt: string;
};

export type RoleParams = BasicPageParams & {
  id: number;
  createdAt: string;
};

export type PermissionParams = BasicPageParams & {
  id: number;
  createdAt: string;
};
/**
 * @description: Get user return value
 */
export type UserList = BasicFetchResult<User>;
export type RoleList = BasicFetchResult<Role>;
export type PermissionList = BasicFetchResult<Permission>;
