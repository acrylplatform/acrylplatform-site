<template>
 <div class="container">
            <div class="row about-us-list-wrp">
                <ul class="about-us-list">
                    <li>
                        <div class="image-block">
                            <img src="img/stex.png" alt="Acryl team image">
                        </div>
                        <div class="text"><strong>{{ $t('exchange.stex') }}</strong>
                            <!--{{ $t('about.list.acrylTeamText') }}-->
                        </div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/coingecko.jpg" alt="Acryl team image">
                        </div>
                        <div class="text"><strong>{{ $t('exchange.coingecko') }}</strong>
                            <!--{{ $t('about.list.acrylTeamText') }}-->
                        </div>
                    </li>
                </ul>
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