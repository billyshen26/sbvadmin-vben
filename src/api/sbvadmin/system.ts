import { defHttp } from '/@/utils/http/axios';
import {
  getUserListResultModel,
  PermissionItem,
  getRoleListResultModel,
  RoleItem,
} from './model/systemModel';

enum Api {
  GetUserList = '/users',
  Permissions = '/permissions',
  Roles = '/roles',
}

/**
 * @description: Get users
 */

export const getUserList = () => {
  return defHttp.get<getUserListResultModel>({ url: Api.GetUserList });
};

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
