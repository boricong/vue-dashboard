import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, // /router/index.js에서 정의한 router 주입 / router: router 의 줄임표현
  store,
  render: h => h(App)
}).$mount("#app");
