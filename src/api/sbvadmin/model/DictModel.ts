import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
// 模型
export interface Dict {
  id: number;
  pid: number;
  symbol: string;
  value: string;
  label: string;
  description: string;
  orderNo: number;
  createdAt: string;
  updatedAt: string;
}

export type DictParams = BasicPageParams & {
  id: number;
  createdAt: string;
};

// 列表集合
export type DictList = BasicFetchResult<Dict>;
