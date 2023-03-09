import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
// 模型
export interface Dept {
  id: number;
  pid: number;
  name: string;
  orderNo: number;
  createdAt: string;
  updatedAt: string;
}

export type DeptParams = BasicPageParams & {
  id: number;
  createdAt: string;
};

// 列表集合
export type DeptList = BasicFetchResult<Dept>;
