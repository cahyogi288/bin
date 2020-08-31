import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hakakses from '../views/admin/HakAkses.vue'
import Beranda from '../views/user/beranda.vue'
import Bdi from '../views/user/bdi.vue'
import laporan from '../views/user/laporan.vue'
import Informasi from '../views/admin/Informasi.vue'
import Home from '../views/admin/Home.vue'
// import Sidebar from '../components/Sidebar.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
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
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/hakakses',
        name: 'Hak-Akses',
        component: Hakakses,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/informasi',
        name: 'Informasi',
        component: Informasi,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/beranda',
        name: 'Beranda',
        component: Beranda,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/kategori',
        name: 'Kategori',
        component: Bdi,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/laporan',
        name: 'Laporan',
        component: laporan,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                next()
            } else {
                next('/')
            }
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router