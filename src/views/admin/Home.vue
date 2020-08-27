<template>
    <v-app style="background-color: #E0E0E0">
        <Sidebar/>
        <Appbar />

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
                                        <v-card class="mt-12" elevation="">
                                            <v-card-title>
                                                <span class="text-body-2 mr-10"> <strong> Total User Aktif</strong></span>
                                                <v-spacer></v-spacer>
                                                <span class="text-body-2"> <strong> Total Informasi Saat Ini</strong></span>
                                            </v-card-title>
                                            <v-card-title>
                                                <span class="text-body-2 mr-8 ml-10"> <strong>193</strong></span>
                                                <!-- <v-spacer></v-spacer> -->
                                                <span style="margin-left:130px" class="text-body-2"> <strong>83</strong></span>
                                            </v-card-title>
                                            <v-divider :vertical="true"></v-divider>
                                        </v-card>
                                    </v-col>

                                    <v-col md="12" cols="12" class="">
                                        <v-card elevation="">
                                            <v-card-title class="justify-center align-center">
                                                <span class="text-body-2"> <strong> Total Informasi per Menu</strong></span>

                                            </v-card-title>
                                            <v-card-title>
                                                
                                            </v-card-title>
                                            <v-divider :vertical="true"></v-divider>
                                        </v-card>
                                    </v-col>
                                </v-card>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
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

<style scoped>
</style>