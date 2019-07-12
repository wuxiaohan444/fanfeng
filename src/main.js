import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'
import axios from 'axios'
import qs from 'qs'

const env = "prod";
const link = {
    dev: "https://bianli.miaowbuy.com/customer",
    prod: "https://qianniu.miaowbuy.com/customer"
}[env];
Vue.prototype.fixedIp = function () {//固定ip
    return link
};
Vue.prototype.bus = new Vue;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
