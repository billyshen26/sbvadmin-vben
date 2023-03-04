import { defHttp } from '/@/utils/http/axios';
import { Dept, DeptParams, DeptList } from './model/DeptModel';

enum Api {
  Depts = '/depts',
}

export const getDeptList = (params: DeptParams) => {
  return defHttp.get<DeptList>({ url: Api.Depts + '/getDeptsAsTree', params });
};
export const addDept = (data: Dept) => defHttp.post<Dept>({ url: Api.Depts, data });
export const editDept = (data: Dept) => defHttp.put<Dept>({ url: Api.Depts + '/' + data.id, data });
export const delDept = (id: number) => defHttp.delete({ url: Api.Depts + '/' + id });
