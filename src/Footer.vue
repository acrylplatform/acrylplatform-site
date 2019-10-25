<template>
    <footer class="footer">
        <div class="container small-content footer-content">
            <div class="row subscribe-row">
                <div class="col-md-6">
                    <span class="subscribe-title">{{ $t('footer.subscribeTitle1') }}<br> {{ $t('footer.subscribeTitle2') }}</span>
                </div>
                <div class="col-md-6 search-form-wrp">
                    <form>
                        <div class="search-row">
                            <input id="userEmail" type="text" aria-label="userEmail" placeholder="E-mail" name="email" required="required">
                            <button id="emailSubmit" type="button" class="basic-button red subscribe-button" >{{ $t('links.subscribe') }}</button>
                        </div>
                        <label class="check-after-subscribe">
                            <input id="emailCh1" type="checkbox" required="required" value="check1">
                            <span></span>
                            <span>{{ $t('footer.read') }} <a href="privacy-policy.html" class="confidentiality">{{ $t('footer.privacyPolicy') }}</a><br> {{ $t('footer.and') }} <a href="cookies-policy.html" class="Politic">{{ $t('footer.cookiesPolicy') }}</a></span>
                        </label>
                        <label class="check-after-subscribe">
                            <input id="emailCh2" type="checkbox" required="required" value="check2">
                            <span></span>
                            <span>{{ $t('footer.email1') }} <a>ACRYL</a> {{ $t('footer.email2') }}</span>
                        </label>
                    </form>
                </div>
            </div>
            <div class="row footer-nav-row">
                <div class="col-lg-6 col-md-8">
                    <ul class="footer-nav">
                        <li>
                            <a href="" class="footer-logo">
                                <img src="img/logo-orange.svg" alt="Acryl logo text">
                            </a>
                        </li>
                        <li><a href="#platform">{{ $t('links.platform') }}</a></li>
                        <li><a href="#miner">{{ $t('links.miner') }}</a></li>
                        <li><a href="#client">{{ $t('links.client') }}</a></li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-4">
                    <ul class="networks">
                        <li class="networkspad"><a  id="youtube"><img src="img/youtube.svg" alt="Youtube Page"></a></li>
                        <li class="networkspad"><a  id="twitter"><img src="img/twitter.svg" alt="Twitter Page"></a></li>
                        <li class="networkspad"><a  id="telegram"><img src="img/telegram.svg" alt="Telegram Chanel"></a></li>
                        <li class="networkspad"><a  id="github"><img src="img/githubv3.svg" alt="Github Chanel"></a></li>
                        <li class="networkspad"><a  id="facebok"><img src="img/fb.svg" alt="Facebok Chanel"></a></li>
                        <li class="networkspad"><a  id="vk"><img src="img/vklogo.png" alt="Vk Chanel"></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <ul class="footer-politics">
                    <li>Copyright © 2018, ACRYL PLATFORM</li>
                    <li>Privacy policy.  Cookies policy.  Cookies settings <br>Terms and conditions</li>
                    <li><a id="weisswaters" class="weisswater"> Design by Weisswater</a>ebo</li>
                </ul>
            </div>
        </div>
    </footer>
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
