<template>
<div class="exchange" style="background-color: white;">
 <div class="container">
    <span class="decision-title">{{ $t('exchange.exchangetitle') }}</span>
            <div class="row about-us-list-wrp">
                <ul class="about-us-list">
                    <li style="margin-bottom: 0;">
                        <a href="https://app.stex.com/ru/trade/pair/BTC/ACRYL/1D"><div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 70%;" src="img/logostex.png">
                        </div></a>
                        <!--<div class="text"><strong>{{ $t('exchange.stex') }}</strong>-->
                            <!--&lt;!&ndash;{{ $t('about.list.acrylTeamText') }}&ndash;&gt;-->
                        <!--</div>-->
                    </li>
                    <li style="margin-bottom: 0;">
                        <a href="https://coinmarketcap.com/currencies/acryl/"><div class="item-of-decision image-block" style="box-shadow: none;">
                            <img style="width: 100%; padding-left: 56%;" src="img/coinmarketcap.svg">
                        </div></a>
                    </li>
                    <li style="margin-bottom: 0;">
                        <a href="https://www.coingecko.com/en/coins/acryl?utm_content=acryl&utm_medium=search_coin&utm_source=coingecko"><div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 70%;" src="img/Logo-coingecko.webp">
                        </div></a>
                    </li>
                     <li style="margin-bottom: 0;">
                         <a href="https://coincodex.com/crypto/acryl/?period=7D"><div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 30%; margin-right: 67%; margin-top: -35%;" src="img/coincodex.png">
                        </div></a>
                     </li>
                     <li style="margin-bottom: 0;">
                         <a href="https://www.worldcoinindex.com/coin/acryl"> <div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 40%; margin-left: 58%;" src="img/wordcoinindex.png">
                         </div></a>
                     </li>
                     <li style="margin-bottom: 0;">
                         <a href="https://www.livecoinwatch.com/price/Acryl-ACRYL"> <div class="item-of-decision image-block" style=" box-shadow: none;">
                              <img style="width: 50%; margin-left: 110%; margin-top: -48%;" src="img/livecoinwatch.svg">
                          </div></a>
                     </li>
                     <li style="margin-bottom: 0;">
                         <a href="https://coinpricetoday.com/coin/acryl/"><div class="item-of-decision image-block" style=" box-shadow: none;">
                              <img style="width: 50%; margin-left: 202%;" src="img/coinpricetoday.webp">
                           </div></a>
                     </li>
                      <li style="margin-bottom: 0;">
                          <a href="https://cmc.io/coins/acryl"> <div class="item-of-decision image-block" style="box-shadow: none;">
                               <img style="width: 30%; margin-top: -83%; margin-left: -105%;" src="img/cmc.png">
                            </div></a>
                      </li>
                    <li style="margin-bottom: 0;">
                        <a href="http://coincost.net/currency/acryl?from=search"><div class="item-of-decision image-block" style="box-shadow: none;">
                            <img style="width: 50%; margin-top: -100%;" src="img/coincost.png">
                        </div></a>
                    </li>
                </ul>
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
