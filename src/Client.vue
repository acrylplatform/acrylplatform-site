<template>
    <div class="client-wrp" id="client">
        <div class="container small-content">
            <div class="row client-reverse-mobile">
                <div class="col-lg-6 client-content">
                    <span class="client-title">ACRYL CLIENT</span>
                    <div class="text">{{ $t('client.text') }}</div>
                    <ul class="client-list">
                        <li>{{ $t('client.list.item1') }} <span>{{ $t('client.list.item1span') }}</span></li>
                        <li>{{ $t('client.list.item2') }}  <span>{{ $t('client.list.item2span') }}</span></li>
                        <li>{{ $t('client.list.item3') }}</li>
                        <li>{{ $t('client.list.item4') }}</li>
                        <li>{{ $t('client.list.item5') }}</li>
                        <li>{{ $t('client.list.item6') }}</li>
                        <li>{{ $t('client.list.item7') }}</li>
                        <li>{{ $t('client.list.item8') }}</li>
                        <li>{{ $t('client.list.item1') }}</li>
                        <li>{{ $t('client.list.item9') }}</li>
                    </ul>
                    <ul class="two-buttons-list">
                        <!--<li><a id="downloadclient" class="basic-button red download"><span>{{ $t('links.downloads') }}</span> <img src="img/download.svg" alt="Acryl download image"></a></li>-->
                        <li><a id="onlineclient2" class="basic-button orange">{{ $t('links.onlineclient') }}</a></li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <div class="client-screen">
                        <picture>
                            <source type="image/webp" media="(min-width: 1200px)" srcset="img/client.webp">
                            <img src="img/client.webp" alt="Acryl client image">
                        </picture>
                    </div>
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