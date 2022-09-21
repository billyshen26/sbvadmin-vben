// 用户模型
export interface UserItem {
  id: number;
  name: string;
  username: string;
  avatar: string;
  last_login_at: string;
  last_login_ip: string;
  enabled: boolean;
  locked: boolean;
}

// 权限模型
export interface PermissionItem {
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
export interface RoleItem {
  id: number;
  name: string;
  nameZh: string;
  description: string;
  status: number;
  orderNo: number;
  menu: number[];
}

/**
 * @description: Get user return value
 */
export type getUserListResultModel = UserItem[];
export type getRoleListResultModel = RoleItem[];
