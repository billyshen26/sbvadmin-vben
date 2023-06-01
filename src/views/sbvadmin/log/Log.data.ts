import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
    width: 80,
  },
  {
    title: '用户id',
    dataIndex: 'uid',
    width: 80,
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '姓名',
    dataIndex: 'nickname',
  },

  {
    title: '操作描述',
    dataIndex: 'description',
    width: 180,
  },
  {
    title: '请求参数',
    dataIndex: 'reqParam',
    width: 240,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '请求IP',
    dataIndex: 'ip',
  },
  {
    title: '请求地址',
    dataIndex: 'address',
  },
  {
    title: '等级',
    dataIndex: 'level',
  },
  {
    title: '耗时',
    dataIndex: 'takeUpTime',
  },
  {
    title: '操作方法',
    dataIndex: 'method',
  },
  {
    title: '请求url',
    dataIndex: 'uri',
  },
  {
    title: '版本号',
    dataIndex: 'version',
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
    field: 'likeSearch',
    label: '描述',
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
    field: 'uid',
    label: '操作用户id',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
  },
  {
    field: 'level',
    label: '日志等级:1为行为日志,2为错误日志',
    component: 'InputNumber',
  },
  {
    field: 'description',
    label: '操作描述',
    component: 'Input',
  },
  {
    field: 'reqParam',
    label: '请求参数',
    component: 'Input',
  },
  {
    field: 'takeUpTime',
    label: '耗时',
    component: 'InputNumber',
  },
  {
    field: 'method',
    label: '操作方法',
    component: 'Input',
  },
  {
    field: 'uri',
    label: '请求url',
    component: 'Input',
  },
  {
    field: 'ip',
    label: '请求IP',
    component: 'Input',
  },
  {
    field: 'version',
    label: '版本号',
    component: 'Input',
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
