<template>
    <v-app>
        <Appbar @tahun="year = $event " @name="nameContent = $event " />

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
                                <span> <h1 class="white--text text-center">  Laporan Bulanan  </h1></span>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>

                <v-row style="">
                    <v-col v-if="!rowDetail" md="8" cols=12>
                        <v-card class="grey lighten-4 ml-6">
                            <v-row class="ml-3 ">
                                <v-col md="4" cols="4">
                                    <v-select
                                    v-model="bulan"
                                    :items="bulans"
                                    item-text="name"
                                    item-value="id"
                                    background-color="white"
                                    label="Bulan"
                                    outlined
                                    dense></v-select>
                                    
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-for="(item, i) in contentFilter" :key="i" class="mt-n7" md="12" cols="12">
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
                                                <span>{{ item.heading }} </span>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                <span>{{ item.createdAt }}</span>
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <div style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                    <span>{{ item.informasi }} </span>
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
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col v-if="rowDetail" md="8" cols="12">
                        <v-card class="grey lighten-4 ml-6">
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
                                                :src="'http://localhost/bin/uploads/'+contentDetail.foto" 
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
                                            :key="i"
                                            @click="kategorii(item.title)"
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
            nameContent: '',
            kategori: '',
            year: localStorage.getItem('tahun'),
            bulan: '',
            content: [],
            contentFilter: [],
            contentDetail: [],
            kategoris: [
            { title: 'PWNI', link: '/pwni' }, 
            { title: 'Terorisme', link: '/terorisme' }, 
            { title: 'Kejahatan Lintas Batas', link: '/kejahatan'},
            { title: 'Separatisme', link: '/separatisme'},
            { title: 'BDI', link: '/bdi' },
            // { title: 'Laporan Bulanan', link: '/laporan' }
                ],
            bulans: [
                { id: '01', name: 'January'},
                { id: '02', name: 'February'},
                { id: '03', name: 'March'},
                { id: '04', name: 'April'},
                { id: '05', name: 'Mei'},
                { id: '06', name: 'Juny'},
                { id: '07', name: 'July'},
                { id: '08', name: 'August'},
                { id: '09', name: 'September'},
                { id: '10', name: 'October'},
                { id: '11', name: 'November'},
                { id: '12', name: 'December'},
            ]
        }
    },
    computed: {
        // name() {
        //     return this.nameContent =  
        // }
    },
    watch: {
        bulan(newValue, oldValue) {
            console.log(newValue)
            let fil = this.content.filter(x => {
                let month = new Date(x.createdAt).getMonth()+1;
                return month == newValue
            })
            this.contentFilter = fil
        }
    },
    created () {
        this.getData();
    },
    methods: {
        kategorii(kategori){
            localStorage.setItem('namaContent', kategori)
            if(this.$router.history.current.fullPath == '/kategori'){
                this.$router.go()
            }else{
                this.$router.replace({ path: '/kategori' })
            }

        },
        detailBerita(content) {
            console.log(content)
            this.contentDetail = content
            this.rowDetail = true
        },
        getData(){
            let kategori =localStorage.getItem('tahun');
            ApiBin.get('Konten/getAll?tahun='+kategori).then (resp => {
                console.log(resp.data)
                this.content = resp.data.data
                this.contentFilter = resp.data.data
                //this.countContent = this.content.length
                //console.log(this.countContent)
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