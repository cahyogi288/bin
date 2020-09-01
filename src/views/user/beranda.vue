<template>
  <v-app>
    <Appbar @offDetail="rowDetail = $event" />

    <v-main class="mt-n3">
      <v-container fluid>
        <v-card class="mx-auto rounded-xl" elevation="0">
          <div class="berandapeta rounded-xl">
            <v-row align="center" justify="center">
              <v-col md="12" sm="12" cols="12">
                <span>
                  <h1 class="white--text text-center">Welcome, {{ countryName }}</h1>
                </span>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-row v-if="!rowDetail" style="padding-left: 10px" justify="start">
          <v-col md="8" cols="12">
            <v-card height="410" class="grey lighten-4 rounded-xl ml-4" style="margin-top: 10px;">
              <v-row>
                <v-col md="12" cols="12">
                  <v-card-title class="mb-n8">
                    <v-row>
                      <v-col md="12" cols="12">
                        <span>
                          <h2 class="blue-grey--text text--darken-1">Informasi Terbaru</h2>
                        </span>
                      </v-col>
                    </v-row>
                  </v-card-title>
                  <v-card-title>
                    <!-- <v-row>
                                            <v-col md="12" cols="12">
                                                <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                            </v-col>
                    </v-row>-->
                    <v-row>
                      <v-col md="4" cols="4">
                        <v-img
                          height="200"
                          width="300"
                          :src="'http://api.dolphinesia.com/uploads/'+ content[0].foto"
                        ></v-img>
                      </v-col>
                      <v-col class="text-center d-flex align-center justify-center" md="8" cols="8">
                        <v-card-text class="headline">
                          {{ content[0].heading }}
                          <v-btn @click="detailBerita(content[0])" color="primary">
                            Lihat
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-card-text>
                        <!-- <v-card-actions class="center"> -->

                        <!-- </v-card-actions> -->
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-col>
              </v-row>
              <!-- </v-row> -->
            </v-card>
          </v-col>

          <v-col md="4" cols="12">
            <v-card width="400" elevation="0">
              <v-row class="mt-n3">
                <v-col md="12" cols="12">
                  <v-card height="200" class="grey lighten-4 rounded-xl" style="margin-top: 10px;">
                    <v-row>
                      <v-col md="12" cols="12">
                        <v-card-title>
                          <!-- <v-row>
                                                        <v-col md="12" cols="12">
                                                            <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                                        </v-col>
                          </v-row>-->
                          <v-row>
                            <v-col md="4" cols="4">
                              <v-img
                                height="100"
                                width="200"
                                :src="'http://api.dolphinesia.com/uploads/'+ content[1].foto"
                              ></v-img>
                            </v-col>
                            <v-col
                              class="text-center d-flex align-center justify-center"
                              md="8"
                              cols="8"
                            >
                              <v-card-text class="text-subtitle-1">
                                  <div class="parent">
                                      <div class="block-ellipsis">{{ content[1].heading }}</div>
                                  </div>
                                

                                <v-btn @click="detailBerita(content[1])" color="primary">
                                  Lihat
                                  <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                              </v-card-text>
                              <!-- <v-card-actions class="center"> -->

                              <!-- </v-card-actions> -->
                            </v-col>
                          </v-row>
                        </v-card-title>
                      </v-col>
                    </v-row>
                    <!-- </v-row> -->
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col md="12" cols="12">
                  <v-card height="200" class="grey lighten-4 rounded-xl" style="margin-top: 10px;">
                    <v-row>
                      <v-col md="12" cols="12">
                        <v-card-title>
                          <!-- <v-row>
                                                        <v-col md="12" cols="12">
                                                            <span> <h2 class="blue-grey--text text--darken-1"> Informasi Terbaru </h2></span>
                                                        </v-col>
                          </v-row>-->
                          <v-row>
                            <v-col
                              class="text-center d-flex align-center justify-center"
                              md="8"
                              cols="8"
                            >
                              <v-card-text class="text-subtitle-1">
                                {{ content[2].heading }}
                                <v-btn @click="detailBerita(content[2])" color="primary">
                                  Lihat
                                  <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                              </v-card-text>
                              <!-- <v-card-actions class="center"> -->

                              <!-- </v-card-actions> -->
                            </v-col>
                            <v-col md="4" cols="4">
                              <v-img
                                height="100"
                                width="200"
                                :src="'http://api.dolphinesia.com/uploads/'+ content[2].foto"
                              ></v-img>
                            </v-col>
                          </v-row>
                        </v-card-title>
                      </v-col>
                    </v-row>
                    <!-- </v-row> -->
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="pl-6" v-if="rowDetail">
          <v-col md="8" cols="12">
            <v-card class="grey lighten-4">
              <v-row>
                <v-col class="mt-n3" md="12" cols="12">
                  <v-card-title>
                    <v-row>
                      <v-col md="12" cols="12">
                        <span>{{ contentDetail.heading }}</span>
                        <br />
                        <span class="text-subtitle-1">{{ contentDetail.createdAt }}</span>
                      </v-col>
                      <v-col md="12" cols="12">
                        <!-- <v-img
                                                class="mx-auto align-center justify-center"
                                                height="200"
                                                width="300"
                                                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                        ></v-img>-->
                        <div
                          style="display: flex; flex-direction: column; align-items: center; justify-content: center;"
                        >
                          <img
                            :src="'http://api.dolphinesia.com/uploads/'+contentDetail.foto"
                            alt
                            style="object-fit: cover; height:200px; width: 200px;"
                          />
                          <p>{{ contentDetail.caption }}</p>
                        </div>
                      </v-col>
                      <v-col md="12" cols="12">
                        <div class="text-body-1" v-html="contentDetail.informasi"></div>
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col md="4" cols="12">
            <v-card elevation="0">
              <v-col md="12" cols="12">
                <v-card height="100" width="385" class="grey lighten-4 mt-n3">
                  <v-card-text>
                    <v-form>
                      <v-row>
                        <v-col md="10" cols="10">
                          <v-text-field
                            background-color="white"
                            placeholder="Cari..."
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                        <v-col class="ml-n4" md="2" cols="2">
                          <v-btn icon color="blue">
                            <v-icon>mdi-magnify</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col md="12" cols="12">
                <v-card class="grey lighten-4 mt-n3" width="385" elevation="0">
                  <v-col md="12" cols="12">
                    <!-- <span class="text-subtitle-1"><strong>Kategori</strong></span> -->
                    <v-list class="grey lighten-4">
                      <v-subheader>Kategori</v-subheader>
                      <v-list-item-group v-model="kategori" color="primary">
                        <v-list-item
                          v-for="(item, i) in kategoris"
                          @click="kategorii(item.title)"
                          :key="i"
                        >
                          <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-card>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar-user.vue";
import { ApiBin } from "@/api/base_api";

export default {
  components: {
    Appbar,
  },
  data() {
    return {
      rowDetail: false,
      content: [],
      contentDetail: [],
      kategori: "",
      kategoris: [
        { title: "PWNI", link: "/pwni" },
        { title: "Terorisme", link: "/terorisme" },
        { title: "Kejahatan Lintas Batas", link: "/kejahatan" },
        { title: "Separatisme", link: "/separatisme" },
        { title: "BDI", link: "/bdi" },
        // { title: 'Laporan Bulanan', link: '/laporan' }
      ],
    };
  },
  mounted() {
    this.getAllContent();
  },
  computed: {
    countryName() {
      let a = JSON.parse(localStorage.getItem("descUser"));
      return a[0].countryName;
    },
  },
  methods: {
    detailBerita(content) {
      console.log(content);
      this.contentDetail = content;
      this.rowDetail = true;
    },
    kategorii(kategori) {
      localStorage.setItem("namaContent", kategori);
      console.log(kategori);
      // if(this.$router.history.current.fullPath == '/beranda'){
      // this.$router.go()
      // }else{
      this.$router.replace({ path: "/kategori" });
      // }
    },
    getAllContent() {
      ApiBin.get("Konten/getAll").then((resp) => {
        // console.log(resp.data)
        this.content = resp.data.data;
        console.log(this.content);
      });
    },
  },
};
</script>

<style scoped>
.berandapeta {
  padding: 68px;
  width: 100%;
  height: 100%;
  /* background-size: cover; */
  /* background-color: white; */
  background: url("../../assets/beranda.png") no-repeat center;
}
.b {
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.block-ellipsis {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 43px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.parent {
  width: 150px;
}
</style>