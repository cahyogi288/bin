<template>

<v-app>
    <!-- <v-main> -->
        <!-- <v-card style="width: 100%;"> -->
            <!-- <div > -->
                <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                color="error"
                centered
                top
                left
                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
                <div style="display: flex;  flex:1;" class="image">
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
                                <v-alert 
                                v-if="showAlert"
                                dense
                                dismissible
                                type="warning">
                                {{ alert }}
                                </v-alert>
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
                                    @keyup.enter.native="onLogin"
                                    prepend-icon="mdi-lock">
                                    </v-text-field>
                                    <v-btn 
                                    class="black--text" 
                                    color="rgb(255, 221, 0)" 
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
                                        <v-col @click="dialogForgot = true" md="6" sm="12" cols="6" class="d-flex align-center justify-center" >
                                            <v-btn text>
                                            Forgot Password?
                                            </v-btn>
                                        </v-col>
                                        <v-dialog v-model="dialogForgot" max-width="500px">
                                            <v-card>
                                                <v-card-title>
                                                    <span class="headline">Forgot Password</span>
                                                    <v-spacer />
                                                    <v-btn icon color="grey" @click="dialogForgot = false">
                                                        <v-icon>mdi-close</v-icon>
                                                    </v-btn>
                                                </v-card-title>

                                                <v-card-text>
                                                    <v-form
                                                    ref="form1"
                                                    lazy-validation>
                                                    <v-row>
                                                        <v-col md="12" cols="12">
                                                            <v-row class="mb-n5">
                                                                <!-- <v-col md="2" cols="3">
                                                                    <label>Email</label>
                                                                </v-col> -->
                                                                <v-col md="12" cols="9">
                                                                    <v-text-field
                                                                    v-model="username"
                                                                    :rules="usernameRules"
                                                                    background-color="#EEEEEE"
                                                                    label="Your Username"
                                                                    outlined
                                                                    dense></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </v-col>
                                                    </v-row>
                                                    </v-form>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="dialogForgot = false">Close</v-btn>
                                                    <v-btn color="blue darken-1" text @click="sendEmail">Send</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-row>
                                </v-form>
                            </v-col>
                        </v-col>
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
            username: '',
            show1: false,
            valid: true,
            alert: '',
            showAlert: false,
            dialogForgot: false,
            snackbar: false,
            text: '',
            timeout: 5000,
            rules: {
                required: value => !!value || 'Password is Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
                emailRules: [
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            },
            usernameRules: [
                v => !!v || 'Username is required',
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
    watch: {
        dialogForgot(newValue, oldValue) {
            if(newValue == false){
                this.email = ''
                this.$refs.form1.reset()
            }
        }
    },
    methods: {
        onLogin() {
            if(this.$refs.form.validate()){
                ApiBin.post('Auth/login', this.formLogin).then( resp => {
                    console.log(resp.data)
                    if(resp.data.error == false){
                        let res = resp.data.data
                        let token = res.token
                        let descUser = []
                        descUser.push({
                            nim: res.nik,
                            status: res.status,
                            username: res.username,
                            countryId: res.negara,
                            countryName: res.countryName
                            })
                        localStorage.setItem('descUser', JSON.stringify(descUser))
                        localStorage.setItem('token',token)
                        // console.log(descUser)
                        
                        if(descUser[0].status == 'PEGAWAI'){
                            // console.log(descUser)
                            this.$router.replace({ path: '/beranda' })
                        }else if(descUser[0].status == 'ADMIN'){
                            this.$router.replace({ path: '/home' })
                        }
                    }else{
                        this.text = resp.data.message
                        this.snackbar = true
                    }                

                })
            }            
        },
        sendEmail(){
            if(this.$refs.form1.validate()){
                let data = {
                    username: this.username
                }
                ApiBin.post('User/resetPass', data).then( resp => {
                    console.log(resp.data)
                    this.dialogForgot = false
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