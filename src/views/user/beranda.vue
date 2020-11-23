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
                          height="250"
                          width="300"
                          :src="'http://api.dolphinesia.com/uploads/'+ item[0].foto"
                        ></v-img>
                      </v-col>
                      <v-col class="judul d-flex align-top justify-center" md="8" cols="8">
                        <v-card-text class="headline" style="word-break:normal;">
                          {{ item[0].heading }}
                          <br />
                            <v-card-subtitle class="ml-n4">
                                <span>{{ item[0].createdAt | date }}</span>
                            </v-card-subtitle>
                            <div>
                              <span class="text-subtitle-1" v-trim v-html="item[0].informasi"></span>
                            </div>
                          <!-- <v-col class="" md="8" cols="8"> -->
                            <v-btn @click="detailBerita(item[0])"  color="primary">
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
              <v-row class="mt-n3" v-if="item[1] != undefined">
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
                                :src="'http://api.dolphinesia.com/uploads/'+ item[1].foto"
                              ></v-img>
                            </v-col>
                            <v-col
                              class="judul d-flex align-top justify-center"
                              md="8"
                              cols="8"
                            >
                              <v-card-text class="text-subtitle-1">
                                    <div class="parent mb-n3">
                                        <div class="block-ellipsis" style="word-break:normal;">
                                            {{ item[1].heading }}
                                            </div>
                                    </div>
                                    <v-card-subtitle class="ml-n4">
                                        <span>{{ item[1].createdAt | date }}</span>
                                    </v-card-subtitle>

                                    <v-btn @click="detailBerita(item[1])" color="primary">
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

              <v-row class="mt-n6 ml-n2" v-if="item[2] != undefined">
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
                                <div class="block-ellipsis mb-n3" style="word-break:normal;">{{ item[2].heading }} </div>

                                <v-card-subtitle class="ml-n4">
                                        <span>{{ item[2].createdAt | date }}</span>
                                    </v-card-subtitle>
                                <v-btn @click="detailBerita(item[2])" color="primary">
                                  Lihat
                                  <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                              </v-card-text>
                            </v-col>
                            <v-col md="4" cols="4">
                              <v-img
                                height="150"
                                width="200"
                                :src="'http://api.dolphinesia.com/uploads/'+ item[2].foto"
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
    this.getContentByCountry();
    
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
    detailBerita(content) {
      // console.log(content);
      localStorage.setItem('contentDetail', JSON.stringify(content))
      // this.contentDetail = content;
      let id_content = content.id
      // ApiBin.get('Konten/getDoc/' + id_content).then( resp => {
        // console.log(resp)
        // this.docs = resp.data.data
        this.$router.push({ path: '/detail'})
        // this.rowDetail = true
      // })
      
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
    getContentByCountry() {
      let user = JSON.parse(localStorage.getItem("descUser"))
      ApiBin.get("Konten/getByCountry?country="+ user[0].countryId).then((resp) => {
        // console.log(resp.data)
        let data =  resp.data.data;

        let count = 1;
        let temp = []
        let newRes = []
        for (let index = 0; index < data.length; index++) {
          if(count == 4){
            count= 1;
            temp=[]
          }
          temp.push(data[index]);
          count == 3 ? newRes.push(temp) : null;
          index == data.length-1 ? newRes.push(temp) : null;
          count = count+1;
        }

        this.content = newRes;
        console.log("konten by country")
        // console.log(this.content);
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