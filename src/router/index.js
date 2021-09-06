import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import('views/home/Home')
const Mine = () => import('views/profile/Profile')
const Catelog = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect: 'home'
  },

  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/catalog',
    component: Catelog,
  },
  {
    path: '/cart',
    component: Cart,
  },
  // {
  //   path: '/App',
  //   component: App,
  // },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
