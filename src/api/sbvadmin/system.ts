import { defHttp } from '/@/utils/http/axios';
import {
  UserItem,
  getUserListResultModel,
  PermissionItem,
  getRoleListResultModel,
  RoleItem,
} from './model/systemModel';

enum Api {
  Users = '/users',
  Permissions = '/permissions',
  Roles = '/roles',
}

/**
 * @description: 用户账号相关
 */

export const getUserList = () => {
  return defHttp.get<getUserListResultModel>({ url: Api.Users });
};
export const addUser = (data: UserItem) => defHttp.post<UserItem>({ url: Api.Users, data });

/**
 * @description: 权限相关
 */
export const addPermission = (data: PermissionItem) =>
  defHttp.post<PermissionItem>({ url: Api.Permissions, data });
export const editPermission = (data: PermissionItem) =>
  defHttp.put<PermissionItem>({ url: Api.Permissions + '/' + data.id, data });
export const deletePermission = (id: number) => defHttp.delete({ url: Api.Permissions + '/' + id });
/**
 * @description: 角色相关
 */
export const getRoleList = () => defHttp.get<getRoleListResultModel>({ url: Api.Roles });
export const setRoleStatus = (id: number, status: number) =>
  defHttp.put({ url: Api.Roles + '/' + id, params: { status } });
export const editRole = (data: RoleItem) =>
  defHttp.put<RoleItem>({ url: Api.Roles + '/' + data.id, data });
