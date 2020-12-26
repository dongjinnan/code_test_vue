import Vue from 'vue'
import Router from 'vue-router'
import CodeTest from '@/components/CodeTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CodeTest',
      component: CodeTest
    }
  ]
})
