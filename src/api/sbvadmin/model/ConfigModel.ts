import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
// 模型
export interface Config {
  id: number;
  key: string;
  value: string;
  name: string;
  description: string;
  sort: number;
  createdAt: string;
  updatedAt: string;
}

export type ConfigParams = BasicPageParams & {
  id: number;
  symbol: string;
  createdAt: string;
};

// 列表集合
export type ConfigList = BasicFetchResult<Config>;
