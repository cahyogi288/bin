import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hakakses from '../views/admin/HakAkses.vue'
import Beranda from '../views/user/beranda.vue'
import Bdi from '../views/user/bdi.vue'
import kejahatan from '../views/user/kejahatan.vue'
import pwni from '../views/user/pwni.vue'
import separatisme from '../views/user/separatisme.vue'
import terorisme from '../views/user/terorisme.vue'
import laporan from '../views/user/laporan.vue'
import Informasi from '../views/admin/Informasi.vue'
import Home from '../views/admin/Home.vue'
import Sidebar from '../components/Sidebar.vue'

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
        path: '/informasi',
        name: 'Informasi',
        component: Informasi
    },
    {
        path: '/beranda',
        name: 'Beranda',
        component: Beranda
    },
    {
        path: '/kategori',
        name: 'Kategori',
        component: Bdi
    },
    {
        path: '/kejahatan',
        name: 'Kejahatan',
        component: kejahatan
    },
    {
        path: '/pwni',
        name: 'PWNI',
        component: pwni
    },
    {
        path: '/separatisme',
        name: 'Separatisme',
        component: separatisme
    },
    {
        path: '/terorisme',
        name: 'Terorisme',
        component: terorisme
    },
    {
        path: '/laporan',
        name: 'Laporan',
        component: laporan
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router