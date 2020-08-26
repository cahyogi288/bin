<template>
    <!-- <v-app 
    style="background-color: #ECEFF1"> -->
        <!-- <v-card
        > -->
            <v-navigation-drawer      
            app
            color="#E57373"
            permanent
            width="230">
                <v-row class="fill-height" no-gutters>
                    <v-navigation-drawer
                    mini-variant
                    mini-variant-width="56"
                    color="#FF5252"
                    permanent>
                        <v-list
                        dense
                        nav>
                            <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link>
                                <v-list-item-action>
                                    <v-icon class="white--text">{{ item.icon }}</v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer> 

                        <v-list class="grow">
                            <v-list-item
                            v-for="link in links"
                            :key="link"
                            link>
                            <v-list-item-title class="white--text" v-text="link"></v-list-item-title>
                        </v-list-item>
                        </v-list>
                </v-row>

            </v-navigation-drawer>

            
        <!-- </v-card> -->
    <!-- </v-app> -->
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
            { title: 'Beranda', icon: 'mdi-home' },
            { title: 'Pengguna', icon: 'mdi-account-plus' },
            { title: 'Informasi', icon: 'mdi-alert-circle' },
            ],
            links: ['Beranda', 'Pengguna', 'Informasi'],
            listRight: ["Logout"]
        }
    },
}
</script>