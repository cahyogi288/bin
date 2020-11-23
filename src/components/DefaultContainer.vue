<template>
    <v-app style="background-color: #E0E0E0">
        <Sidebar/>
        <Appbar />
            <router-view></router-view>
        <Footer />
    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Sidebar,
        Appbar,
        Footer
    },
    data() {
        return {
            
        }
    },
}
</script>