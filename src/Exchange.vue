<template>
<div class="exchange" style="background-color: white;">
 <div class="container">
    <span class="decision-title">{{ $t('exchange.exchangetitle') }}</span>
            <div class="row about-us-list-wrp">
                <ul class="about-us-list">
                    <li>
                        <div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 50%;" src="img/logostex.png">
                        </div>
                        <!--<div class="text"><strong>{{ $t('exchange.stex') }}</strong>-->
                            <!--&lt;!&ndash;{{ $t('about.list.acrylTeamText') }}&ndash;&gt;-->
                        <!--</div>-->
                    </li>
                    <li>
                        <div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 50%;" src="img/Logo-coingecko.webp">
                        </div>
                    </li>
                     <li>
                        <div class="item-of-decision image-block" style=" box-shadow: none;">
                            <img style="width: 50%;" src="img/coincodex.png">
                        </div>
                     </li>
                     <li>
                         <div class="item-of-decision image-block" style=" box-shadow: none;">
                             <img style="width: 50%;" src="img/wordcoinindex.png">
                         </div>
                     </li>
                     <li>
                          <div class="item-of-decision image-block" style=" box-shadow: none;">
                              <img style="width: 50%;" src="img/livecoinwatch.svg">
                          </div>
                     </li>
                     <li>
                           <div class="item-of-decision image-block" style=" box-shadow: none;">
                               <img style="width: 50%;" src="img/coinpricetoday.webp">
                           </div>
                     </li>
                      <li>
                            <div class="item-of-decision image-block" style="box-shadow: none;">
                                <img style="width: 50%;" src="img/cmc.png">
                            </div>
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
