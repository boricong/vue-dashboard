import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VueFusionCharts from "../node_modules/vue-fusioncharts";
import FusionCharts from "../node_modules/fusioncharts";
import Charts from "../node_modules/fusioncharts/fusioncharts.charts";
import FusionTheme from "../node_modules/fusioncharts/themes/fusioncharts.theme.fusion";

Vue.config.productionTip = false;

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

new Vue({
  router, // /router/index.js에서 정의한 router 주입 / router: router 의 줄임표현
  store,
  render: h => h(App)
}).$mount("#app");
