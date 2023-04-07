import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
  },
  {
    title: '配置标识',
    dataIndex: 'symbol',
  },
  {
    title: '配置值',
    dataIndex: 'value',
  },
  {
    title: '配置名',
    dataIndex: 'name',
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
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      placeholder: ['开始时间', '结束时间'],
      showTime: { format: 'HH:mm:ss' },
    },
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
    field: 'symbol',
    label: '配置标识',
    component: 'Input',
    required: true,
    dynamicDisabled: true,
  },
  {
    field: 'name',
    label: '配置名',
    component: 'Input',
    required: true,
  },
  {
    field: 'value',
    label: '配置值',
    component: 'InputTextArea',
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
