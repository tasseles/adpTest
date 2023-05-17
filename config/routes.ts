export default [
  { path: '/user', name: '登录', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/frontpage', name: '首页', icon: 'smile', component: './FrontPage' },
  {
    path: '/admin',
    name: '权限',
    icon: 'crown',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级权限', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', name: '表格', component: './TableList' },
  { path: '/', redirect: '/frontpage', },
  { path: '*', layout: false, component: './404', name: '404', },
];
