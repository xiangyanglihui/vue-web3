import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Products from '@/components/viewproducts'
import Page404 from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products/:page',
      name: 'Products',
      component: Products
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
