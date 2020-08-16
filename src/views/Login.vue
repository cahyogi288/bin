<template>
    <!-- <v-container> -->
        <v-row>
            <v-col style="width: 100%" md="4" cols="12">

                <v-col md="12" cols="12" class="d-flex align-center justify-center">
                    <v-avatar 
                    size="110">
                        <img
                        src="../assets/bin.png"
                        alt="John"
                        >
                    </v-avatar>
                </v-col>

                <v-col md="12" cols="12">
                    <v-text-field
                    label="Username"
                    prepend-icon="mdi-account">
                    </v-text-field>

                    <v-text-field
                    label="Password"
                    prepend-icon="mdi-lock">
                    </v-text-field>
                    <v-btn color="#FFF42E" block>
                        Sign In
                    </v-btn>
                    <v-row>
                        <v-col md="6" cols="6">
                            <v-checkbox
                                               
                            label="Remember me"
                            ></v-checkbox>
                        </v-col>
                        <!-- <v-spacer></v-spacer> -->
                        <v-col md="6" cols="6" class="d-flex align-center justify-center" >
                            <v-btn text>
                            Forgot Password?
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>

            <v-col md="8" cols=12>
                <v-img
                src="../assets/peta.png"
                
                contain
                class="grey darken-4"
                ></v-img>
            </v-col>
        </v-row>
    <!-- </v-container> -->
</template>