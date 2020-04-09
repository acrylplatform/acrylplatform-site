<template>
    <section class="project-info-block mxw1200" id="clientblock">
        <div id="targetInfo"></div>
        <v-container>
            <v-row class="">

                <v-col cols="12" sm="7">
                    <div class="describeBlock">
                        <h2 class="headSection pb-3 secondaryColor">{{headSection}}</h2>
                        <p class="py-0 secondaryColor">{{textSection_1}}</p>
                        <p class="py-0 text-bold secondaryColor">{{textSection_2}}</p>
                        <ul class="py-0 secondaryColor"><li>{{textSection_3}}</li></ul>
                        <ul class="py-0 secondaryColor"><li>{{textSection_4}}</li></ul>
                        <ul class="py-0 secondaryColor"><li>{{textSection_5}}</li></ul>
                        <ul class="py-0 secondaryColor"><li>{{textSection_6}}</li></ul>
                        <ul class="py-0 secondaryColor"><li>{{textSection_7}}</li></ul>
                        <a href="https://play.google.com/store/apps/details?id=com.acrylplatform.client" style=""><img src="/../img/google_play.png" class="googledownload"></a>
                        <a href="https://apps.apple.com/ru/app/acryl-client/id1457382110"><img src="/../img/app_store.png" class="appstoredownload"></a>
                    </div>
                </v-col>
                <v-col cols="12" sm="5">
                    <div class="ClientImage"></div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: 'ProjectInfoBlock',
        data(){
            return {
                headSection: `Acryl Client`,
                textSection_1: `Приложение «ACRYL Client» является официальным программным обеспечением и разработано для массового использования. Клиент доступен в форматах для настольных компьютеров и мобильных устройств и его установка не займет у вас много времени.`,
                textSection_2: `Возможности «ACRYL Client»:`,
                textSection_3: ` Посмотреть баланс, цену монет Acryl в USD и других ассетов, доступных на вашем счету.`,
                textSection_4: `Узнать о произведенных кошельком транзакциях: Отправленные, Полученные, Обмен, Лизинг, Выпуск токенов.`,
                textSection_5: `Использовать наш DEX - децентрализованную биржу: выставить ордера Acryl/BTC, Acryl/USD и др. на продажу или покупку.`,
                textSection_6:  `Осуществить быстрый обмен, например, вы сможете обменять Acryl на BTC, не дожидаясь ордера, по средневзвешенной цене биржи.`,
                textSection_7:  `И даже выпустить собственный токен на нашем блокчейне.`,
                indicators: [
                    {id: 1, number: 10, describe: "стран" },
                    {id: 2, number: 30, describe: "городов"},
                    {id: 3, number: 1100, describe: "устройств"}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/index.scss";
    #targetInfo{
        position: absolute;
        top: -50px;
        left: 0;
        right: 0;
    }
    .project-info-block{
        position: relative;
        width: 100%;
        display: flex;
        padding: 40px 10px 20px 10px;
        .ClientImage{
            background-image: url(/img/acryl_client.png);
            width: 100%;
            min-height: 250px;
            @include respond-to(medium-screens) {
                min-width: 519px;
                min-height: 449px;
            }
            height: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        .appstoredownload{
            @include respond-to(medium-screens) {
                max-height: 100px;
                min-height: 50px;
                margin-left: 3%;
            }
            height: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: contain;
            max-width: 166px;
            max-height: 50px;
        }
        .googledownload{
            @include respond-to(medium-screens) {
                max-height: 100px;
                min-height: 50px;
                margin-top: 2%;
            }
            height: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: contain;
            max-width: 166px;
            max-height: 50px;
        }
        }
    .height100{
        height: 100%;
    }
</style>