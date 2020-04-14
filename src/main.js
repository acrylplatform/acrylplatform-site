import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import MainPage from "@/pages/MainPage";
import PrivacyPage from "@/pages/PrivacyPage";
import CookiesPage from "@/pages/CookiesPage";
import VueI18n from 'vue-i18n'


Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: MainPage, props: {switchLang: (lang)=> this.$i18n.locale = lang}},
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
  i18n: {
      locale: 'en'
  },
  components: { App },
  created: function () {
      if (navigator.language.includes('ru')) {
          this.$i18n.locale = 'ru'
      }
  },
  methods: {
    switchLang: function(lang) {
        this.$i18n.locale = lang
    }
  },
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   el: '#app',
//   template: '<App v-on:switch-lang="switchLang"/>',
//   i18n: {
//       locale: 'en'
//   },
//   components: { App },
//   created: function () {
//       if (navigator.language.includes('ru')) {
//           this.$i18n.locale = 'ru'
//       }
//   },
//   methods: {
//       switchLang: function(lang) {
//           this.$i18n.locale = lang
//       }
//   }
// })
