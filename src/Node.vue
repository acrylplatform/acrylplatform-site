<template>
    <div class="node-wrp">
        <picture>
            <source type="image/webp" srcset="img/noda.webp">
            <img src="img/noda.jpg" alt="Acryl node image">
        </picture>
        <div class="container small-content">
            <div class="row">
                <div class="col-lg-12 node-mobile">
                    <picture>
                        <source type="image/webp" srcset="img/one-miner.webp">
                        <img src="img/one-miner.png" alt="Acryl miner image">
                    </picture>
                </div>
                <div class="col-lg-7 node-content">
                    <span class="node-title">ACRYL NODE</span>
                    <div class="text">ACRYL NODE {{ $t('node.title1') }} <br>{{ $t('node.title2') }}</div>
                    <span class="node-list-title">{{ $t('node.list.title') }}</span>
                    <ul class="node-list">
                        <li><span>1</span> - {{ $t('node.list.item1') }}</li>
                        <li><span>2</span> - {{ $t('node.list.item2') }}</li>
                        <li><span>3</span> - {{ $t('node.list.item3') }}</li>
                    </ul>
                    <div class="text">{{ $t('node.desc1') }}<br> {{ $t('node.desc2') }} <br>{{ $t('node.desc3') }}</div>
                    <a id="aboutacrylnode" class="basic-button orange details">{{ $t('links.aboutacrylnode') }}</a>
                </div>
            </div>
        </div>
    </div>
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