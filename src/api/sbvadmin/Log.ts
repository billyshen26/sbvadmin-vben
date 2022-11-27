import { defHttp } from '/@/utils/http/axios';
import { Log, LogParams, LogList } from './model/LogModel';

enum Api {
  Logs = '/logs',
}

export const getLogList = (params: LogParams) => {
  return defHttp.get<LogList>({ url: Api.Logs, params });
};
export const addLog = (data: Log) => defHttp.post<Log>({ url: Api.Logs, data });
export const editLog = (data: Log) => defHttp.put<Log>({ url: Api.Logs + '/' + data.id, data });
export const delLog = (id: number) => defHttp.delete({ url: Api.Logs + '/' + id });
