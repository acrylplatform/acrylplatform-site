<template>
    <div>
        <headline v-on:switch-lang="switchLang"></headline>
        <main class="main">
            <banner></banner>
            <about></about>
            <client></client>
            <node></node>
            <crypto></crypto>
        </main>
        <footline></footline>
        <input name="cookieData" type="hidden" :data-cookie-text="$t('cookie.text', { lnk1: `<a href='cookies-policy.html'>Cookie policy</a>`, lnk2: `<a href='privacy-policy.html'>Privacy policy</a>`})">
    </div>
</template>

<script>
    import headline from '../src/Header.vue'
    import banner from '../src/Banner.vue'
    import about from '../src/About.vue'
    import client from '../src/Client.vue'
    import node from '../src/Node.vue'
    import crypto from '../src/Crypto.vue'
    import exchange from '../src/Exchange.vue'
    import footline from '../src/Footer.vue'

    import locale from '../src/locale.js'
    
    export default{
        components: {
            headline,
            banner,
            about,
            client,
            node,
            crypto,
            exchange,
            footline
        },
        i18n: {
            messages: {},
            sharedMessages: locale
        },
        methods: {
            switchLang: function(lang) {
                this.$emit('switch-lang', lang)
            }
        }
    }
</script>
