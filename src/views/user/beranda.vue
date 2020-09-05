<template>
  <v-app>
    <Appbar @offDetail="rowDetail = $event" />

    <v-main class="mt-n3">
      <v-container fluid>
        <v-card class="peta mb-3 rounded-xl" elevation="7">
          <div class="berandapeta rounded-xl d-flex">
            <v-row align="center" justify="center">
              <v-col md="12" sm="12" cols="12">
                <span>
                  <h1 class="white--text text-center">Welcome, {{ countryName }}</h1>
                </span>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-row v-for="(item, i) in content" :key="i"  style="" justify="start">
            <div class="row" v-if="!rowDetail">
          <v-col md="8" cols="12">
            <v-card height="410" class="grey lighten-4 rounded-xl ml-4" style="">
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
                          :src="'http://api.dolphinesia.com/uploads/'+ item.foto"
                        ></v-img>
                      </v-col>
                      <v-col class="judul d-flex align-top justify-center" md="8" cols="8">
                        <v-card-text class="headline">
                          {{ item.heading }}
                          <br />
                            <v-card-subtitle class="ml-n4">
                                <span>{{ item.createdAt | date }}</span>
                            </v-card-subtitle>
                          <!-- <v-col class="" md="8" cols="8"> -->
                            <v-btn @click="detailBerita(item)"  color="primary">
                            Lihat
                                <v-icon>mdi-arrow-right</v-icon>
                             </v-btn>
                          <!-- </v-col> -->
                        </v-card-text>
                        <!-- <v-card-actions class="align-center"> -->
                    
                        <!-- </v-card-actions> -->
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-col>
              </v-row>
              <!-- </v-row> -->
            </v-card>
          </v-col>

          <v-col class="ml-n2" md="4" cols="12">
            <v-card elevation="0">
              <v-row class="mt-n3">
                <v-col md="12" cols="12">
                  <v-card height="200" class="grey lighten-4 rounded-xl" style="">
                    <v-row>
                      <v-col class="" md="12" cols="12">
                        <v-card-title>
                          <v-row class="mt-n5">
                            <v-col md="4" cols="4">
                              <v-img
                                height="150"
                                width="200"
                                :src="'http://api.dolphinesia.com/uploads/'+ item.foto"
                              ></v-img>
                            </v-col>
                            <v-col
                              class="judul d-flex align-top justify-center"
                              md="8"
                              cols="8"
                            >
                              <v-card-text class="text-subtitle-1">
                                    <div class="parent mb-n3">
                                        <div class="block-ellipsis">
                                            {{ item.heading }}
                                            </div>
                                    </div>
                                    <v-card-subtitle class="ml-n4">
                                        <span>{{ item.createdAt | date }}</span>
                                    </v-card-subtitle>

                                    <v-btn @click="detailBerita(item)" color="primary">
                                    Lihat
                                    <v-icon>mdi-arrow-right</v-icon>
                                    </v-btn>
                              </v-card-text>
                            </v-col>
                          </v-row>
                        </v-card-title>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="mt-n6 ml-n2">
                <v-col md="12" cols="12">
                  <v-card height="200" class="grey lighten-4 rounded-xl" style="margin-top: 10px;">
                    <v-row>
                      <v-col md="12" cols="12">
                        <v-card-title>
                          <v-row class="mt-n5">
                            <v-col
                              class="d-flex align-top justify-center"
                              md="8"
                              cols="8"
                            >
                              <v-card-text class="text-subtitle-1">
                                <div class="block-ellipsis mb-n3">{{ item.heading }} </div>

                                <v-card-subtitle class="ml-n4">
                                        <span>{{ item.createdAt | date }}</span>
                                    </v-card-subtitle>
                                <v-btn @click="detailBerita(item)" color="primary">
                                  Lihat
                                  <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                              </v-card-text>
                            </v-col>
                            <v-col md="4" cols="4">
                              <v-img
                                height="150"
                                width="200"
                                :src="'http://api.dolphinesia.com/uploads/'+ item.foto"
                              ></v-img>
                            </v-col>
                          </v-row>
                        </v-card-title>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          </div>
        </v-row>

        <v-row class="" v-if="rowDetail">
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
                            style="object-fit: cover; height:500px; width: 100%;"
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
                <v-card height="100" width="" class="grey lighten-4 mt-n3 justify-end align-end">
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
                <v-card class="grey lighten-4 mt-n3" width="" elevation="0">
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
    <Footer />
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar-user.vue";
import Footer from '@/components/Footer.vue'
import { ApiBin } from "@/api/base_api";

export default {
  components: {
    Appbar,
    Footer
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
    this.getContentByCountry();
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
    getContentByCountry() {
      let user = JSON.parse(localStorage.getItem("descUser"))
      ApiBin.get("Konten/getByCountry?country="+ user[0].countryId).then((resp) => {
        // console.log(resp.data)
        this.content = resp.data.data;
        console.log("konten by country")
        console.log(this.content);
      });
    },
    // getAllContent() {
        
    //   ApiBin.get("Konten/getAll").then((resp) => {
    //     // console.log(resp.data)
    //     this.content = resp.data.data;
    //     console.log(this.content);
    //   });
    // },
  },
};
</script>

<style scoped>
.peta{
    background: linear-gradient(140.65deg, #DC1C13 21.46%, rgba(234, 76, 70, 0.72) 71.29%, rgba(240, 116, 112, 0.38) 89.94%, rgba(241, 149, 155, 0.44) 92.83%, rgba(246, 189, 192, 0.91) 98.02%);
    border-radius: 8px;
}
.berandapeta {
  /* padding: 68px; */
  /* width: 100%;
  height: 100%; */
    width: 1274px;
    height: 213px;
    left: 0px;
    top: 0px;
  /* background-size: cover; */
  /* background-color: white; */
    background: url("../../assets/image.png") no-repeat center;
    /* background: linear-gradient(140.65deg, #DC1C13 21.46%, rgba(234, 76, 70, 0.72) 71.29%, rgba(240, 116, 112, 0.38) 89.94%, rgba(241, 149, 155, 0.44) 92.83%, rgba(246, 189, 192, 0.91) 98.02%);
    border-radius: 8px; */
    /* background-blend-mode: overlay; */
    /* mix-blend-mode: overlay; */
}
.judul{
    text-align: justify;
    text-justify: inter-word;
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
  height: 42px;
  margin: 0 auto;
  text-align: justify;
  text-justify: inter-word;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.parent {
  width: 200px;
}
</style>