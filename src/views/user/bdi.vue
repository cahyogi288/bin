<template>
  <v-app>
    <Appbar @name="nameContent = $event " />

    <v-main class="mt-n3">
      <v-container fluid>
        <v-card class="peta px-auto rounded-xl mt-13" elevation="7">
          <div class="berandapeta rounded-xl d-flex">
            <v-row align="center" justify="center">
              <v-col md="12" sm="12" cols="12">
                <span>
                  <h1 class="white--text text-center">{{ nameContent }}</h1>
                </span>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-row class="" style>
          <v-col v-if="countContent>=1 & !rowDetail" md="8" cols="12">
            <v-card class="grey lighten-4">
              <v-row>
                <!-- <div> -->
                <v-col v-for="(item, i) in content" :key="i" md="12" cols="12">
                  <v-card class="grey lighten-4" elevation="0">
                    <v-row>
                      <v-col class="pl-8" md="4" cols="4">
                        <v-img
                          height="200"
                          width="300"
                          :src="'http://api.dolphinesia.com/uploads/'+ item.foto"
                        ></v-img>
                      </v-col>
                      <v-col md="8" cols="8">
                        <v-card-title>
                          <span>{{ item.heading }}</span>
                        </v-card-title>
                        <v-card-subtitle>
                          <span>{{ item.createdAt | date }}</span>
                        </v-card-subtitle>
                        <v-card-text>
                          <div
                            style=""
                          >
                            <span v-trim v-html="item.informasi"></span>
                          </div>
                          <v-btn @click="detailBerita(item)" class="mt-3" color="primary">
                            Lihat
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <!-- </div> -->

                <!-- <v-col class="mt-n7" md="12" cols="12">
                                    <v-card class="grey lighten-4" elevation="0">
                                        <v-row>
                                        <v-col class="pl-8" md="4" cols="4">
                                            <v-img
                                            height="200"
                                            width="300"
                                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                                            </v-img>
                                        </v-col>
                                        <v-col md="8" cols="8">
                                            <v-card-title>
                                                <span>Berita A</span>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                <span>15 April 2020</span>
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <span>Loram Ipsum is simply dummy text of the printing and typesetting industry </span>
                                            </v-card-text>
                                        </v-col>
                                        </v-row>
                                    </v-card>
                                </v-col>

                                <v-col class="mt-n7" md="12" cols="12">
                                    <v-card class="grey lighten-4" elevation="0">
                                        <v-row>
                                        <v-col class="pl-8" md="4" cols="4">
                                            <v-img
                                            height="200"
                                            width="300"
                                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                                            </v-img>
                                        </v-col>
                                        <v-col md="8" cols="8">
                                            <v-card-title>
                                                <span>Berita A</span>
                                            </v-card-title>
                                            <v-card-subtitle>
                                                <span>15 April 2020</span>
                                            </v-card-subtitle>
                                            <v-card-text>
                                                <span>Loram Ipsum is simply dummy text of the printing and typesetting industry </span>
                                            </v-card-text>
                                        </v-col>
                                        </v-row>
                                    </v-card>
                </v-col>-->
              </v-row>
            </v-card>
          </v-col>

          <v-col v-if="!countContent" md="8" cols="12">
            <v-card class="grey lighten-4">
              <v-row>
                <!-- <div> -->
                <v-col md="12" cols="12">
                  <v-card class="grey lighten-4" elevation="0">
                    <v-row>
                      <v-col class="pl-8" md="4" cols="4">
                        <v-card-title>
                          <span>Berita Tidak Tersedia</span>
                        </v-card-title>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col v-if="rowDetail" md="8" cols="12">
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
                            style="object-fit: cover; height:100%; width: 100%;"
                          />
                          <p>{{ contentDetail.caption }}</p>
                        </div>
                      </v-col>
                      <v-col md="12" cols="12">
                        <div class="text-body-1" v-html="contentDetail.informasi"></div>
                        <p><a :href="'http://api.dolphinesia.com/uploads/'+contentDetail.document" download="file_dokumen"  target="_blank">Download</a></p>
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col md="4" cols="4">
            <v-card elevation="0">
              <v-col md="12" cols="12">
                <v-card height="100" width="" class="grey lighten-4 mt-n3">
                  <v-card-text>
                    <v-form>
                      <v-row>
                        <v-col md="10" cols="10">
                          <v-text-field
                            @input="onChange()"
                            v-model="search"
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
      oldData: "",
      offlineKey: ["heading", "informasi"],
      unique: "id",
      search: "",
      rowDetail: false,
      kategori: "",
      content: [],
      countContent: "",
      contentDetail: [],
      kategoris: [
        { title: "PWNI", link: "/pwni" },
        { title: "Terorisme", link: "/terorisme" },
        { title: "Kejahatan Lintas Batas", link: "/kejahatan" },
        { title: "Separatisme", link: "/separatisme" },
        { title: "BDI", link: "/bdi" },
        // { title: 'Laporan Bulanan', link: '/laporan' }
      ],
      nameContent: localStorage.getItem("namaContent"),
    };
  },
  created() {
    this.getBerita();
  },
  directives: {
    trim: {
      inserted: function (el) {
        var str = el.innerHTML;
        var resultString = str.split(" ").slice(0, 15).join(" ") + "...";
        el.innerHTML = resultString;
      },
    },
  },
  computed: {
    // name() {
    //     return this.nameContent =
    // }
  },
  methods: {
    detailBerita(content) {
      // console.log(content)
      this.contentDetail = content;
      this.rowDetail = true;
    },
    kategorii(kategori) {
      localStorage.setItem("namaContent", kategori);
      if (this.$router.history.current.fullPath == "/kategori") {
        this.$router.go();
      } else {
        this.$router.replace({ path: "/kategori" });
      }
    },
    getBerita() {
        let user = JSON.parse(localStorage.getItem("descUser"))
        let kategori = { 
                kategori: localStorage.getItem("namaContent"),
                country:  user[0].countryId
            };

      ApiBin.post("Konten/getByKategori", kategori).then((resp) => {
        // console.log(resp.data)
        this.content = resp.data.data;
        this.oldData = resp.data.data;
        this.countContent = this.content.length;
        console.log(this.content);
      });
    },
    onChange() {
      let result = [];

      this.offlineKey.map((key) => {
        result = result.concat(
          this.oldData.filter((el) =>
            el[key] === null
              ? false
              : el[key].toLowerCase().includes(this.search.toLowerCase())
          )
        );
      });

      let seen = new Set();
      const dataFilter = result.filter((el) => {
        const duplicate = seen.has(el[this.unique]);
        seen.add(el[this.unique]);
        return !duplicate;
      });

      this.content = dataFilter;
    },
  },
};
</script>

<style scoped>
.peta{
    background: linear-gradient(140.65deg, #DC1C13 21.46%, rgba(234, 76, 70, 0.72) 71.29%, rgba(240, 116, 112, 0.38) 89.94%, rgba(241, 149, 155, 0.44) 92.83%, rgba(246, 189, 192, 0.91) 98.02%);
    border-radius: 8px;
}
.berandapeta {
    width: 1274px;
    height: 213px;
    left: 0px;
    top: 0px;
  /* background-size: cover; */
  /* background-color: white; */
    background: url("../../assets/image.png") no-repeat center;
}
</style>