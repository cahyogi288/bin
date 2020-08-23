<template>
    <div>
        <v-app-bar
        color="white"
        dense
        elevation="0"
        >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title> -->

        <v-spacer></v-spacer>

        <v-btn text>
            Beranda
        </v-btn>

        <v-btn text>
            BDI
        </v-btn>

        <!-- <v-btn text @click="expand = !expand">
           Isu Bersama  <v-icon right>mdi-chevron-down</v-icon>
        </v-btn> -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                >
                Isu Bersama
                <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click=""
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- <v-btn text @click="expand = !expand">
           Laporan Bulanan <v-icon right>mdi-chevron-down</v-icon> 
        </v-btn> -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                >
                Laporan Bulanan
                <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items2"
                :key="index"
                @click=""
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu
        offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                icon
                v-bind="attrs"
                v-on="on">
                    <v-icon>mdi-account-outline</v-icon>
                </v-btn>
            </template>
            
            <v-list>
                <v-list-item
                v-for="n in listRight"
                :key="n"
                @click="() => {}">
                    <v-list-item-title>{{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
            
        </v-menu>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expand: false,
            listRight: ["Logout"],
            items: [
                { title: 'PWNI' },
                { title: 'Terorisme' },
                { title: 'Kejahatan Lintas Batas' },
                { title: 'Separatisme' },
            ],
            items2: [
                { title: '2017' },
                { title: '2018' },
                { title: '2019' },
                { title: '2020' },
            ],
        }
    },
}
</script>