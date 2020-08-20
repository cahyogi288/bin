<template>
    <v-app style="background-color: #E0E0E0">
        <Sidebar/>
        <Appbar />

        <v-main style="margin-top: 10px;">
            <v-container fluid>
                <v-card>
                    <v-card-title>
                    Hak Akses
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    ></v-data-table>
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
            search: '',
            headers: [
            { text: 'Nama Pengguna', value: 'calories' },
            { text: 'Kata Sandi', value: 'fat' },
            { text: 'Nama Lengkao', value: 'carbs' },
            { text: 'NIP', value: 'protein' },
            { text: 'Negara', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 'Muhammad',
                    fat: 123456,
                    carbs: 'Muhammad',
                    protein: 654321,
                    iron: 'Indonesia',
                },
            ]
        }
    },
}
</script>