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
                                <v-container>
                                    <!-- <v-row> -->
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Negara</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Negara..."> -->
                                                <!-- <VueTagInput v-model="tag_negara" @add="onAdd" ></VueTagInput> -->
                                                <v-select
                                                    v-model="tag_negara"
                                                    :items="item_tag_negara"
                                                    chips
                                                    label="Chips"
                                                    multiple
                                                    solo>

                                                </v-select>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Judul Informasi</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Judul Informasi...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Waktu Input</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Waktu Input...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Kategori</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Kategori...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Tag</label>
                                            </div>
                                            <div style="flex:3">
                                                <!-- <input type="text" class="in" placeholder="Tag..."> -->
                                                <input-tag v-model="tags"></input-tag>
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Foto</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="file" class="in" placeholder="Foto...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Deskripsi Foto</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Deskripsi Foto...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:30px;">
                                            <div style="flex:1">
                                                <label>Informasi</label>
                                            </div>
                                            <div style="flex:3">
                                                <div id="app">
                                                    <vue-editor v-model="content"></vue-editor>
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
                                </v-container>
                                <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn class="ma-2 white--text" small rounded color="#B2DFDB    "> <v-icon dark>mdi-plus</v-icon>Input</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn class="ma-6 white--text" color="#EEEEEE  " width="100">Reset</v-btn>
                                    <v-btn class="ma-2" color="accent" width="100">Submit</v-btn>
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
                                :items="desserts"
                                :search="search">
                                <template v-slot:item.foto="{ item }">
                                    <img :src="item.foto" style="width:50px; height:50px;">
                                    <!-- <img src="https://assets-a1.kompasiana.com/items/album/2019/07/21/spiderman-1-5d33e0760d823022ef6e0e19.jpg" style="width:50px; height:50px;"> -->
                                    <!-- <img :src="'/assets/img/' + item.name" style="width: 50px; height: 50px" /> -->
                                </template>

                                <template v-slot:item.aksi="{ item }">
                                    <v-btn class="ma-2" tile small color="yellow" icon title="edit">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2" tile small color="red" icon title="delete">
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                    <!-- <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
                                    <v-icon small @click="deleteItem(item)">delete</v-icon> -->
                                </template>
                            </v-data-table>
                        </div>
                        
                    </template>
                </v-card>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'
import Footer from '@/components/Footer.vue'
import { VueEditor } from "vue2-editor"
import VueTagInput from 'vue-tag-input'

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
            tag_negara: ['Indonesia', 'Malaysia', 'Thailand', 'Singapura'],
            item_tag_negara: ['Indonesia', 'Malaysia', 'Thailand', 'Singapura'],
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // },
            // tag_negara: [
            //     'Africa',
            //     'Taiwan'
            // ],
            content: "<h1>Some initial content</h1>",
            justify: [
                'start',
                'end',
                'center',
                'baseline',
                'auto',
                'stretch',
            ],  
            dialog: false,
            search  : '',
            headers : [
                // {
                //     text: "Images",
                //     align: "left",
                //     sortable: false,
                //     value: "name"
                // },
                { text: 'Judul', value: 'judul'},
                { text: 'Tanggal', value: 'tgl' },
                { text: 'Deskiprsi', value: 'deskripsi' },
                { text: 'Tag', value: 'tag' },
                { text: 'Kategori', value: 'kategori' },
                { text: 'Foto', value: 'foto' },
                { text: 'Caption', value: 'caption' },
                { text: 'Negara', value: 'negara' },
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
            tags:[],

        }
    },
    methods:{
        onAddition(tag) {
            this.tag_negara.push(tag)
        }
    }
    
}
</script>
