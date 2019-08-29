import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import App from '../src/App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    i18n: {
        locale: 'en'
    },
    components: { App },
    created: function () {
        if (navigator.language.includes('ru')) {
            this.$i18n.locale = 'ru'
        }
    }
})