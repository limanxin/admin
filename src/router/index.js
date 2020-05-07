import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Welcome from '@/views/Welcome.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/Login',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index,
      // 默认加载指定的嵌套路由
      redirect: { name: 'Welcome' },
      // 添加嵌套路由配置
      children: [
        {
          name: 'Welcome',
          path: 'welcome',
          component: Welcome
        }
      ]
    }
  ]
})

export default router
