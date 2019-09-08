import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}/v1`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

Vue.prototype.$axios = axios;
export default axios;