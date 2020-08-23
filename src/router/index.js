import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hakakses from '../views/admin/HakAkses.vue'
import Beranda from '../views/user/beranda.vue'
import Bdi from '../views/user/bdi.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/hakakses',
        name: 'Hak-Akses',
        component: Hakakses
    },
    {
        path: '/beranda',
        name: 'Beranda',
        component: Beranda
    },
    {
        path: '/bdi',
        name: 'BDI',
        component: Bdi
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router