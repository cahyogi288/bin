import axios from 'axios';
import Vue from 'vue'

let api_bin = process.env.VUE_APP_BIN

export const ApiBin = axios.create({
    baseURL: api_bin,
});

ApiBin.interceptors.request.use(
    config => {
        //   config.headers = {
        //     'Authorization': 'Bearer ' + localStorage.getItem("token"),
        //     'appsource': 'AIRSPACE_WEB'
        //   };
        return config;
    },
    error => Promise.reject(error)
);

ApiBin.interceptors.response.use(
    response => {
        // console.log("res", response.status);
        if (response.status === 200) {

        }
        return response;
    },
    error => {
        /**
         * Response ERROR
         * 401
         */
        //   if (error.response.status === 401) {
        //     Vue.swal({
        //       title: "Error",
        //       text: "Your session has already invalid, please login again!!",
        //       type: 'error',
        //       confirmButtonColor: '#3085d6',
        //       confirmButtonText: 'OKE'
        //     }).then((result) => {
        //       if (result.value) {
        //         localStorage.removeItem("token");
        //         localStorage.removeItem("role");
        //         location.replace('/');
        //       }
        //     });
        //   }
        //   if (error.response.status === 500) {
        //     Vue.swal({
        //       title: error.response.data.error,
        //       text: error.response.data.message,
        //       type: 'error',
        //       confirmButtonColor: '#3085d6',
        //       confirmButtonText: 'OKE'
        //     })
        //   }
        Promise.reject(error);
    }
);