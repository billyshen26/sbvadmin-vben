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
export const editUser = (data: User) => defHttp.put<User>({ url: Api.Users + '/' + data.id, data });
export const deleteUser = (id: number) => defHttp.delete({ url: Api.Users + '/' + id });

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
/**
 * @description: 角色相关
 */
export const getRoleList = (params: RoleParams) =>
  defHttp.get<RoleList>({ url: Api.Roles, params });
export const setRoleStatus = (id: number, status: number) =>
  defHttp.put({ url: Api.Roles + '/' + id, params: { status } });
export const editRole = (data: Role) => defHttp.put<Role>({ url: Api.Roles + '/' + data.id, data });
