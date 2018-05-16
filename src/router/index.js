import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Intro from '@/components/Intro'
import DetailEBook from '@/components/DetailEBook'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/ebook/:id',
      name: 'ebook_detail',
      component: DetailEBook
    }
  ]
})
