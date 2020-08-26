<template>
    <v-app>
        <Appbar />
        
        <v-main class="mt-n3">
            <v-container fluid>
                <v-card 
                class="mx-auto rounded-xl"
                elevation="0">
                    <div class="berandapeta rounded-xl">
                        <v-row 
                        align="center"
                        justify="center">
                            <v-col md="12" sm="12" cols="12">
                                <span> <h1 class="white--text text-center"> Welcome, Malaysia </h1></span>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>

                <v-row
                style="padding-left: 10px"
                justify="start">
                    <v-col md="8" cols="12">
                        <v-card height="410" class="rounded-xl ml-4"  style="margin-top: 10px;">
                            <v-row>
                                <v-col md="12" cols="12">
                                    <v-card-title>
                                        <v-row>
                                            <v-col md="12" cols="12">
                                                <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                        <v-col md="4" cols="4">
                                            <v-img
                                                height="200"
                                                width="300"
                                                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                            ></v-img>
                                        </v-col>
                                        <v-col class="text-center d-flex align-center justify-center" md="8" cols="8">
                                        <v-card-text class="headline">
                                            Penyerahan Bantuan Kemanusiaan COVID-19
                                            <v-btn
                                                color="primary">
                                                    Lihat <v-icon>mdi-arrow-right</v-icon>
                                                </v-btn>
                                        </v-card-text>
                                            <!-- <v-card-actions class="center"> -->
                                                
                                            <!-- </v-card-actions> -->
                                        </v-col>
                                        </v-row>
                                    </v-card-title>
                                </v-col>
                            </v-row>
                            <!-- </v-row> -->
                        </v-card>
                    </v-col>

                    <v-col md="4">
                        <v-card width="400" elevation="0">
                            <v-row class="mt-n3">
                                <v-col md="12" cols="12">
                                    <v-card height="200" class="rounded-xl"  style="margin-top: 10px;">
                                        <v-row>
                                            <v-col md="12" cols="12">
                                                <v-card-title>
                                                    <!-- <v-row>
                                                        <v-col md="12" cols="12">
                                                            <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                                        </v-col>
                                                    </v-row> -->
                                                    <v-row>
                                                    <v-col md="4" cols="4">
                                                        <v-img
                                                            height="100"
                                                            width="200"
                                                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                                        ></v-img>
                                                    </v-col>
                                                    <v-col class="text-center d-flex align-center justify-center" md="8" cols="8">
                                                    <v-card-text class="text-subtitle-1">
                                                        Upacara Virtual Peringatan Hari Lahir Pancasila
                                                        <v-btn
                                                            color="primary">
                                                                Lihat <v-icon>mdi-arrow-right</v-icon>
                                                            </v-btn>
                                                    </v-card-text>
                                                        <!-- <v-card-actions class="center"> -->
                                                            
                                                        <!-- </v-card-actions> -->
                                                    </v-col>
                                                    </v-row>
                                                </v-card-title>
                                            </v-col>
                                        </v-row>
                                        <!-- </v-row> -->
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row class="mt-n6">
                                <v-col md="12" cols="12">
                                    <v-card height="200" class="rounded-xl"  style="margin-top: 10px;">
                                        <v-row>
                                            <v-col md="12" cols="12">
                                                <v-card-title>
                                                    <!-- <v-row>
                                                        <v-col md="12" cols="12">
                                                            <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                                        </v-col>
                                                    </v-row> -->
                                                    <v-row>
                                                        <v-col class="text-center d-flex align-center justify-center" md="8" cols="8">
                                                        <v-card-text class="text-subtitle-1">
                                                            Deklarasi Relawan Indonesia Bersatu Melawan COVID-19
                                                            <v-btn
                                                                color="primary">
                                                                    Lihat <v-icon>mdi-arrow-right</v-icon>
                                                                </v-btn>
                                                        </v-card-text>
                                                            <!-- <v-card-actions class="center"> -->
                                                                
                                                            <!-- </v-card-actions> -->
                                                        </v-col>
                                                        <v-col md="4" cols="4">
                                                            <v-img
                                                                height="100"
                                                                width="200"
                                                                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                                                            ></v-img>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-title>
                                            </v-col>
                                        </v-row>
                                        <!-- </v-row> -->
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from '@/components/Appbar-user.vue'

export default {
    components: {
                Appbar,
            },
    data() {
        return {
            
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