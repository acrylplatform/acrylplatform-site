<template>
    <div class="about-us-wrp" id="platform">
        <div class="container">
            <div class="row black-blocks">
                <div class="col-lg-6">
                    <div class="item-of-black-block">
                        <span class="block-title">{{ $t('about.blocks.networkTitle') }}</span>
                        <div class="text">{{ $t('about.blocks.networkText1') }} <span class="orange">LPOS (Leasing Proof of Stake)</span> {{ $t('about.blocks.networkText2') }} <br><br>{{ $t('about.blocks.networkText3') }}</div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item-of-black-block orange">
                        <img src="img/black-block-bg.svg" alt="Acryl black block" class="block-bg">
                        <span class="block-title">{{ $t('about.blocks.functionsTitle') }}</span>
                        <div class="text">{{ $t('about.blocks.functionsText') }}</div>
                    </div>
                </div>
            </div>
            <div class="row about-miner" id="miner">
                <div class="col-lg-6">
                    <div class="item-of-miner">
                        <div class="image-block">
                            <img src="img/check-image.svg" alt="Acryl check image">
                        </div>
                        <span class="block-title">{{ $t('about.blocks.checkTitle1') }}<br> {{ $t('about.blocks.checkTitle2') }}</span>
                        <div class="text">{{ $t('about.blocks.checkText') }}</div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item-of-miner">
                        <div class="image-block">
                            <img src="img/miner.svg" alt="Acryl miner image">
                        </div>
                        <span class="block-title orange">{{ $t('about.blocks.minerTitle1') }}<br> {{ $t('about.blocks.minerTitle2') }}</span>
                        <div class="text">{{ $t('about.blocks.minerText') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container small-content">
            <span class="decision-title">{{ $t('about.decision.title') }}</span>
            <div class="row best-decision">
                <div class="col-lg-3 col-md-6">
                    <div class="item-of-decision">
                        <div class="image-block">
                            <img src="img/bussines.svg" alt="Acryl bussines image">
                        </div>
                        <div class="text">{{ $t('about.decision.bussines') }}</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="item-of-decision">
                        <div class="image-block">
                            <img src="img/data.svg" alt="Acryl data image">
                        </div>
                        <div class="text">{{ $t('about.decision.data') }}</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="item-of-decision">
                        <div class="image-block">
                            <img src="img/mining.svg" alt="Acryl mining image">
                        </div>
                        <div class="text">{{ $t('about.decision.mining') }}</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="item-of-decision">
                        <div class="image-block">
                            <img src="img/sale.svg" alt="Acryl sale image">
                        </div>
                        <div class="text">{{ $t('about.decision.sale') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row about-us-list-wrp">
                <ul class="about-us-list">
                    <li>
                        <div class="image-block">
                            <img src="img/team.svg" alt="Acryl team image">
                        </div>
                        <div class="text"><strong>{{ $t('about.list.acrylTeam') }}</strong> {{ $t('about.list.acrylTeamText') }}</div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/new.svg" alt="Acryl new participants">
                        </div>
                        <div class="text">{{ $t('about.list.participants') }}</div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/nxt.svg" alt="Acryl nxt image">
                        </div>
                        <div class="text"><strong>{{ $t('about.list.forkTitle') }}</strong>{{ $t('about.list.forkText') }}</div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/motivation.svg" alt="Acryl motivation image">
                        </div>
                        <div class="text">{{ $t('about.list.motivation') }}</div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/ino.svg" alt="Acryl ino image">
                        </div>
                        <div class="text"><strong>{{ $t('about.list.inoTitle') }}</strong> {{ $t('about.list.inoText') }}</div>
                    </li>
                    <li>
                        <div class="image-block">
                            <img src="img/tools.svg" alt="Acryl tools image">
                        </div>
                        <div class="text">{{ $t('about.list.tools') }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container small-content">
            <div class="row slogan">
                <div class="col-lg-7">
                    <span class="slogan-name">Advanced crypto logic</span>
                    <span class="slogan-body">{{ $t('about.slogan.easy') }}<br>{{ $t('about.slogan.convenient') }}<br>{{ $t('about.slogan.efficient') }}</span>
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