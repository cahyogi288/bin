<template>

<v-app>
    <!-- <v-main> -->
        <!-- <v-card style="width: 100%;"> -->
            <!-- <div > -->
                <div style="width: 100%; padding-top:10px; padding-bottom:118px" class="image">
                <v-row style="padding-top:80px">
                    <v-col  md="4" cols="12">

                        <v-col md="12" cols="12" class="d-flex align-center justify-center">
                            <v-avatar 
                            size="110">
                                <img
                                src="../assets/bin.png"
                                alt="BIN"
                                >
                            </v-avatar>
                        </v-col>

                        <v-col class="text-center" md="12" cols="12">
                            <v-text-field
                            label="Username"
                            prepend-icon="mdi-account">
                            </v-text-field>

                            <v-text-field
                            label="Password"
                            prepend-icon="mdi-lock">
                            </v-text-field>
                            <v-btn color="#FFF42E" style="padding-left:50px; padding-right: 50px" rounded>
                                Sign In
                            </v-btn>
                            <v-row>
                                <v-col md="6" cols="6">
                                    <v-checkbox                                                   
                                    label="Remember me"
                                    ></v-checkbox>
                                </v-col>
                                <v-col md="6" cols="6" class="d-flex align-center justify-center" >
                                    <v-btn text>
                                    Forgot Password?
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-col>

                    <!-- <v-col md="8" cols=12>
                        <v-img
                        src="../assets/peta.png"
                        
                        contain
                        class="grey darken-4"
                        ></v-img>
                    </v-col> -->
                </v-row>
                </div>
            <!-- </div> -->
        <!-- </v-card> -->
    <!-- </v-main> -->
</v-app>
</template>

<script>
export default {
    data() {
        return {
            image: '@/assets/peta.png',
        }
    },
    computed: {
        // image() {
        //     return {
        //         backgroundImage: `url${require('../assets/peta.png')}`
        //     } 
        // }
    },
}
</script>

<style scoped>
.image {
  background: url('../assets/image-peta.png') no-repeat center
}
</style>