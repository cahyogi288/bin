<template>

<v-app>
    <!-- <v-main> -->
        <!-- <v-card style="width: 100%;"> -->
            <!-- <div > -->
                <div style="width: 100%; padding-top:10px; padding-bottom:118px" class="image">
                    <v-row style="padding-top:80px">
                        <v-col  md="4" sm="4" cols="12">

                            <v-col md="12" cols="12" class="d-flex align-center justify-center">
                                <v-avatar 
                                size="110">
                                    <img
                                    src="../assets/bin.png"
                                    alt="BIN"
                                    >
                                </v-avatar>
                            </v-col>

                            <v-col class="text-center" md="12" sm="12" xs="12" cols="12">
                                <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation>
                                    <v-text-field
                                    v-model="formLogin.username"
                                    label="Username"
                                    prepend-icon="mdi-account"
                                    :rules="usernameRules"
                                    >
                                    </v-text-field>

                                    <v-text-field
                                    v-model="formLogin.password"
                                    label="Password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    counter
                                    prepend-icon="mdi-lock">
                                    </v-text-field>
                                    <v-btn 
                                    class="white--text" 
                                    color="#FFF42E" 
                                    style="padding-left:50px; padding-right: 50px"
                                    @click="onLogin" 
                                    rounded>
                                        Sign In
                                    </v-btn>
                                    <v-row>
                                        <v-col md="6" sm="12" cols="6">
                                            <v-checkbox                                                   
                                            label="Remember me"
                                            ></v-checkbox>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="6" class="d-flex align-center justify-center" >
                                            <v-btn text>
                                            Forgot Password?
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
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
import { ApiBin } from '@/api/base_api'

export default {
    data() {
        return {
            formLogin: {
                username: '',
                password: ''
            },
            show1: false,
            valid: true,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 5 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            usernameRules: [
                v => !!v || 'Name is required',
                // v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
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
    methods: {
        onLogin() {
            if(this.$refs.form.validate()){
                ApiBin.post('Auth/login', this.formLogin).then( resp => {
                    console.log(resp.data.data)
                    if(resp.data.error == false){
                        let res = resp.data.data
                        let descUser = []
                        descUser.push({
                            nim: res.nik,
                            status: res.status,
                            username: res.username
                            })
                        localStorage.setItem('descUser', descUser)
                        // console.log(descUser)
                        
                        if(descUser[0].status == 'PEGAWAI'){
                            this.$router.replace({ path: '/beranda' })
                        }else if(descUser[0].status == 'ADMIN'){
                            this.$router.replace({ path: '/' })
                        }
                    }                 

                })
            }
            
        }
    },
}
</script>

<style scoped>
.image {
  background: url('../assets/image-peta.png') no-repeat center
}
</style>