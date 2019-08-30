<template>
    <div class="crypto-table-wrp">
        <div class="container">
            <div class="row">
                <div class="table-wrapper">
                    <table class="comparison-table">
                        <tbody>
                            <tr class="table-head">
                                <td class="table-title" style="width: 35%;">{{ $t('crypto.title1') }}<br> {{ $t('crypto.title2') }}<br> {{ $t('crypto.title3') }}</td>
                                <td class="crypto-logo" style="width: 15%;">
                                    <img src="img/acryl.svg" alt="Acryl image">
                                    acryl
                                </td>
                                <td class="crypto-logo" style="width: 15%;">
                                    <img src="img/bitcoin.svg" alt="Bitcoin image">
                                    bitcoin
                                </td>
                                <td class="crypto-logo" style="width: 15%;">
                                    <img src="img/waves.svg" alt="Waves image">
                                    waves
                                </td>
                                <td class="crypto-logo" style="width: 15%;">
                                    <img src="img/ethereum.svg" alt="Ethereum image">
                                    ethereum
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.algo') }}</td>
                                <td class="green" style="width: 15%;">POS</td>
                                <td class="red" style="width: 15%;">POW</td>
                                <td class="green" style="width: 15%;">POS</td>
                                <td class="red" style="width: 15%;">POW ❯ POS</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.speed') }}</td>
                                <td class="green" style="width: 15%;">5 {{ $t('crypto.sec') }}</td>
                                <td class="red" style="width: 15%;">28 {{ $t('crypto.min') }}</td>
                                <td class="green" style="width: 15%;">5 {{ $t('crypto.sec') }}</td>
                                <td class="red" style="width: 15%;">7 {{ $t('crypto.min') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.fee') }}</td>
                                <td class="green" style="width: 15%;">$ 0.001</td>
                                <td class="red" style="width: 15%;">$ 0.1</td>
                                <td class="green" style="width: 15%;">$ 0.001</td>
                                <td class="red" style="width: 15%;">$ 0.08</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.node') }}</td>
                                <td class="green" style="width: 15%;">>15 000</td>
                                <td class="green" style="width: 15%;">10 000</td>
                                <td class="red" style="width: 15%;">350</td>
                                <td class="green" style="width: 15%;">12 000</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.mining') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.easy') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.hard') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.hard') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.hard') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.client') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.available') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.available') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.available') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.available') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.generating') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.no') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.contracts') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.no') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.dex') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.no') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.yes') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.no') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.energy') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.low') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.high') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.low') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.high') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.personality') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.no') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.no') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.available') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.available') }}</td>
                            </tr>
                            <tr>
                                <td style="width: 35%;">{{ $t('crypto.use') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.simply') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.hard') }}</td>
                                <td class="green" style="width: 15%;">{{ $t('crypto.simply') }}</td>
                                <td class="red" style="width: 15%;">{{ $t('crypto.hard') }}</td>
                            </tr>
                        </tbody>
                    </table>
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