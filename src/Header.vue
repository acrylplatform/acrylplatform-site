<template>
    <header class="header">
        <div class="container small-content">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src="img/acryl-logo-white.svg" alt="Acryl logo text"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img src="img/menu.svg" alt="menu image"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#platform">{{ $t('links.platform') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#miner">{{ $t('links.miner') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#client">{{ $t('links.client') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="$emit('switch-lang', 'en')" v-if="this.$i18n.locale == 'ru'">English</a>
                            <a class="nav-link" href="#" @click="$emit('switch-lang', 'ru')" v-else>Russian</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import locale from '../src/locale.js'
    
    export default{
        i18n: {
            messages: {},
            sharedMessages: locale
        }
    }
</script>