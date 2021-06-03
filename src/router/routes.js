import dynamic from 'dva/dynamic'
import app from '../dvaApp'

// 如果有公用的数据需要共享就写在base中
const commonArr = [import('../models/base')]

const createComponent = (component, arr = []) =>
  dynamic({
    app,
    models: () => [...commonArr, ...arr],
    component,
  })

// [import('../models/...')] //这个是用来引入rudux
const Home = createComponent(() => import('@/pages/home'))
const Login = createComponent(() => import('@/pages/login'))
const Center = createComponent(() => import('@/pages/center'))
const HomeName = createComponent(() => import('@/pages/homename'))
// 注意这里需要做用户权限的筛选，如果想简单一点，给后端协商好，通过后端的配置返回下面这个数据即可，复杂的话就需要返回用户的权限，我们对数组进行递归便利生成一个新的数组，
const routes = [
  {
    path: '/home',
    component: Home,
    name: '我的主页',
    routes: [
      {
        path: '/home/name',
        component: HomeName,
        exact: true,
        name: '我的信息',
      },
    ],
  },
  {
    path: '/center',
    component: Center,
    name: '个人中心',
  },
  {
    path: '/login',
    component: Login,
    name: '登录',
  },
]

export default routes
