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
<template>
    <v-app style="background-color: #E0E0E0">
        <Sidebar/>
        <Appbar />

        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="info"
        centered
        top
        right
        >
        {{ textSnack }}

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
                                    Informasi
                                </v-btn>
                            </template>
                            <v-card>
                                <div style="display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
                                    <v-card-title>
                                        <span class="headline">Tambah Informasi</span>
                                    </v-card-title>
                                    <v-btn icon color="grey" @click="dialog = false">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </div>
                                
                                <v-card-text>
                                <v-container v-if="plusInput">
                                    <v-overlay :value="overlay">
                                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                                    </v-overlay>
                                    <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation> 
                                    <!-- <v-row> -->
                                        <div style="display:flex; flex-direction:row; align-items:center;">
                                            <div style="flex:1">
                                                <label>Negara</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Negara..."> -->
                                                <!-- <VueTagInput v-model="tag_negara" @add="onAdd" ></VueTagInput> -->
                                                <v-autocomplete
                                                v-model="tag_negara"
                                                :items="itemCountry"
                                                :rules="validForm.c"
                                                item-text="name"
                                                item-value="iso"
                                                filled
                                                placeholder="Negara"
                                                outlined
                                                chips
                                                multiple
                                                deletable-chips
                                                dense
                                                ></v-autocomplete>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center;">
                                            <div style="flex:1">
                                                <label>Judul Informasi</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Judul Informasi..."> -->
                                                <v-text-field required
                                                v-model="dataNew.heading"
                                                :rules="validForm.heading"
                                                background-color="#EEEEEE"
                                                label="Judul Informasi"
                                                outlined
                                                dense></v-text-field>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center;">
                                            <div style="flex:1">
                                                <label>Waktu Input</label>
                                            </div>
                                            <div style="flex:3">
                                                <v-menu required
                                                    ref="menu"
                                                    v-model="menu"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="dataNew.createdAt"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="290px"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field required
                                                        v-model="dataNew.createdAt"
                                                        :rules="validForm.createdAt"
                                                        placeholder="Waktu Input"
                                                        readonly
                                                        background-color="#EEEEEE"
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="dataNew.createdAt" no-title scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                                    <v-btn text color="primary" @click="$refs.menu.save(dataNew.createdAt)">OK</v-btn>
                                                    </v-date-picker>
                                                </v-menu>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center;">
                                            <div style="flex:1">
                                                <label>Kategori</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Kategori..."> -->
                                                <v-select
                                                v-model="dataNew.kategori"
                                                :rules="validForm.kategori"
                                                :items="kategoris"
                                                background-color="#EEEEEE"
                                                label="Kategori"
                                                outlined
                                                dense></v-select>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Tag</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Tag..."> -->
                                                <input-tag :rules="validForm.tags" required style="background-color: #EEEEEE;" v-model="tags"></input-tag>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Foto</label>
                                            </div>
                                            <div style="flex:3">
                                                <input required ref="file" type="file" @change="images" accept="image/*" class="in" placeholder="Foto...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center;">
                                            <div style="flex:1">
                                                <label>Deskripsi Foto</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Deskripsi Foto..."> -->
                                                <v-text-field required
                                                v-model="dataNew.caption"
                                                :rules="validForm.caption"
                                                background-color="#EEEEEE"
                                                label="Deskripsi Foto"
                                                outlined
                                                dense></v-text-field>
                                            </div>
                                        </div>
                                        <div v-for="(item, i) in multiUpl" :key="i" style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:3">
                                                <label>File Dokumen {{ i+1 }}</label>
                                            </div>
                                            <div style="flex:8;">
                                                <!-- :rules="validForm.fileDokumen" -->
                                                <input ref="file1" multiple="true"  type="file" @change="fileDokumen($event, i)" accept=".pdf" class="in" placeholder="File...">
                                            </div>
                                            <div v-if="i == 0" style="flex:1">
                                                <v-btn icon color="info" @click="addColumn">
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </div>
                                            <div v-if="i > 0" style="flex:1">
                                                <v-btn icon color="red" @click="removeColumn(item, i)">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:30px;">
                                            <div style="flex:1">
                                                <label>Informasi</label>
                                            </div>
                                            <div style="flex:3">
                                                <div id="app">
                                                    <vue-editor required v-model="dataNew.informasi"></vue-editor>
                                                </div>
                                                <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
                                                <!-- <input type="text" class="in" placeholder="Informasi..."> -->
                                            </div>
                                        </div>
                                        <!-- <v-col cols="12" sm="6" md="4">
                                            <label>Negara</label>
                                            <v-text-field label="Legal first name*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Email*" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field label="Password*" type="password" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-select
                                            :items="['0-17', '18-29', '30-54', '54+']"
                                            label="Age*"
                                            required
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Interests"
                                            multiple
                                            ></v-autocomplete>
                                        </v-col> -->
                                    <!-- </v-row> -->
                                    <small>*indicates required field</small>
                                    </v-form>
                                </v-container>
                                
                                </v-card-text>
                                <v-card-actions>
                                    <!-- <v-btn class="ma-2 white--text" small rounded color="#B2DFDB" @click="openInput"> <v-icon dark>mdi-plus</v-icon>Input</v-btn> -->
                                    
                                    <v-spacer></v-spacer>
                                    <!-- <v-btn class="ma-6 white--text" @click="reset" color="#EEEEEE  " width="100">Reset</v-btn> -->
                                    <v-btn class="ma-2" @click="newData" color="accent" width="100">Submit</v-btn>
                                    <!-- <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                    <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn> -->
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details>

                        </v-text-field>
                    </v-card-title>
                    <v-row>
                        <v-col>
                            
                        </v-col>
                    </v-row>
                    <template>
                        <div style="margin-left:50px; margin-right:50px;">
                            <v-data-table
                                :headers="headers"
                                :items="dataKonten"
                                :search="search">
                                <!-- <template v-slot:item.tags=" { item }">
                                    <span>{{ item.tags.name }}</span>
                                </template> -->
                                <template v-slot:item.foto="{ item }">
                                    <img :src="item.foto" style="width:50px; height:50px;">
                                    <!-- <img src="https://assets-a1.kompasiana.com/items/album/2019/07/21/spiderman-1-5d33e0760d823022ef6e0e19.jpg" style="width:50px; height:50px;"> -->
                                    <!-- <img :src="'/assets/img/' + item.name" style="width: 50px; height: 50px" /> -->
                                </template>

                                <template v-slot:item.aksi="{ item }">
                                    <v-btn class="ma-2" tile small color="yellow" @click="editdata(item)" icon title="edit">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2" tile small color="red" @click="actionDelete(item)" icon title="delete">
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2" @click="contentDetail(item)" tile small color="blue" text title="delete">
                                        Detail
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
                            <v-dialog v-model="dialogDetail" persistent max-width="810px" >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">Detail Content</span>
                                            <v-spacer />
                                            <v-btn icon color="grey" @click="closeDialogDetail()">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row>
                                                <v-col md="12" cols="12">
                                                    <v-row class="">
                                                        <v-col md="2" cols="3">
                                                            <label>Foto</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <img :src="dataDetail.foto" alt="" style="object-fit: cover; height:200px; width: 200px;">
                                                        </v-col>
                                                    </v-row>
                                                    <v-row class="">
                                                        <v-col md="2" cols="3">
                                                            <label>Deskripsi Foto</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <p>{{dataDetail.caption}}</p>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row class="">
                                                        <v-col md="2" cols="3">
                                                            <label>Negara</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <p v-for="(item, i) in dataDetail.country" :key="i">{{ item }}</p>
                                                        </v-col>
                                                    </v-row>
                                                    <v-row class="">
                                                        <v-col md="2" cols="3">
                                                            <label>Tags</label>
                                                        </v-col>
                                                        <v-col md="9" cols="9">
                                                            <p v-for="(item, i) in dataDetail.tags" :key="i">{{ item }}</p>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogEdit" persistent max-width="810px" >
                                    <v-card>
                                        <div style="display:flex; flex-direction:row; justify-content:space-between; align-items:center;">
                                            <v-card-title>
                                                <span class="headline">Edit Informasi</span>
                                            </v-card-title>
                                            <v-btn icon color="grey" @click="closeDialogEdit">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </div>
                                        
                                        <v-card-text>
                                        <v-container v-if="plusInput">
                                            <!-- <v-row> -->
                                            <v-form
                                            ref="formEdit"
                                            v-model="valid"
                                            lazy-validation>
                                                <div style="display:flex; flex-direction:row; align-items:center;">
                                                    <div style="flex:1">
                                                        <label>Negara</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <v-autocomplete
                                                        v-model="dataEdit.country"
                                                        :items="itemCountry"
                                                        :rules="validForm.c"
                                                        item-text="name"
                                                        item-value="iso"
                                                        filled
                                                        placeholder="Negara"
                                                        outlined
                                                        chips
                                                        multiple
                                                        deletable-chips
                                                        dense
                                                        ></v-autocomplete>
                                                        
                                                    </div>
                                                </div>
                                                <div style="display:flex; flex-direction:row; align-items:center;">
                                                    <div style="flex:1">
                                                        <label>Judul Informasi</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <v-text-field
                                                        v-model="dataEdit.heading"
                                                        :rules="validForm.heading"
                                                        background-color="#EEEEEE"
                                                        label="Judul Informasi"
                                                        outlined
                                                        dense></v-text-field>
                                                    </div>
                                                </div>
                                                <!-- <div style="display:flex; flex-direction:row; align-items:center;">
                                                    <div style="flex:1">
                                                        <label>Waktu Input</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <v-text-field
                                                        v-model="dataEdit.createdAt"
                                                        background-color="#EEEEEE"
                                                        label="Waktu Input"
                                                        outlined
                                                        dense></v-text-field>
                                                    </div>
                                                </div> -->
                                                <div style="display:flex; flex-direction:row; align-items:center;">
                                                    <div style="flex:1">
                                                        <label>Kategori</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <v-select
                                                        v-model="dataEdit.kategori"
                                                        :items="kategoris"
                                                        :rules="validForm.kategori"
                                                        background-color="#EEEEEE"
                                                        label="Kategori"
                                                        outlined
                                                        dense></v-select>
                                                    </div>
                                                </div>
                                                <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                                    <div style="flex:1">
                                                        <label>Tag</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <input-tag style="background-color: #EEEEEE;" v-model="dataEdit.tags"></input-tag>
                                                    </div>
                                                </div>
                                                <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                                    <div style="flex:1">
                                                        <label>Foto</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <input type="file" @change="imagesEdit" class="in" placeholder="Foto...">
                                                    </div>
                                                </div>
                                                <div style="display:flex; flex-direction:row; align-items:center;">
                                                    <div style="flex:1">
                                                        <label>Deskripsi Foto</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <v-text-field
                                                        v-model="dataEdit.caption"
                                                        :rules="validForm.caption"
                                                        background-color="#EEEEEE"
                                                        label="Deskripsi Foto"
                                                        outlined
                                                        dense></v-text-field>
                                                    </div>
                                                </div>
                                                <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:30px;">
                                                    <div style="flex:1">
                                                        <label>Informasi</label>
                                                    </div>
                                                    <div style="flex:3">
                                                        <div id="app">
                                                            <vue-editor v-model="dataEdit.informasi"></vue-editor>
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                                <small>*indicates required field</small>
                                            </v-form>
                                        </v-container>
                                        
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn class="ma-6 white--text" color="#EEEEEE"  @click="dialog = false" width="100">Close</v-btn> -->
                                            <v-btn class="ma-2" @click="updateData" color="accent" width="100">Edit</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                        </div>
                        
                    </template>
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
import { VueEditor } from "vue2-editor"
import VueTagInput from 'vue-tag-input'
import { ApiBin } from '@/api/base_api'

export default {
    components:{
        VueTagInput,
        Sidebar,
        Appbar,
        Footer,
        VueEditor
    },
    data(){
        return{
            tag_negara: [],
            itemCountry: [],
            kategoris: ['PWNI', 'Terorisme', 'Kejahatan Lintas Batas', 'Separatisme', 'BDI', 'Laporan Bulanan'],
            plusInput: true,
            menu: false,
            valid:true,
            overlay: false,
            dataKonten: [],
            content: "<h1>Some initial content</h1>",
            justify: [
                'start',
                'end',
                'center',
                'baseline',
                'auto',
                'stretch',
            ],
            multiUpl: [],
            dialog: false,
            dialogDetail: false,
            dialogEdit: false,
            dialogDelete: false,
            snackbar: false,
            timeout: 5000,
            textSnack: '',
            search  : '',
            headers : [
                // {
                //     text: "Images",
                //     align: "left",
                //     sortable: false,
                //     value: "name"
                // },
                { text: 'Judul', value: 'heading'},
                { text: 'Tanggal', value: 'createdAt' },
                // { text: 'Deskiprsi', value: 'informasi' },
                // { text: 'Tag', value: 'tags' },
                { text: 'Kategori', value: 'kategori' },
                // { text: 'Foto', value: 'foto' },
                // { text: 'Caption', value: 'caption' },
                // { text: 'Negara', value: 'negara' },
                { text: 'Aksi', value: 'aksi', sortable: false },
            ],
            desserts: [
                {
                    name      : '1',
                    judul     : 'Upacara virtual Hari Kelahiran Pancasila',
                    tgl       : '01/06/2020',
                    deskripsi : 'BIN Menyelenggarakan ...',
                    tag       : 'Pancasila, Sosial',
                    kategori  : 'BDI',
                    foto      : 'https://assets-a1.kompasiana.com/items/album/2019/07/21/spiderman-1-5d33e0760d823022ef6e0e19.jpg',
                    caption   : 'Upacara Virtual di Kesatrian Soetta',
                    negara    : 'Malaysia, Jepang, Thailand',
                    // aksi      : 'edit'
                },
            ],
            items: [],
            deleteById: '',
            tags:[],
            dataNew:{
                country:[],
                heading:"",
                createdAt:"",
                kategori:"",
                tags:[],
                foto:new FormData(),
                caption:"",
                informasi:"<h1>Some initial content</h1>",
            },
            validForm: {
                heading: [ v => !!v || 'Judul Informasi is required'],
                c: [ v => v.length >= 1 || 'Negara is required'],
                createdAt: [ v => !!v || 'Waktu Input is required'],
                kategori: [ v => !!v || 'Kategori is required'],
                tags: [ v => !!v || 'Tags is required'],
                foto: [ v => !!v || 'Foto is required'],
                caption: [ v => !!v || 'Caption is required'],
                informasi: [ v => !!v || 'Informasi is required'],
                fileDokumen: [ v => !!v || 'File Dokumen is required'],
            },
            dataInputEdit: new FormData(),
            dataInput: new FormData(),
            dataEdit:{
                id:"",
                country:[],
                heading:"",
                createdAt:"",
                kategori:"",
                tags:[],
                foto:"",
                caption:"",
                informasi:"",
            },
            // targetFilesEdit:'',
            dataUpdateFoto:false,
            dataDetail:{
                // id:"",
                // country:[],
                // heading:"",
                // createdAt:"",
                // kategori:"",
                // tags:[],
                // foto:"",
                // caption:"",
                // informasi:"",
            },
            // countryList:{
            //     data: []
            // },
            // tag:{
            //     listTag: []
            // },

        }
    },
    mounted () {
        this.getDataKonten();
        this.getCountry();
    },
    watch: {
        dialog(newValue, oldValue) {
            // console.log(newValue)
            if(newValue == false){
                if(this.$refs.file){
                this.$refs.file.value = null;
                }
                if(this.$refs.file1){
                    this.$refs.file1.value = null;
                }
                this.multiUpl = []
                this.tags = []
                this.tag_negara = []
                this.dataNew.informasi = '<h1>Some initial content</h1>'
                this.$refs.form.reset()
                this.dialog = false
            }else{
                this.multiUpl.push(
                    { fileDokumen: ''}
                )
            }
        }
    },
    methods:{
        removeForm(){
            this.tag_negara = []
            this.tags = []
            if(this.$refs.file){
                this.$refs.file.value = null;
            }
            if(this.$refs.file1){
                this.$refs.file1.value = null;
            }
            this.dataNew = {
                country:[],
                heading:"",
                createdAt:"",
                kategori:"",
                tags:[],
                foto:new FormData(),
                caption:"",
                informasi:"<h1>Some initial content</h1>",
            }
            this.dialog = false
        },
        newData(){
            const file = this.$refs.file.files[0];
            const file1 = this.$refs.file1;
            const lengthTags = this.tags.length
            var empty = 0
            this.$refs.file1.forEach((value, index)=> {
                if(value.files.length == 0){
                    empty = empty + 1
                }
            })
            if(!file || empty > 0){
                alert('Harap pilih file')
            }else{
                if(lengthTags < 1){
                    alert('Tags masih kosong')
                }else{
                    if(this.$refs.form.validate()){
                    // alert('masuk')
                    // this.dataNew.informasi.push(this.content)
                    // this.dataNew.country.push(this.tag_negara)
                    // this.dataNew.tags.push(this.tags)
                    // console.log(this.dataNew)
                        const tag = []

                            const countryS = []
                        this.tags.forEach((value, index) => {
                            // const obj ={ name : value}
                            // console.log("obj : " + obj)
                            // console.log("value : "+value)
                            // this.tag.listTag.push({name : value});
                            tag.push({name : value})
                        });
                        this.tag_negara.forEach((value, index) => {
                            // const obj ={ name : value}
                            // console.log("obj : " + obj)
                            // console.log("value : "+value)
                            // this.countryList.data.push({name : value});
                            countryS.push({name : value})
                        });
                        // $.each(this.tags, function(key, value) {
                        //     this.tag.listTag.push({name : key});
                        // });
                        // $.each(this.tag_negara, function(key, value) {
                        //     this.countryList.data.push({name : key});
                        // });
                        // console.log(this.tags)
                        // console.log(this.tag_negara)
                        // console.log( countryS)
                        // console.log( tag)
                        this.dataInput.append('country',JSON.stringify(countryS))
                        this.dataInput.append('heading', this.dataNew.heading)
                        this.dataInput.append('createdAt',this.dataNew.createdAt)
                        this.dataInput.append('kategori',this.dataNew.kategori)
                        this.dataInput.append('Alltag',JSON.stringify(tag))
                        this.dataInput.append('caption',this.dataNew.caption)
                        this.dataInput.append('informasi',this.dataNew.informasi)
                        this.dataInput.append('sub_heading','')
                        // console.log(this.dataInput)

                    // }
                    // console.log(this.dataNew)
                        ApiBin.post('Konten/create', this.dataInput).then( resp => {
                            console.log(resp)
                            let id_content = resp.data.data.id_konten
                            this.overlay = true
                            if(resp.data.status == 200){

                                let docs = []                              
                                
                                this.$refs.file1.forEach((value, index)=> {
                                    let multipleUpload = new FormData()
                                    console.log(value.files[0])
                                    multipleUpload.append('id_konten', id_content)
                                    multipleUpload.append('file', value.files[0])
                                    ApiBin.post('Konten/docinsert', multipleUpload)
                                    .then( response => {
                                        console.log(response)
                                        this.overlay = false
                                        this.getDataKonten()
                                        this.dialog = false
                                        this.textSnack = 'Data Berhasil ditambahkan'
                                        this.snackbar = true
                                    })
                                    // docs.push({ file: value.files[0] })
                                })
                                
                            }
                            // this.tag_negara = []
                            // this.tags = []
                            // this.$refs.file.value = null;
                            // this.$refs.file1.value = null;
                            // this.$refs.form.reset()                 
                            // this.dataInput= new FormData()
                            // this.dataNew.informasi = '<h1>Some initial content</h1>'
                            
                            // if(resp.data)
                        })
                    }
                }
            }
            
        },
        removeColumn(item, i) {
            var index = this.multiUpl.indexOf(item);
            // var index2 = this.$refs.file1.indexOf(item)
            console.log(index+ ' ' + i)
            if (index !== -1) {
                this.multiUpl.splice(index, 1);
                this.$refs.file1.splice(index, -1)
                this.$refs.file1[index].value = ''
            }
            console.log(this.$refs.file1)
        },
        addColumn(){
            this.multiUpl.push(
                {fileDokumen: ''}
            )
        },
        actionDelete(item){
            console.log(item)
            this.deleteById = item.id
            this.dialogDelete = true
        },
        deleteData(){
            ApiBin.get('Konten/delete?id=' + parseInt(this.deleteById)).then( resp => {
                console.log(resp)
                this.getDataKonten()
                this.dialogDelete = false
            })
        },
        updateData(){
            const lengthTags = this.dataEdit.tags.length

            if(lengthTags < 1){
                alert('Tags masih kosong')
            }else{
                if(this.$refs.formEdit.validate()){
                    // alert('masuk')
                    const tag = []
                    const countryS = []
                    this.dataEdit.tags.forEach((value, index) => {
                        tag.push({name : value})
                    });
                    this.dataEdit.country.forEach((value, index) => {
                        countryS.push({name : value})
                    });
                    
                    this.dataInputEdit.append('country',JSON.stringify(countryS))
                    this.dataInputEdit.append('heading', this.dataEdit.heading)
                    this.dataInputEdit.append('createdAt',this.dataEdit.createdAt)
                    this.dataInputEdit.append('kategori',this.dataEdit.kategori)
                    this.dataInputEdit.append('Alltag',JSON.stringify(tag))
                    this.dataInputEdit.append('caption',this.dataEdit.caption)
                    this.dataInputEdit.append('informasi',this.dataEdit.informasi)
                    this.dataInputEdit.append('sub_heading','')
                    this.dataInputEdit.append('id',this.dataEdit.id)
                    // this.dataInputEdit.append('updateFoto',this.dataUpdateFoto)
                    // this.dataUpdateFoto)
                    // this.dataInputEdit.append('foto','')

                    // console.log(this.dataInputEdit)

                    let apiUpdateData = 'Konten/updateWithoutFoto'
                    if(this.dataUpdateFoto == true){
                        apiUpdateData ='Konten/upload'
                    }
                    ApiBin.post(apiUpdateData, this.dataInputEdit).then( resp => {
                        console.log(resp)
                        this.getDataKonten()
                        this.dialogEdit = false
                        this.dataEdit={
                            id:"",
                            country:[],
                            heading:"",
                            createdAt:"",
                            kategori:"",
                            tags:[],
                            foto:"",
                            caption:"",
                            informasi:"",
                        }
                        this.dataInputEdit = new FormData()
                        this.dataUpdateFoto = false;
                        this.textSnack = 'Data Berhasil diupdate'
                        this.snackbar = true
                    })
                }
            }
           
        },
        editdata(item) {
            if(item.tags != null){
                item.tags.forEach((value, index) => {
                    this.dataEdit.tags.push(value.name)
                });
            }
            // console.log(item)
            this.dataEdit.id = item.id
            this.dataEdit.country = item.country
            this.dataEdit.caption = item.caption
            this.dataEdit.foto = item.foto
            // this.dataEdit.tags = item.tags
            this.dataEdit.kategori = item.kategori
            this.dataEdit.createdAt = item.createdAt
            this.dataEdit.heading = item.heading
            this.dataEdit.informasi = item.informasi

            this.dialogEdit = true
            console.log(this.dataEdit)
            // console.log(item.country)
        },
        onAddition(tag) {
            this.tag_negara.push(tag)
        },
        openInput(){
            if(this.plusInput == false){
                this.plusInput = true
            }else{
                this.plusInput = false
            }
        },
        closeDialogEdit(){
            this.dialogEdit = false
            this.dataEdit = {
                    id:"",
                    country:[],
                    heading:"",
                    createdAt:"",
                    kategori:"",
                    tags:[],
                    foto:"",
                    caption:"",
                    informasi:"",
                }
        },
        closeDialogDetail(){
            this.dialogDetail = false;
            this.dataDetail = {};
        },
        reset() {
            this.tags = []
            this.dataInput= new FormData()
            this.$refs.form.reset()
            this.dataNew ={
                    country:[],
                    heading:"",
                    createdAt:"",
                    kategori:"",
                    tags:[],
                    foto:new FormData(),
                    caption:"",
                    informasi:"<h1>Some initial content</h1>",
                }
        },
        contentDetail(item){
            this.dataDetail.foto = 'http://api.dolphinesia.com/uploads/'+item.foto
            this.dataDetail.tags = []
            if(item.tags != null){
                item.tags.forEach((value, index) => {
                    this.dataDetail.tags.push(value.name)
                });
            }
            this.dataDetail.country = []
            item.country.forEach((value, index) => {
                    this.dataDetail.country.push(value.name)
            });
            this.dataDetail.caption = item.caption
            console.log(this.dataDetail)
            this.dialogDetail = true
        },
        getDataKonten(){
            ApiBin.get('Konten/getAll').then( resp => {
                console.log(resp.data)
                this.dataKonten = resp.data.data
            })
        },
        getCountry(){
            ApiBin.get('Country/getCountry').then( resp => {
                console.log(resp.data)
                this.itemCountry = resp.data.data
            })
        },
        images(event) {
            console.log(event.target.files[0]);
            this.dataInput.append('foto',event.target.files[0])
        },
        fileDokumen(event, i) {
            // console.log(event)
            console.log(this.$refs.file1)
            // let file = event.target.files

            // console.log(event.target.files[0]);
            // this.dataInput.append('doc',event.target.files[0])
        },
        imagesEdit(event) {
            // console.log(event.target.files[0]);
            // this.targetFilesEdit = event.target.files[0];
            this.dataInputEdit.append('foto',event.target.files[0])
            this.dataUpdateFoto = true;
        }
    }
    
}
</script>

<style>
span .vue-input-tag-wrapper .input-tag {
    background-color: #e0e0e0;
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    color: #000000;
}

span .vue-input-tag-wrapper .input-tag .remove {
    color: #a7a9a4;
}
</style>