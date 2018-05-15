import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import index from './../components/index'
import list from './../components/list'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: 'index', path: '/', component: index },
    { name: 'list', path: '/login', component: list },
    // { name: 'list', path: '/list', component: list },
  ]
})

export default router