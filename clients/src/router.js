import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Fashion from './views/Fashion.vue'
import Shoes from './views/Shoes.vue'
import Handphone from './views/Handphone.vue'
import Computer from './views/Computer.vue'




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: About
    },
    {
      path: '/items/fashion',
      name: 'fashion',
      component: Fashion
    },
    {
      path: '/items/shoes',
      name: 'shoes',
      component: Shoes
    },
    {
      path: '/items/handphone',
      name: 'handphone',
      component: Handphone
    },
    {
      path: '/items/computer',
      name: 'computer',
      component: Computer
    }
  ],
  mode: 'history'
})