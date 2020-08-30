<template>
    <v-app style="background-color: #E0E0E0">
        <Sidebar/>
        <Appbar />
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
                                                background-color="#EEEEEE"
                                                placeholder="NIK Pegawai"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                    <!-- </div> -->
                                        <v-row class="mb-n5">
                                            <v-col md="3" cols="3">
                                                <label>Nama Pengguna</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataNew.username"
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
                                                <v-select
                                                v-model="dataNew.negara"
                                                :items="itemCountry"
                                                item-text="name"
                                                item-value="iso"
                                                filled
                                                placeholder="Negara"
                                                outlined
                                                dense>
                                                </v-select>
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
                            <v-card-title>
                                <span class="headline">Edit Akun</span>
                                <v-spacer />
                                <v-btn icon color="grey" @click="dialogEdit = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            
                            <v-card-text>
                                <v-row>
                                    <v-col md="12" cols="12">
                                        <v-row class="mb-n5">
                                            <v-col md="2" cols="3">
                                                <label>Nama Pengguna</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataEdit.username"
                                                background-color="#EEEEEE"
                                                placeholder="Nama Pengguna"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mb-n5">
                                            <v-col md="2" cols="3">
                                                <label>Nama Lengkap</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataEdit.nama"
                                                background-color="#EEEEEE"
                                                placeholder="Nama Lengkap"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mb-n5">
                                            <v-col md="2" cols="3">
                                                <label>NIK</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-text-field
                                                v-model="dataEdit.nik"
                                                background-color="#EEEEEE"
                                                placeholder="NIK"
                                                outlined
                                                dense></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row class="mb-n5">
                                            <v-col md="2" cols="3">
                                                <label>Negara</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-select
                                                v-model="dataEdit.negara"
                                                :items="itemCountry"
                                                item-text="name"
                                                item-value="iso"
                                                filled
                                                placeholder="Negara"
                                                outlined
                                                dense>
                                                </v-select>
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
                                            <v-col md="2" cols="3">
                                                <label>Status</label>
                                            </v-col>
                                            <v-col md="9" cols="9">
                                                <v-select
                                                v-model="dataEdit.status"
                                                :items="itemsStatus"
                                                filled
                                                placeholder="Status"
                                                outlined
                                                dense>
                                                </v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialogEdit = false">Close</v-btn>
                                <v-btn color="blue darken-1" text @click="updateData">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-container>
        </v-main>

        <Footer />
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
            search: '',
            dataUser: [],
            itemCountry: [],
            options: {},
            deleteById: '',
            dataNew: {
                nama: '',
                nik: '',
                username: '',
                password: '',
                negara: '',
                status: ''
            },
            dataEdit: {
                id: '',
                nama: '',
                username: '',
                nik: '',
                negara: '',
                status: ''
            },
            headers: [
                { text: 'Nama Pengguna', value: 'username' },
                { text: 'Kata Sandi', value: 'password' },
                { text: 'Nama Lengkap', value: 'nama' },
                { text: 'NIP', value: 'nik' },
                { text: 'Negara', value: 'negara' },
                { text: 'Status', value: 'status'},
                { text: 'Aksi', value: 'aksi', sortable: false },
            ],
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
            // if(this.$refs.form.validate()){

            // }
            // console.log(this.dataNew)
            ApiBin.post('User/insertUser', this.dataNew).then( resp => {
                console.log(resp)
                this.getAllUser()
                this.$refs.form.reset()
                this.dialog = false
                // if(resp.data)
            })
        },
        getAllUser() {
            ApiBin.get('User/getUser').then( resp => {
                console.log(resp.data.data)
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

            this.dialogEdit = true
        },
        updateData(){
            ApiBin.post('User/updateUser', this.dataEdit).then( resp => {
                console.log(resp)
                this.getAllUser()
                this.dialogEdit = false
            })
        },
        actionDelete(item){
            console.log(item)
            this.deleteById = item.id
            this.dialogDelete = true
        },
        deleteData(){
            ApiBin.get('User/deleteUser?id=' + parseInt(this.deleteById)).then( resp => {
                console.log(resp)
                this.getAllUser()
                this.dialogDelete = false
            })
        },
        getCountry(){
            ApiBin.get('Country/getCountry').then( resp => {
                console.log(resp.data)
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