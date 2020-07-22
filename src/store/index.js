import Vue from "vue";
import Vuex from "vuex";

//plugin이므로 use() 함수로 등록
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
