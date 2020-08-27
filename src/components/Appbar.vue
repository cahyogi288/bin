<template>
    <div>
        <v-app-bar
        app
        absolute
        style="margin: 10px;"
        class="rounded-lg white">
            <v-spacer></v-spacer>

            <v-menu
            offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    text
                    v-bind="attrs"
                    v-on="on">
                        <v-icon left>mdi-account-outline</v-icon>
                        Admin
                    </v-btn>
                    
                </template>
                
                <v-list>
                    <v-list-item
                    v-for="n in listRight"
                    :key="n"
                    @click="logout">
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
            listRight: ["Logout"]
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('descUser')
            this.$router.replace({ path : '/login' })
        }
    },
}
</script>