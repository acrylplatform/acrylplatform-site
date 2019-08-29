<template>
    <div class="first-banner-wrp">
        <picture>
            <source type="image/webp" srcset="img/top-5120.webp">
            <img src="img/top-2560.jpg" alt="Acryl top image">
        </picture>
        <div class="container small-content">
            <div class="row" style="margin-top:45px;">
                <div class="col-lg-7 first-banner-content">

                    <h2 class="second-level-title" v-if="this.$i18n.locale == 'ru'">Advanced <br>crypto logic *</h2>
                    <h2 class="second-level-title" v-else>Advanced <br>crypto logic</h2>

                    <span class="title-descript" v-if="this.$i18n.locale == 'ru'">*Передовая Крипто Логика</span>
                    <span class="title-descript" v-else style="width: 150px;"></span>

                    <span class="title-info">{{ $t('banner.title') }}</span>
                    <div class="text">{{ $t('banner.text') }}</div>
                    <ul class="three-buttons-list">
                        <li><a id="maining" class="basic-button red">{{ $t('links.miner') }}</a></li>
                        <li><a id="onlineclient" class="basic-button orange">{{ $t('links.onlineclient') }}</a></li>
                        <li><a id="explorer" class="basic-button red">{{ $t('links.explorer') }}</a></li>
                        <!--<li>-->
                            <!--<a id="downloads" class="download">-->
                                <!--{{ $t('links.downloads') }}-->
                                <!--<img src="img/download.svg" alt="Acryl download icon">-->
                            <!--</a>-->
                        <!--</li>-->
                    </ul>
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