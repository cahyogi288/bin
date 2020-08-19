<template>
    <v-app>
        <!-- <Sidebar/> -->
    
        <v-main>
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

    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
    components: {
        Sidebar,
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