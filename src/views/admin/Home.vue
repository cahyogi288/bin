<template>
    <v-app style="background-color: #E0E0E0">
        <!-- <Sidebar/>
        <Appbar /> -->

        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col md="12" cols="12">
                        <v-card>
                            <v-row class="pb-15">
                                <v-col md="8" cols="8">
                                    <v-card elevation="0" class="mx-auto justify-center align-center">
                                        <img src="../../assets/Frame-4.png"/>
                                    </v-card>
                                </v-col>
                                <v-card elevation="0" class="ml-n15">
                                    <v-col md="12" cols="12" class="">
                                        <v-card class="mt-12" elevation="0">
                                            <!-- <v-card-title>
                                                <span class="text-body-2 mr-10"> <strong> Total User Aktif</strong></span>
                                                <v-spacer></v-spacer>
                                                <span class="text-body-2"> <strong> Total Informasi Saat Ini</strong></span>
                                            </v-card-title>
                                            <v-card-title>
                                                <span class="text-body-2 mr-8 ml-10"> <strong>193</strong></span>
                                                <span style="margin-left:130px" class="text-body-2"> <strong>83</strong></span>
                                            </v-card-title>
                                            <v-divider :vertical="true"></v-divider> -->
                                            <div class="box">
                                                <div class="child">
                                                    <div class="totalUser">
                                                        Total User Aktif
                                                    </div>
                                                    <div class="childBox">
                                                        <b style="font-size: 20px;">{{ dataInformasi.total_user }}</b>
                                                    </div>
                                                </div>
                                                <div class="divider"></div>
                                                <div class="child">
                                                    <div class="totalInformasi">
                                                        Total Informasi Saat Ini
                                                    </div>
                                                    <div class="childBox">
                                                        <b style="font-size: 20px;">{{ dataInformasi.total_berita }}</b>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box2">
                                                <div class="informasPerMenu">
                                                    Total Informasi Per Menu
                                                </div>
                                                <div class="informasi">
                                                    <div class="laporan">
                                                        BDI
                                                        <div class="total">{{ dataInformasi.bdi }}</div>
                                                    </div>

                                                    <div class="divider"></div>
                                                    <div class="laporan">
                                                        ISU BERSAMA
                                                        <div class="total">{{ dataInformasi.isu_bersama }}</div>
                                                    </div>

                                                    <div class="divider"></div>
                                                    <div class="laporan">
                                                        LAPORAN BULANAN
                                                        <div class="total">{{ dataInformasi.laporan_bulanan }}</div>
                                                    </div>

                                                </div>

                                            </div>
                                        </v-card>
                                    </v-col>

                                    <!-- <v-col md="12" cols="12" class="">
                                        <v-card elevation="">
                                            <v-card-title class="justify-center align-center">
                                                <span class="text-body-2"> <strong> Total Informasi per Menu</strong></span>

                                            </v-card-title>
                                            <v-card-title>
                                                
                                            </v-card-title>
                                            <v-divider :vertical="true"></v-divider>
                                        </v-card>
                                    </v-col> -->
                                </v-card>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!-- <Footer /> -->
    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'
import Footer from '@/components/Footer.vue'
import { ApiBin } from '@/api/base_api'

export default {
    components: {
        Sidebar,
        Appbar,
        Footer
    },
    data() {
        return {
            dataInformasi: {
                bdi: '',
                isu_bersama: '',
                laporan_bulanan: '',
                total_berita: '',
                total_user: ''
            },
        }
    },
    mounted () {
        this.getInformasi();
    },
    methods: {
        getInformasi() {
            ApiBin.get('User/getTotal').then( resp => {
                // console.log(resp.data)
                this.dataInformasi.bdi = resp.data.data.bdi
                this.dataInformasi.isu_bersama = resp.data.data.isu_bersama
                this.dataInformasi.laporan_bulanan = resp.data.data.laporan_bulanan
                this.dataInformasi.total_berita = resp.data.data.total_berita
                this.dataInformasi.total_user = resp.data.data.total_user
            })
        }
    },
}
</script>

<style scoped>
.box {
            display: flex;
            background-color: white;
            width: 380px;
            height: 128px;
            box-shadow: 5px 5px 5px 0px grey;
            border-radius: 8px;
            margin-bottom: 50px;
        }

        .child {
            display: flex;
            flex: 2;
            flex-direction: column;
        }

        .divider {
            background-color: black;
            height: 100%;
            width: 1px;
        }

        .totalUser {
            display: flex;
            height: 32px;
            width: 100%;
            background-color: #68EFBE;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 8px;
            font-family: 'Roboto';
            font-size: 15px;
        }

        .totalInformasi {
            display: flex;
            height: 32px;
            width: 100%;
            background-color: #68DFEF;
            justify-content: center;
            align-items: center;
            border-top-right-radius: 8px;
            font-family: 'Roboto';
            font-size: 15px;
        }

        .childBox {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
        }

        .box2 {
            display: flex;
            background-color: white;
            width: 380px;
            height: 128px;
            box-shadow: 5px 5px 5px 0px grey;
            border-radius: 8px;
            margin-bottom: 50px;
            flex-direction: column;
        }

        .laporan {
            font-size: 12px;
            display: flex;
            align-items: center;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            font-family: 'Roboto'
        }

        .total {
            font-weight: bold;
            margin-top: 15px;
            font-size: 20px;
        }

        .informasi {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            margin-top: 7px;
        }
        .informasPerMenu {
            height: 32px; 
            width: 100%; 
            background-color: #ECEF68; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            border-top-right-radius: 8px; 
            border-top-left-radius: 8px;
            font-family: 'Roboto'
        }
</style>