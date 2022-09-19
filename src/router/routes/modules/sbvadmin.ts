import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sbvadmin: AppRouteModule = {
  path: '/users',
  name: '用户管理',
  component: LAYOUT,
  redirect: '/sbvadmin/users',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.sbvadmin.userMgr'),
  },
  children: [
    {
      path: 'userList',
      name: 'UserList',
      component: () => import('/@/views/sbvadmin/UserList.vue'),
      meta: {
        // affix: true,
        title: t('routes.sbvadmin.userList'),
      },
    },
  ],
};

export default sbvadmin;
