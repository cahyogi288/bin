<template>
    <div>
        <v-app-bar
        app
        style="margin: 10px;"
        class="rounded-lg white">
            <v-spacer></v-spacer>

            <v-menu
            left
            bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <span>Admin</span>
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
            listRight: ["Logout"]
        }
    },
}
</script>