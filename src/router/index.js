import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hakakses from '../views/admin/HakAkses.vue'
import Beranda from '../views/user/beranda.vue'
import Detail from '../views/user/detail.vue'
import Bdi from '../views/user/bdi.vue'
import laporan from '../views/user/laporan.vue'
import Container from '@/components/DefaultContainer.vue'
import Informasi from '../views/admin/Informasi.vue'
import Home from '../views/admin/Home.vue'
// import Sidebar from '../components/Sidebar.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                let a = JSON.parse(localStorage.getItem('descUser'))
                if (a[0].status == 'PEGAWAI') {
                    next({ path: '/beranda' })
                } else {
                    next('/')
                }
            } else {
                next()
            }
        }
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
        path: '/',
        // redirect: '/login',
        component: Container,
        children: [{
                path: '/',
                name: 'Home',
                component: Home,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("descUser")) {
                        // next()
                        let a = JSON.parse(localStorage.getItem('descUser'))
                        if (a[0].status == 'ADMIN') {
                            next()
                        } else {
                            next('/login')
                        }
                    } else {
                        next('/login')
                    }
                }
            },
            {
                path: 'hakakses',
                name: 'Hak-Akses',
                component: Hakakses,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("descUser")) {
                        // next()
                        let a = JSON.parse(localStorage.getItem('descUser'))
                        if (a[0].status == 'ADMIN') {
                            next()
                        } else {
                            next('/login')
                        }
                    } else {
                        next('/login')
                    }
                }
            },
            {
                path: 'informasi',
                name: 'Informasi',
                component: Informasi,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("descUser")) {
                        // next()
                        let a = JSON.parse(localStorage.getItem('descUser'))
                        if (a[0].status == 'ADMIN') {
                            next()
                        } else {
                            next('/login')
                        }
                    } else {
                        next('/login')
                    }
                }
            },
        ]
    },

    {
        path: '/beranda',
        name: 'Beranda',
        component: Beranda,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                // next()
                // console.log(to)
                // console.log(from)
                let a = JSON.parse(localStorage.getItem('descUser'))
                if (a[0].status == 'PEGAWAI') {
                    next()
                } else {
                    next('/login')
                }
            } else {
                next('/login')
            }
        },
    },
    {
        path: '/detail',
        name: 'Detail Content',
        component: Detail,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                let a = JSON.parse(localStorage.getItem('descUser'))
                if (a[0].status == 'PEGAWAI') {
                    next()
                } else {
                    next('/login')
                }
            } else {
                next('/login')
            }
        },
    },
    {
        path: '/kategori',
        name: 'Kategori',
        component: Bdi,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                let a = JSON.parse(localStorage.getItem('descUser'))
                if (a[0].status == 'PEGAWAI') {
                    next()
                } else {
                    next('/login')
                }
            } else {
                next('/login')
            }
        }
    },
    {
        path: '/laporan',
        name: 'Laporan',
        component: laporan,
        beforeEnter(to, from, next) {
            if (localStorage.getItem("descUser")) {
                let a = JSON.parse(localStorage.getItem('descUser'))
                if (a[0].status == 'PEGAWAI') {
                    next()
                } else {
                    next('/login')
                }
            } else {
                next('/login')
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