// import {createRouter , createWebHistory } from 'vue-router'

// import Product from '../components/Product.vue'
// import About from '../components/About.vue'
// // import Error from '../components/Error.vue'
// import Home from '../components/Home.vue'

// const routes = [
//     { path:'/', component: Home},
//     { path:'/Product', component: Product},
//     { path:'/Home', component: Home},
//     { path:'/About', component: About},
//     // { path:'/Error', component: Error},
// ]
// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes,
// })


import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/Product.vue'
import About from '../components/About.vue'
import Error from '../components/Error.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', component: Home},
    { path:'/Product', component: Product},
    { path:'/Home', component: Home},
    { path:'/About', component: About},
    { path:'/:pathMatch(.*)*', component: Error},
  ]
})
