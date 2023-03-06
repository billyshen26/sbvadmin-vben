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
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'Vben',
    date: '2天前',
    desc: `发表文章 <a>如何编写一个Vite插件</a> `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '1周前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '2021-04-01 20:00',
    desc: `推送了代码到 <a>Github</a>`,
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
    icon: 'carbon:closed-caption',
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
