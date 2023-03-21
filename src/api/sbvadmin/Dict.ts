import { defHttp } from '/@/utils/http/axios';
import { Dict, DictParams, DictList } from './model/DictModel';

enum Api {
  Dicts = '/dicts',
}

export const getDictList = (params: DictParams) => {
  return defHttp.get<DictList>({ url: Api.Dicts, params });
};
export const addDict = (data: Dict) => defHttp.post<Dict>({ url: Api.Dicts, data });
export const editDict = (data: Dict) => defHttp.put<Dict>({ url: Api.Dicts + '/' + data.id, data });
export const delDict = (id: number) => defHttp.delete({ url: Api.Dicts + '/' + id });
export const getDictTypes = () => {
  return defHttp.get<DictList>({ url: Api.Dicts + '/getDictTypes' });
};
