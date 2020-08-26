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
                                    <v-btn icon color="grey" @click="dialog = false">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </div>
                                
                                <v-card-text>
                                <v-container>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Nama Lengkap</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Nama Lengkap...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>NIK Pegawai</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="NIK Pegawai...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Nama Pengguna</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Nama Pengguna...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Kata Sandi</label>
                                            </div>
                                            <div style="flex:3">
                                                <input type="text" class="in" placeholder="Kata Sandi...">
                                            </div>
                                        </div>
                                        <div style="display:flex; flex-direction:row; align-items:center; margin-bottom:20px;">
                                            <div style="flex:1">
                                                <label>Negara</label>
                                            </div>
                                            <div style="flex:3">
                                                <v-col class="d-flex" cols="12" sm="12">
                                                    <v-select
                                                        :items="items"
                                                        filled
                                                        label="negara"
                                                        dense>
                                                    </v-select>
                                                </v-col>
                                                <!-- <input type="text" class="in" placeholder="Negara..."> -->
                                            </div>
                                        </div>

                                </v-container>
                                <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="ma-6 white--text" color="#EEEEEE  " width="100">Reset</v-btn>
                                    <v-btn class="ma-2" color="accent" width="100">Submit</v-btn>
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
                        :headers="headers"
                        :items="desserts"
                        :search="search">
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

export default {
    components: {
        Sidebar,
        Appbar,
        Footer
    },
    data() {
        return {
            dialog: false,
            search: '',
            headers: [
            { text: 'Nama Pengguna', value: 'nama_pengguna' },
            { text: 'Kata Sandi', value: 'kata_sandi' },
            { text: 'Nama Lengkap', value: 'nama_lengkap' },
            { text: 'NIP', value: 'nip' },
            { text: 'Negara', value: 'negara' },
            { text: 'Aksi', value: 'aksi' },
            ],
            desserts: [
                {
                    nama_pengguna: 'Alinea',
                    kata_sandi: '*******',
                    nama_lengkap: 'Alinea Pratama',
                    nip: '98684987788',
                    negara: 'Malaysia'
                },
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
             items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
}
</script>