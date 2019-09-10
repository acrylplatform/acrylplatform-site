<template>
 <div class="container">
            <div class="row about-us-list-wrp style="background-color: #181818">
                <ul class="about-us-list">
                    <li>
                        <div class="item-of-decision image-block">
                            <img src="img/Logo_stex.svg" alt="Acryl team image">
                        </div>
                        <!--<div class="text"><strong>{{ $t('exchange.stex') }}</strong>-->
                            <!--&lt;!&ndash;{{ $t('about.list.acrylTeamText') }}&ndash;&gt;-->
                        <!--</div>-->
                    </li>
                    <li>
                        <div class="item-of-decision image-block">
                            <img src="img/Logo-coingecko.webp" alt="Acryl team image">
                        </div>
                        <!--<div class="text"><strong>{{ $t('exchange.coingecko') }}</strong>-->
                            <!--&lt;!&ndash;{{ $t('about.list.acrylTeamText') }}&ndash;&gt;-->
                        <!--</div>-->
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
