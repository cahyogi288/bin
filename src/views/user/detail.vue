<template>
  <v-app>
    <Appbar @offDetail="rowDetail = $event" />

    <v-main class="mt-n3">
      <v-container fluid>
        
        <v-card class="peta mb-3 rounded-xl mt-13" elevation="7">
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

        <v-row class="">
          <v-col md="8" cols="12" >
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
                        <div class="judul text-body-1" v-html="contentDetail.informasi" style="word-break:normal;"></div>
                        
                          <p v-for="(item, i) in docs" :key="i"><a :href="'http://api.dolphinesia.com/uploads/'+item.nama_file" download="file_dokumen"  target="_blank">{{item.nama_file}}</a></p>
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
      docs: [],
      kategori: "",
      kategoris: [
        { title: "PWNI", link: "/pwni" },
        { title: "Terorisme", link: "/terorisme" },
        { title: "Kejahatan Lintas Batas", link: "/kejahatan" },
        { title: "Separatisme", link: "/separatisme" },
        { title: "BDI", link: "/bdi" },
        { title: 'Laporan Bulanan', link: '/laporan' }
      ],
    };
  },
  directives: {
    trim: {
      inserted: function (el) {
        var str = el.innerHTML;
        var resultString = str.split(" ").slice(0, 30).join(" ") + "...";
        el.innerHTML = resultString;
      },
    },
  },
  mounted() {
    this.detailBerita();
    
    window.onpopstate = function(event) {
      // alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    }; 
  },
  computed: {
    countryName() {
      let a = JSON.parse(localStorage.getItem("descUser"));
      return a[0].countryName;
    },
  },
  methods: {
    detailBerita() {
        let content = JSON.parse(localStorage.getItem('contentDetail'))
        this.contentDetail = content;
        console.log(this.contentDetail);
        let id_content = content.id
      ApiBin.get('Konten/getDoc/' + id_content).then( resp => {
        // console.log(resp)
        this.docs = resp.data.data
        this.rowDetail = true
      })
      
    },
    kategorii(kategori) {
      let tahun = 2020
      localStorage.setItem("namaContent", kategori);
      localStorage.setItem('tahun', tahun)
      // console.log(kategori);
      if(kategori == 'Laporan Bulanan'){
        this.$router.replace({ path: "/laporan" });
      }else{

      // if(this.$router.history.current.fullPath == '/beranda'){
      // this.$router.go()
      // }else{
        this.$router.replace({ path: "/kategori" });
      }
      // }
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