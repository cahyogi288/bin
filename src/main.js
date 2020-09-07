import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import InputTag from 'vue-input-tag'
import CKEditor from '@ckeditor/ckeditor5-vue';
import moment from 'moment';

Vue.filter('date', function(value) {
    var locale = window.navigator.userLanguage || window.navigator.language;
    moment.locale('id');
    return moment(value).format('dddd, DD MMMM YYYY');
})

Vue.component('input-tag', InputTag)
Vue.config.productionTip = false
Vue.use(CKEditor);

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')