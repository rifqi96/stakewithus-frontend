import Vue from 'vue';
import Vuex from 'vuex';
import validators from './Modules/validators';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    validators,
  },
  strict: debug,
});