<template>
    <v-app style="background-color: #E0E0E0">
        <!-- <Sidebar/>
        <Appbar /> -->
        <!-- <template>
            <v-breadcrumbs :items="items">
                <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                    :href="item.href"
                    :disabled="item.disabled"
                >
                    {{ item.text.toUpperCase() }}
                </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </template> -->
        <!-- <template>
            <v-app style="backround-color:#E0E0E0;"></v-app>
        </template> -->

        <v-main style="margin-top: 10px;">
            <v-container fluid>

                <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                color="info"
                centered
                top
                right
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

                <v-card>
                    <v-card-title>
                        <v-dialog v-model="dialog" persistent max-width="810px" >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn 
                                    rounded 
                                    color="#FFF42E" 
                                    class="ma-2 white--text"
                                    v-bind="attrs"
                                    v-on="on">
                                    <v-icon>mdi-plus</v-icon>
                                    Akun
                                </v-btn>
                            </template>
                            <v-card>
                                <div style="display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
                                    <v-card-title>
                                        <span class="headline">Tambah Akun</span>
                                    </v-card-title>
                                    <v-btn icon color="grey" @click="closeDialogNew">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </div>
                                
                                <v-card-text>
                                <v-container>
                                    <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation> 
                                    <!-- <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;"> -->
                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Nama Lengkap</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                    <!-- <input type="text" class="in" placeholder="Nama Lengkap..."> -->
                                                <v-text-field
                                                v-model="dataNew.nama"
                                                :rules="validForm.naleng"
                                                background-color="#EEEEEE"
                                                placeholder="Nama Lengkap"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>NIK Pegawai</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataNew.nik"
                                                :rules="validForm.nik"
                                                background-color="#EEEEEE"
                                                placeholder="NIK Pegawai"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                    <!-- </div> -->
                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Email</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataNew.email"
                                                :rules="validForm.emailRules"
                                                background-color="#EEEEEE"
                                                placeholder="Email"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Nama Pengguna</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataNew.username"
                                                :rules="validForm.napeng"
                                                background-color="#EEEEEE"
                                                placeholder="Nama Pengguna"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Kata Sandi</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataNew.password"
                                                :rules="[...validForm.sandi, ...validForm.minSandi]"
                                                min="8"
                                                background-color="#EEEEEE"
                                                placeholder="Kata Sandi"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                    <!-- <div style="display:flex; flex-direction:row; margin-bottom:20px;"> -->
                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Negara</label>
                                            </v-col>
                                        <!-- <div style="flex:3"> -->
                                            <v-col cols="9" sm="9">
                                                <v-autocomplete
                                                v-model="dataNew.negara"
                                                :items="itemCountry"
                                                :rules="validForm.negara"
                                                item-text="name"
                                                item-value="iso"
                                                filled
                                                placeholder="Negara"
                                                outlined
                                                dense
                                                ></v-autocomplete>
                                            </v-col>
                                            <!-- <input type="text" class="in" placeholder="Negara..."> -->
                                        </v-row>

                                        <v-row>
                                            <v-col md="3" cols="3">
                                                <label>Status</label>
                                            </v-col>
                                        <!-- <div style="flex:3"> -->
                                            <v-col cols="9" sm="9">
                                                <v-select
                                                v-model="dataNew.status"
                                                :rules="validForm.status"
                                                :items="itemsStatus"
                                                filled
                                                placeholder="Status"
                                                outlined
                                                dense>
                                                </v-select>
                                            </v-col>
                                            <!-- <input type="text" class="in" placeholder="Negara..."> -->
                                        </v-row>
                                    </v-form>
                                </v-container>
                                <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="reset" class="white--text" color="#EEEEEE  " >Reset</v-btn>
                                    <v-btn class="" @click="newData" color="accent" >Submit</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    <!-- Hak Akses -->
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details>

                        </v-text-field>
                    </v-card-title>
                    <v-data-table
                    ref="table"
                    :headers="headers"
                    :items="dataUser"
                    :items-per-page-options="[10, 25, 50, 100]"
                    :search="search">
                        <template v-slot:item.password="{ item }">
                            <span>******</span>
                        </template>
                        <template v-slot:item.aksi="{ item }">
                            <v-btn class="mr-1" tile small color="yellow" @click="editdata(item)" icon title="edit">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn class="mr-1" tile small color="red" @click="actionDelete(item)" icon title="delete">
                                <v-icon>mdi-trash-can-outline</v-icon>
                            </v-btn>
                            <!-- <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
                            <v-icon small @click="deleteItem(item)">delete</v-icon> -->
                        </template>

                    </v-data-table>
                    <v-dialog v-model="dialogDelete" persistent max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span >Apakah Anda Yakin ingin Menghapus Data ini?</span>
                                <v-spacer />
                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="" color="#EEEEEE" @click="dialogDelete = false">No</v-btn>
                                <v-btn class="" @click="deleteData" color="accent">Yes</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogEdit" persistent max-width="800px" >
                        <v-card>
                            <v-tabs
                            v-model="tab"
                            >
                            <v-tabs-slider></v-tabs-slider>
                            <v-tab> 
                                Edit Data
                            </v-tab>
                                <v-tab-item>
                                    <v-card-text>
                                        <!-- <v-card-title>
                                            <span class="headline">Edit Akun</span>
                                            <v-spacer />
                                            <v-btn icon color="grey" @click="dialogEdit = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </v-card-title> -->
                                        
                                        <v-card-text>
                                            <v-form 
                                            ref="formEdit"
                                            v-model="valid"
                                            lazy-validation>
                                            <v-row>
                                                <v-col md="12" cols="12">
                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>Nama Pengguna</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <v-text-field
                                                            v-model="dataEdit.username"
                                                            :rules="validForm.napeng"
                                                            background-color="#EEEEEE"
                                                            placeholder="Nama Pengguna"
                                                            outlined
                                                            dense></v-text-field>
                                                        </v-col>
                                                    </v-row>

                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>Nama Lengkap</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <v-text-field
                                                            v-model="dataEdit.nama"
                                                            :rules="validForm.naleng"
                                                            background-color="#EEEEEE"
                                                            placeholder="Nama Lengkap"
                                                            outlined
                                                            dense></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>Email</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <v-text-field
                                                            v-model="dataEdit.email"
                                                            :rules="validFormEdit.emailRules"
                                                            background-color="#EEEEEE"
                                                            placeholder="Email"
                                                            outlined
                                                            dense></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>NIK</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <v-text-field
                                                            v-model="dataEdit.nik"
                                                            :rules="validForm.nik"
                                                            background-color="#EEEEEE"
                                                            placeholder="NIK"
                                                            outlined
                                                            dense></v-text-field>
                                                        </v-col>
                                                    </v-row>

                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>Negara</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">

                                                            <v-autocomplete
                                                            v-model="dataEdit.negara"
                                                            :items="itemCountry"
                                                            :rules="validForm.negara"
                                                            item-text="name"
                                                            item-value="iso"
                                                            filled
                                                            placeholder="Negara"
                                                            outlined
                                                            dense
                                                            ></v-autocomplete>
                                                            <!-- <v-select
                                                                v-model="dataEdit.negara"
                                                                :items="items"
                                                                filled
                                                                placeholder="Negara"
                                                                outlined
                                                                dense>
                                                                </v-select> -->
                                                        </v-col>
                                                    </v-row>

                                                    <v-row class="mb-n5">
                                                        <v-col md="3" cols="3">
                                                            <label>Status</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <v-select
                                                            v-model="dataEdit.status"
                                                            :items="itemsStatus"
                                                            :rules="validForm.status"
                                                            filled
                                                            placeholder="Status"
                                                            outlined
                                                            dense>
                                                            </v-select>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                            </v-form>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialogEdit = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text @click="updateData">Save</v-btn>
                                        </v-card-actions>
                                    </v-card-text>
                                </v-tab-item>

                                <v-tab> 
                                    Edit Password
                                </v-tab>
                                <v-tab-item>
                                    <v-card-text>
                                        <v-form
                                        ref="formPw"
                                        lazy-validation>
                                        <v-card-text>
                                            <v-row>
                                                <v-col md="12" cols="12">
                                                    <v-row class="mb-n5">
                                                        <!-- <v-form
                                                        ref="formPw"
                                                        lazy-validation> -->
                                                            <v-col md="2" cols="2">
                                                                <label>Password</label>
                                                            </v-col>
                                                            <v-col md="8" cols="8">
                                                                <v-text-field
                                                                v-model="password"
                                                                :rules="[...validForm.minSandi, ...validForm.sandi]"
                                                                background-color="#EEEEEE"
                                                                placeholder="New Password"
                                                                outlined
                                                                dense></v-text-field>
                                                            </v-col>
                                                        <!-- </v-form> -->
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        </v-form>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialogEdit = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text @click="updatePw">Update</v-btn>
                                        </v-card-actions>
                                    </v-card-text>
                                </v-tab-item>
                                <v-spacer />
                                <v-btn icon color="grey" @click="dialogEdit = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-tabs>
                        </v-card>
                    </v-dialog>
                </v-card>
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
            dialog: false,
            dialogEdit: false,
            dialogDelete: false,
            valid: true,
            password: '',
            tab: '',
            search: '',
            dataUser: [],
            itemCountry: [],
            options: {},
            deleteById: '',
            snackbar: false,
            text: '',
            timeout: 5000,
            dataNew: {
                nama: '',
                nik: '',
                username: '',
                password: '',
                negara: '',
                status: '',
                email:''
            },
            dataEdit: {
                id: '',
                nama: '',
                username: '',
                nik: '',
                negara: '',
                status: '',
                email:''
            },
            headers: [
                { text: 'Nama Pengguna', value: 'username' },
                { text: 'Kata Sandi', value: 'password' },
                { text: 'Email', value: 'email' },
                { text: 'Nama Lengkap', value: 'nama' },
                { text: 'NIP', value: 'nik' },
                { text: 'Negara', value: 'negara' },
                { text: 'Status', value: 'status'},
                { text: 'Aksi', value: 'aksi', sortable: false },
            ],
            validForm: {
                naleng: [ v => !!v || 'Nama Lengkap is required'],
                nik: [ v => !!v || 'NIK is required'],
                napeng: [ v => !!v || 'Nama Pengguna is required'],
                sandi: [ v => !!v || 'Kata Sandi is required'],
                minSandi: [v => (v || '').length >= 8 || 'minimal sandi 8 karakter'],
                negara: [ v => !!v || 'Negara is required'],
                status: [ v => !!v || 'Status is required'],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            },
            validFormEdit:{
                emailRules: [
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            },
            // items: [
            //     {
            //     text: 'Dashboard',
            //     disabled: false,
            //     href: 'breadcrumbs_dashboard',
            //     },
            //     {
            //     text: 'Link 1',
            //     disabled: false,
            //     href: 'breadcrumbs_link_1',
            //     },
            //     {
            //     text: 'Link 2',
            //     disabled: true,
            //     href: 'breadcrumbs_link_2',
            //     },
            // ],
            itemsStatus: ['ADMIN','PEGAWAI'],
             items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    watch: {
        dialogEdit(newValue, oldValue) {
            if(newValue == false){
                this.password = ''
                this.$refs.formEdit.reset()
            }
        },
    },
    mounted () {
        // this.getAllUser();
    },
    created () {
        this.getAllUser();
        this.getCountry();
    },
    methods: {
        reset() {
            this.$refs.form.reset()
        },
        closeDialogNew(){
            this.dialog = false
            this.$refs.form.reset()
        },
        newData(){
            if(this.$refs.form.validate()){
                ApiBin.post('User/insertUser', this.dataNew).then( resp => {
                    // console.log(resp)
                    this.getAllUser()
                    this.$refs.form.reset()
                    this.dialog = false
                    this.text = 'Data Berhasil ditambahkan'
                    this.snackbar = true
                // if(resp.data)
                    this.dataNew= {
                        nama: '',
                        nik: '',
                        username: '',
                        password: '',
                        negara: '',
                        status: '',
                        email:''
                    }
                })
            }else{
                console.log('gamasuk')
            }

        },
        getAllUser() {
            ApiBin.get('User/getUser').then( resp => {
                // console.log(resp.data.data)
                this.dataUser = resp.data.data
            })
        },
        editdata(item) {
            console.log(item)
            this.dataEdit.id = item.id
            this.dataEdit.username = item.username
            this.dataEdit.nama = item.nama
            this.dataEdit.nik = item.nik
            this.dataEdit.negara = item.negara
            this.dataEdit.status = item.status
            this.dataEdit.email = item.email

            this.dialogEdit = true
        },
        updateData(){
            if(this.$refs.formEdit.validate()){
                ApiBin.post('User/updateUser', this.dataEdit).then( resp => {
                    // console.log(resp)
                    this.getAllUser()
                    this.dialogEdit = false
                    this.text = 'Data Berhasil diubah'
                    this.snackbar = true
                })
            }else{
                console.log('gamasuk')
            }
        },
        updatePw(){
            if(this.$refs.formPw.validate()){
                let data = {
                    id: this.dataEdit.id,
                    password: this.password
                }
                ApiBin.post('User/editPass', data).then( resp => {
                    // console.log(resp.data)
                    if(resp.data.data == true){
                        this.text = 'Password Telah diubah'
                        this.snackbar = true
                        this.dialogEdit = false
                    }
                    
                    // this.text = 
                })
                // console.log(this.dataEdit.id + ' ' + this.password)
                
            }
        },
        actionDelete(item){
            console.log(item)
            this.deleteById = item.id
            this.dialogDelete = true
        },
        deleteData(){
            ApiBin.get('User/deleteUser?id=' + parseInt(this.deleteById)).then( resp => {
                // console.log(resp)
                this.getAllUser()
                this.dialogDelete = false
            })
        },
        getCountry(){
            ApiBin.get('Country/getCountry').then( resp => {
                // console.log(resp.data)
                this.itemCountry = resp.data.data
            })
        }
    },
}
</script>

<style scoped>
    .in{
        
  width: 100%;
  /* padding: 12px 20px; */
  /* margin: 8px 0; */
  /* height: 20px; */
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: rgb(231,234,238);
    }
</style>