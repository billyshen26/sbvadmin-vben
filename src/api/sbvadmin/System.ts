import { defHttp } from '/@/utils/http/axios';
import {
  User,
  UserList,
  UserParams,
  Permission,
  PermissionList,
  PermissionParams,
  Role,
  RoleList,
  RoleParams,
} from './model/SystemModel';

enum Api {
  Users = '/users',
  Permissions = '/permissions',
  Roles = '/roles',
  UserInfo = '/users/info',
}

/**
 * @description: 用户账号相关
 */

// export const getUserList = () => {
//   return defHttp.get<getUserListResultModel>({ url: Api.Users });
// };

export const getUserList = (params: UserParams) =>
  defHttp.get<UserList>({ url: Api.Users, params });
export const addUser = (data: User) => defHttp.post<User>({ url: Api.Users, data });
export const editUser = (data: any) => defHttp.put<User>({ url: Api.Users + '/' + data.id, data });
export const deleteUser = (id: number) => defHttp.delete({ url: Api.Users + '/' + id });
export const changePassword = (data: any) =>
  defHttp.post<User>({ url: Api.Users + '/changePassword', data });

/**
 * @description: 权限相关
 */
export const getPermissionList = (params: PermissionParams) =>
  defHttp.get<PermissionList>({ url: Api.Permissions, params });
export const addPermission = (data: Permission) =>
  defHttp.post<Permission>({ url: Api.Permissions, data });
export const editPermission = (data: Permission) =>
  defHttp.put<Permission>({ url: Api.Permissions + '/' + data.id, data });
export const deletePermission = (id: number) => defHttp.delete({ url: Api.Permissions + '/' + id });
export const refreshPermissions = () =>
  defHttp.post<Permission>({ url: Api.Permissions + '/refreshPermissions' });
/**
 * @description: 角色相关
 */
export const getRoleList = (params: RoleParams) =>
  defHttp.get<RoleList>({ url: Api.Roles, params });
export const setRoleStatus = (id: number, status: boolean) =>
  defHttp.put({ url: Api.Roles + '/' + id, params: { status } });
export const editRole = (data: Role) => defHttp.put<Role>({ url: Api.Roles + '/' + data.id, data });
export const addRole = (data: Role) => defHttp.post<Role>({ url: Api.Roles, data });
export const deleteRole = (id: number) => defHttp.delete({ url: Api.Roles + '/' + id });

/**
 * @description: 个人信息相关
 */
export const geUserInfo = () => defHttp.get<User>({ url: Api.UserInfo });

/**
 * @description: 系统相关
 */
export const refreshAllCache = () =>
  defHttp.post<any>({ url: Api.Permissions + '/refreshAllCache' });
