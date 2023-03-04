import { defHttp } from '/@/utils/http/axios';
import { Config, ConfigParams, ConfigList } from './model/ConfigModel';

enum Api {
  Configs = '/configs',
}

export const getConfigList = (params: ConfigParams) => {
  return defHttp.get<ConfigList>({ url: Api.Configs, params });
};
export const addConfig = (data: Config) => defHttp.post<Config>({ url: Api.Configs, data });
export const editConfig = (data: Config) =>
  defHttp.put<Config>({ url: Api.Configs + '/' + data.id, data });
export const delConfig = (id: number) => defHttp.delete({ url: Api.Configs + '/' + id });
