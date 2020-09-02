<template>
    <div>
        <v-app-bar
        color="white"
        dense
        elevation="0"
        class="mb-2"
        >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title> -->
        <v-avatar class="">
            <img
            src="../assets/bin.png"
            alt="John"
            >
        </v-avatar>

        <v-spacer></v-spacer>

        <v-btn link to="/beranda" @click="offDetail" text>
            Beranda
        </v-btn>

        <v-btn text @click="dataContent('BDI')" link>
            BDI
        </v-btn>

        <!-- <v-btn text @click="expand = !expand">
           Isu Bersama  <v-icon right>mdi-chevron-down</v-icon>
        </v-btn> -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                >
                Isu Bersama
                <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="dataContent(item.title)"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- <v-btn text @click="expand = !expand">
           Laporan Bulanan <v-icon right>mdi-chevron-down</v-icon> 
        </v-btn> -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                >
                Laporan Bulanan
                <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items2"
                :key="index"
                @click="sendTahun(item.title)"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu
        offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                icon
                v-bind="attrs"
                v-on="on">
                    <v-icon>mdi-account-outline</v-icon>
                </v-btn>
            </template>
            
            <v-list>
                <v-list-item
                v-for="n in listRight"
                :key="n"
                @click="logout">
                    <v-list-item-title>{{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
            
        </v-menu>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expand: false,
            detailOff: false,
            listRight: ["Logout"],
            items: [
                { title: 'PWNI', link: '/bdi' },
                { title: 'Terorisme', link: '/terorisme' },
                { title: 'Kejahatan Lintas Batas', link: '/kejahatan' },
                { title: 'Separatisme', link: '/separatisme' },
            ],
            items2: [
                { title: '2020',  },
                { title: '2019',  },
                { title: '2018' },
                { title: '2017' },
            ],
        }
    },
    methods: {
        offDetail(){
            this.$emit('offDetail', this.detailOff)
        },
        dataContent(nameContent){
            console.log(nameContent)
            // if(!localStorage.getItem('nameContent')){
                console.log(this.$router.history.current.fullPath)
                localStorage.setItem('namaContent', nameContent)
                if(this.$router.history.current.fullPath == '/kategori'){
                    this.$router.go()
                }else{
                    this.$router.replace({ path: '/kategori' })
                }
                
            
            // this.$emit('name', nameContent)
        },
        sendTahun(tahun){
            console.log(tahun)
            // this.$emit('tahun', tahun)
            // localStorage.setItem('tahun', tahun)
            console.log(this.$router.history.current.fullPath)
            localStorage.setItem('tahun', tahun)
            if(this.$router.history.current.fullPath == '/laporan'){
                this.$router.go()
            } else{
                this.$router.replace({ path: '/laporan' })
            }         
        },
        logout() {
            localStorage.removeItem('descUser')
            this.$router.push({ path: '/' })
        }
    },
}
</script>