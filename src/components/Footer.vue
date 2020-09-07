<template>
    <v-footer v-if="role == 'ADMIN'" style="background-color: #a6a6a6" class="rounded-lg ">
      <v-spacer></v-spacer>
      <div>One Mission BIN v.1.0.0</div>
    </v-footer>

    <v-footer v-else padless style="background-color: #a6a6a6" class="rounded-lg mx-3 mb-2 mt-n3">
      <v-col
      class="text-center"
      cols="12"
      >
      BADAN INTELEJEN NEGARA ~ ONE MISSION 2020
      <!-- ONE MISSION <br>
      BADAN INTELIJEN NEGARA INDONESIA <br>
      2020 -->
      </v-col>
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    role() {
      let user = JSON.parse(localStorage.getItem('descUser'))
      let role = user[0].status

      return role
    }
  },
}
</script>