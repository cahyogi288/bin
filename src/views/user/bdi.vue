<template>
    <v-app>
        <Appbar />

        <v-main>
            <v-container fluid>
                <v-card 
                class="px-auto rounded-xl"
                elevation="0">
                    <div class="berandapeta rounded-xl">
                        <v-row 
                        align="center"
                        justify="center">
                            <v-col md="12" sm="12" cols="12">
                                <span> <h1 class="white--text text-center"> BDI </h1></span>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>

                <v-row style="padding-left: 10px">
                    <v-col md="8" cols=12>
                        <v-card class="grey lighten-4 ml-4">
                            <v-row>
                                <v-col md="12" cols="12">
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
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col md="4" cols="4">
                        <v-card elevation="0">
                            <v-col md="12" cols="12">
                                <v-card height="100" width="390" class="grey lighten-4">
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
                            <v-card class="grey lighten-4" width="390" elevation="0">
                                <v-col md="12" cols="12">
                                    <span class="text-subtitle-1"><strong>Kategori</strong></span>
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

export default {
    components: {
        Appbar,
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