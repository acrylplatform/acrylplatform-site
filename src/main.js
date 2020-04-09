import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import MainPage from "@/pages/MainPage";
import PrivacyPage from "@/pages/PrivacyPage";
import CookiesPage from "@/pages/CookiesPage";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: MainPage },
  { path: "/privacy", component: PrivacyPage },
  { path: "/cookie", component: CookiesPage }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
