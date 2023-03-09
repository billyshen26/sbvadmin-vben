import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
  },
  {
    title: '父级ID',
    dataIndex: 'pid',
  },
  {
    title: '字典类型',
    dataIndex: 'type',
  },
  {
    title: '字典值',
    dataIndex: 'value',
  },
  {
    title: '字典名',
    dataIndex: 'label',
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '修改时间',
    dataIndex: 'updatedAt',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'createdAt',
    component: 'RangePicker',
    label: '创建日期',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'InputNumber',
    dynamicDisabled: true,
  },
  {
    field: 'pid',
    label: '父级ID',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
  },
  {
    field: 'type',
    label: '字典类型',
    component: 'Input',
    required: true,
  },
  {
    field: 'value',
    label: '字典值',
    component: 'Input',
    required: true,
  },
  {
    field: 'label',
    label: '字典名',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '描述',
    component: 'Input',
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
  },
  {
    field: 'createdAt',
    label: '创建时间',
    component: 'DatePicker',
  },
  {
    field: 'updatedAt',
    label: '修改时间',
    component: 'DatePicker',
  },
];
