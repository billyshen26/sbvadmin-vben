import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
// 模型
export interface Log {
  id: number;
  uid: number;
  username: string;
  level: number;
  description: string;
  reqParam: string;
  takeUpTime: number;
  method: string;
  uri: string;
  ip: string;
  address: string;
  version: string;
  createdAt: string;
  updatedAt: string;
}

export type LogParams = BasicPageParams & {
  id: number;
  createdAt: string;
};

// 列表集合
export type LogList = BasicFetchResult<Log>;
