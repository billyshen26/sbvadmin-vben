import { BasicColumn, FormSchema } from '@/components/Table';
import { getDictTypes, getDictByType } from '@/api/sbvadmin/Dict';
import { ref } from 'vue';

const type = ref<String>('');

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
    title: '字典类型名',
    dataIndex: 'typeName',
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
    field: 'label',
    label: '字典名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'value',
    label: '字典值',
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
    label: '字典类型',
    field: 'type',
    component: 'ApiSelect',
    componentProps: {
      api: getDictTypes,
      labelField: 'typeName',
      valueField: 'type',
      onChange: (e: any) => {
        if (e != undefined) {
          type.value = typeof e == 'object' ? e.value : e;
        }
        console.log(e, type.value);
      },
    },
    required: true,
  },
  {
    field: 'pid',
    label: '所属父级',
    defaultValue: 0,
    component: 'ApiTreeSelect',
    componentProps: {
      params: { type: type },
      api: getDictByType,
      // resultField: 'records', // TIPS: 返回结构里有records
      labelField: 'label',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'label',
    label: '字典名',
    component: 'Input',
    required: true,
  },
  {
    field: 'value',
    label: '字典值',
    component: 'InputTextArea',
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
