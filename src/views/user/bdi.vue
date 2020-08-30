<template>
    <v-app>
        <Appbar @name="nameContent = $event " />

        <v-main class="mt-n3">
            <v-container fluid>
                <v-card 
                class="px-auto rounded-xl"
                elevation="0">
                    <div class="berandapeta rounded-xl">
                        <v-row 
                        align="center"
                        justify="center">
                            <v-col md="12" sm="12" cols="12">
                                <span> <h1 class="white--text text-center"> {{ nameContent }}</h1></span>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>

                <v-row class="ml-4" style="">
                    <v-col v-if="countContent & !rowDetail" md="8" cols=12>
                        <v-card class="grey lighten-4">
                            <v-row>
                                <!-- <div> -->
                                    <v-col v-for="(item, i) in content" :key="i" md="12" cols="12">
                                        <v-card class="grey lighten-4" elevation="0">
                                            <v-row>
                                            <v-col class="pl-8" md="4" cols="4">
                                                <v-img
                                                height="200"
                                                width="300"
                                                :src="'http://api.dolphinesia.com/uploads/'+ item.foto">
                                                </v-img>
                                            </v-col>
                                            <v-col md="8" cols="8">
                                                <v-card-title>
                                                    <span>{{ item.heading }}</span>
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    <span>{{ item.createdAt | date }}</span>
                                                </v-card-subtitle>
                                                <v-card-text>
                                                    <div style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                        <span v-trim v-html="item.informasi"></span>
                                                    </div>
                                                    <v-btn
                                                    @click="detailBerita(item)"
                                                    class="mt-3"
                                                    color="primary">
                                                        Lihat <v-icon>mdi-arrow-right</v-icon>
                                                    </v-btn>
                                                </v-card-text>
                                            </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                <!-- </div> -->
                    

                                <!-- <v-col class="mt-n7" md="12" cols="12">
                                    <v-card class="grey lighten-4" elevation="0">
                                        <v-row>
                                        <v-col class="pl-8" md="4" cols="4">
                                            <v-img
                                            height="200"
                                            width="300"
                                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                                            </v-img>
                                        </v-col>
                                        <v-col md="8" cols="8">
                                            <v-card-title>
                                                <span>Berita A</span>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                <span>15 April 2020</span>
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <span>Loram Ipsum is simply dummy text of the printing and typesetting industry </span>
                                            </v-card-text>
                                        </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>

                                <v-col class="mt-n7" md="12" cols="12">
                                    <v-card class="grey lighten-4" elevation="0">
                                        <v-row>
                                        <v-col class="pl-8" md="4" cols="4">
                                            <v-img
                                            height="200"
                                            width="300"
                                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                                            </v-img>
                                        </v-col>
                                        <v-col md="8" cols="8">
                                            <v-card-title>
                                                <span>Berita A</span>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                <span>15 April 2020</span>
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <span>Loram Ipsum is simply dummy text of the printing and typesetting industry </span>
                                            </v-card-text>
                                        </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col> -->
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-if="!countContent" md="8" cols=12>
                        <v-card class="grey lighten-4">
                            <v-row>
                                <!-- <div> -->
                                    <v-col md="12" cols="12">
                                        <v-card class="grey lighten-4" elevation="0">
                                            <v-row>
                                            <v-col class="pl-8" md="4" cols="4">
                                                <v-card-title> 
                                                    <span> Berita Tidak Tersedia </span> 
                                                </v-card-title>
                                            </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    
                    <v-col v-if="rowDetail" md="8" cols="12">
                        <v-card class="grey lighten-4">
                            <v-row>
                                <v-col class="mt-n3" md="12" cols="12">
                                    <v-card-title>
                                        <v-row>
                                            <v-col md="12" cols="12">
                                                <span>{{ contentDetail.heading }}</span> <br>
                                                <span class="text-subtitle-1">{{ contentDetail.createdAt }}</span>
                                            </v-col>
                                            <v-col md="12" cols="12">
                                                <!-- <v-img
                                                class="mx-auto align-center justify-center"
                                                height="200"
                                                width="300"
                                                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                            ></v-img> -->
                                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                                <img 
                                                :src="'http://api.dolphinesia.com/uploads/'+contentDetail.foto" 
                                                alt="" 
                                                style="object-fit: cover; height:200px; width: 200px;">
                                                <p>{{ contentDetail.caption }}</p>
                                            </div>
                                            </v-col>
                                            <v-col md="12" cols="12">
                                                <div class="text-body-1" v-html="contentDetail.informasi"></div>
                                            </v-col>
                                        </v-row>
                                    </v-card-title>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col md="4" cols="4">
                        <v-card elevation="0">
                            <v-col md="12" cols="12">
                                <v-card height="100" width="385" class="grey lighten-4 mt-n3">
                                    <v-card-text>
                                        <v-form>
                                            <v-row>
                                                <v-col md="10" cols="10">
                                                    <v-text-field
                                                    background-color="white"
                                                    placeholder="Cari..."
                                                    outlined
                                                    dense></v-text-field>
                                                </v-col>
                                                <v-col class="ml-n4" md="2" cols="2">
                                                    <v-btn icon color="blue">
                                                        <v-icon>mdi-magnify</v-icon>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            
                            <v-col md="12" cols="12"> 
                            <v-card class="grey lighten-4 mt-n3" width="385" elevation="0">
                                <v-col md="12" cols="12">
                                    <!-- <span class="text-subtitle-1"><strong>Kategori</strong></span> -->
                                    <v-list class="grey lighten-4">
                                        <v-subheader>Kategori</v-subheader>
                                        <v-list-item-group v-model="kategori" color="primary">
                                            <v-list-item
                                            v-for="(item, i) in kategoris"
                                            @click="kategorii(item.title)"
                                            :key="i"
                                            >
                                            <v-list-item-content>
                                                <v-list-item-title v-html="item.title"></v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                    
                                </v-col>
                            </v-card>
                            </v-col>
                        </v-card>
                    </v-col>

                </v-row>

                
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from '@/components/Appbar-user.vue'
import { ApiBin } from '@/api/base_api'

export default {
    components: {
        Appbar,
    },
    data() {
        return {
            rowDetail: false,
            kategori: '',
            content: [],
            countContent: '',
            contentDetail: [],
             kategoris: [
                { title: 'PWNI', link: '/pwni' }, 
                { title: 'Terorisme', link: '/terorisme' }, 
                { title: 'Kejahatan Lintas Batas', link: '/kejahatan'},
                { title: 'Separatisme', link: '/separatisme'},
                { title: 'BDI', link: '/bdi' },
                // { title: 'Laporan Bulanan', link: '/laporan' }
                 ],
            nameContent: localStorage.getItem('namaContent'),
        }
    },
    created () {
        this.getBerita();
    },
    directives: {
        trim: {
            inserted: function(el) {
                var str = el.innerHTML;
                var resultString = str.split(' ').slice(0, 15).join(" ") + "...";
                el.innerHTML = resultString
            }
        }
    },
    computed: {
        // name() {
        //     return this.nameContent =  
        // }
    },
    methods: {
        detailBerita(content) {
            // console.log(content)
            this.contentDetail = content
            this.rowDetail = true
        },
        kategorii(kategori){
            localStorage.setItem('namaContent', kategori)
            if(this.$router.history.current.fullPath == '/kategori'){
                this.$router.go()
            }else{
                this.$router.replace({ path: '/kategori' })
            }

        },
        getBerita(){
            let kategori = { kategori:localStorage.getItem('namaContent') }
            ApiBin.post('Konten/getByKategori', kategori).then (resp => {
                // console.log(resp.data)
                this.content = resp.data.data
                this.countContent = this.content.length
                console.log(this.countContent)
            })
        }
    },
}
</script>

<style scoped>
.berandapeta {
    padding: 68px;
    width: 100%;
    height: 100%;
    /* background-size: cover; */
    /* background-color: white; */
    background: url('../../assets/beranda.png') no-repeat center
}
</style>