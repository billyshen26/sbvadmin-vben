// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
// import { getAllRoleList } from '/@/api/demo/system';
import { getRoleList } from '/@/api/sbvadmin/System';
import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: 120,
  },
  {
    title: '机构',
    dataIndex: 'depts',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
  },
  {
    title: '最后登录时间',
    dataIndex: 'lastLoginAt',
    width: 180,
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
    field: 'name',
    label: '用户名/昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'InputNumber',
    dynamicDisabled: true,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: false,
    ifShow: true,
  },
  {
    label: '角色',
    field: 'roleIds',
    component: 'ApiSelect',
    componentProps: {
      mode: 'multiple',
      api: getRoleList,
      labelField: 'nameZh',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'deptIds',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      multiple: true,
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '入口页面',
    field: 'homePath',
    component: 'Input',
    defaultValue: '/dashboard/analysis',
    required: true,
  },
];
