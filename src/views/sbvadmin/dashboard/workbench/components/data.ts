interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
  link: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
  route: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
    route: '/dashboard/workbench',
  },
  {
    title: '用户管理',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
    route: '/system/account',
  },
  {
    title: '菜单管理',
    icon: 'ion:layers-outline',
    color: '#e18525',
    route: '/system/menu',
  },
  {
    title: '角色管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
    route: '/system/role',
  },
  {
    title: '日志管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
    route: '/log',
  },
  {
    title: '机构管理',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
    route: '/dept',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'carbon:logo-github',
    name: 'github',
    date: '2023-03-13',
    desc: `收到第一个PR，感谢allonkwok`,
  },
  {
    avatar: 'carbon:video-chat',
    name: 'bilibili',
    date: '2023-01-11',
    desc: `使用mybatisplus 和vben实现低代码开发`,
  },
  {
    avatar: 'carbon:align-box-top-left',
    name: 'CSDN',
    date: '2022-07-11',
    desc: `第一节 spring boot 模块化构建项目`,
  },
  {
    avatar: 'carbon:logo-github',
    name: 'github',
    date: '2022-07-14',
    desc: `init`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'sbvadmin',
    icon: 'carbon:logo-github',
    color: '',
    desc: '项目主地址,觉得好的话可以给个star',
    group: 'Github',
    date: '2023-03-06',
    link: 'https://github.com/billyshen26/sbvadmin',
  },
  {
    title: 'sbvadmin',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '项目前端地址,fork自vbenjs',
    group: 'Github',
    date: '2023-03-06',
    link: 'https://github.com/billyshen26/sbvadmin-vben',
  },
  {
    title: '学习教程',
    icon: 'carbon:align-box-top-left',
    color: '#e18525',
    desc: '一套手把手教学的教程,建议配套学习',
    group: 'CSDN',
    date: '2023-03-06',
    link: 'https://blog.csdn.net/f_angt/category_11910015.html',
  },
  {
    title: 'QQ群',
    icon: 'carbon:letter-qq',
    color: '#bf0c2c',
    desc: '550742781,欢迎加群讨论',
    group: 'QQ',
    date: '2023-03-06',
    link: 'http://wpa.qq.com/msgrd?v=3&uin=550742781&site=qq&menu=yes',
  },
];
