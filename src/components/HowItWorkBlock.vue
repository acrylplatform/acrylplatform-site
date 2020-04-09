<template>
    <section class="how-it-work-block mxw1200">
        <v-container>
            <v-row class="height100">
                <v-col cols="12" sm="5" class="d-none d-sm-flex"> 
                    <div class="mapImage"></div>
                </v-col>
                <v-col cols="12" sm="7">
                    <div class="describeBlock">
                        <h2 class="headSection pb-3 secondaryColor">{{headSection}}</h2>
                        <p class="py-2 secondaryColor">{{textSection_1}}</p>
                    </div>
                    <div class="blockScheme">
                        <div class="schemeCard firstCard primaryColor"><span>{{firstCard}}</span></div>
                        <div class="equal">
                            <img class="hidden-md-and-up" src="/img/rowsEqual.svg" alt="rows-equal">
                            <img class="hidden-sm-and-down hidden-lg-and-up" src="/img/rowsEqual_tablet.svg" alt="rows-equal">
                            <img class="hidden-md-and-down" src="/img/rowsEqual_desktop.svg" alt="rows-equal">
                        </div>
                        <div class="schemeCard secondCard primaryColor"><span>{{secondCard}}</span></div>
                    </div>
                    <div class="underBlockScheme">
                        <div class="underCardScheme underFirstCard"><span>{{underFirstCard}}</span></div>
                        <div class="underCardScheme underSecondCard"><span>{{underSecondCard}}</span></div>
                    </div>
                    <div class="buttonsBlock py-5">
                        <v-btn rounded color="primary secondaryColor" class="mx-2"  href="#targetOffer" @click="Click_order3()">Заказать</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
  name: 'HowItWorkBlock',
  data(){
      return {
            headSection: `Принцип работы`,
            textSection_1: `За счет чего формируется вознаграждение владельцам ACRYL NODE?`,
            firstCard: `Держатели ACRYL Node`,
            secondCard: `Бизнес`,
            underFirstCard: `Формируют блокчейн сеть ACRYL`,
            underSecondCard: `Платит за использование блокчейн сети ACRYL`
      }
  },
  methods: {
    Click_order3(){
      console.log("CLICK_ORDER")
      window.gaSendButton("Click_order3");
      window.yaSendButton("Click_order3");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.how-it-work-block{
    width: 100%;
    display: flex;
    padding: 20px 10px;
    .mapImage{
        background-image: url(/img/earthMapv2.png);
        width: 100%;
        min-height: 250px;
        @include respond-to(medium-screens) { 
            max-height: 300px;
            min-height: 300px;
        }
        height: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain; 
    }
    .blockScheme{
        min-height: 100px;
        display: flex;
        align-items: center;
        .schemeCard{
            width: 100%;
            height: 80px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 10px 29px;
            span{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                @include respond-to(medium-screens) {
                    font-size: 16px;
                    line-height: 18px;
                }
                @include respond-to(large-screens) {
                    font-size: 20px;
                    line-height: 24px;
                }
            }
        }
        .equal{
            margin: 0 10px;
        }
    }
    .underBlockScheme{
        min-height: 50px;
        display: grid;
        grid-gap: 25px;
        grid-template-columns: 1fr 1fr;
        .underCardScheme{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                text-align: center;
                font-style: normal;
                font-weight: 300;
                font-size: 12px;
                line-height: 15px;
                @include respond-to(medium-screens) {
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }
    }
    .buttonsBlock{
        display: flex;
    }
}
.height100{
    height: 100%;
}
</style>