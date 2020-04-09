<template>
    <section class="device-info-block mxw1200" id="infoblock">
        <v-container>
            <v-row class="height100">
                <v-col sm="12" md="8">
                    <div class="describeBlock">
                        <h2 class="headSection pb-3 secondaryColor">{{headSection}}</h2>
                        <p class="py-2 secondaryColor">{{textSection_1}}</p>
                    </div>
                    <div class="advantagesBlock">

                            <v-row>
                            <!-- <v-col v-for="(item, i) in advantages" :key="`advantageItem${i}`" :class="`advantageItem ch grid${item.id}`">
                                <span class="describe">{{item.describe}}</span>
                            </v-col> -->
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Стабильная доходность</p>
                                    <p class="visedit">Вывод средств в любой момент посредством внутренней биржи платформы</p></v-col> </v-card>
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Простая установка и обслуживание</p>
                                    <p class="visedit">Не требует много времени и специальных технических знаний при использовании</p></v-col> </v-card>
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Гарантия</p>
                                    <p class="visedit">12 месяцев на устройство + 24 месяца на обслуживание</p></v-col> </v-card>
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Низкое энергопотребление</p>
                                    <p class="visedit">60Вт - эквивалент обычной лампочки</p></v-col> </v-card>
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Компактность и бесшумность</p>
                                    <p class="visedit">20 x 3.5 x 20 см / Не более 1,5 дБА </p></v-col> </v-card>
                                <v-card class="coledit"><v-col><p style="font-weight: bold">Удобное приложение Acryl Client</p>
                                    <p class="visedit">Доступно в AppStore и GooglePlay</p></v-col> </v-card>
                            </v-row>

                    </div>
                </v-col>

                        <v-col cols="6" md="4">
                            <v-row class="wid100">
                 <div class="slider">
                               <div class="but1 bgbutton1" tabindex="1"></div>
                               <div class="but2 bgbutton2" tabindex="1"></div>
                               <div class="but3 bgbutton3" tabindex="1"></div>
                               <div class="img1" >
                                   <img src="img/node_1.jpg"/>
                               </div>
                               <div class="img2" >
                                   <img src="img/node_2.jpg"/>
                               </div>
                               <div class="img3">
                                   <img src="img/node_3.jpg"/>
                               </div>
                           </div>
                            </v-row>
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
            headSection: `Преимущества ACRYL Node`,
            textSection_1: `ACRYL Node – экономичен и нуждается в потреблении энергии, сравнимом с обычной лампочкой. 
                            Никаких сложных действий, простые шаги для того, чтобы начать зарабатывать. Текущая доходность от $150 в месяц. `,
            advantages: [
                {id: 1, icon: "icon_dollar", describe: "Стабильная доходность" },
                {id: 2, icon: "icon_garant", describe: "Гарантия"},
                {id: 3, icon: "icon_60wt", describe: "Компактность и бесшумность"},
                {id: 4, icon: "icon_gear", describe: "Простая установка и обслуживание"},
                {id: 5, icon: "icon_node", describe: "Малое энергопотребление"},
                {id: 6, icon: "icon_mobile", describe: "Удобное приложение"}
            ]
      }
  },
  methods: {
    Click_order2(){
      console.log("CLICK_ORDER")
      window.gaSendButton("Click_order2");
      window.yaSendButton("Click_order2");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
@import "../assets/styles/slider.scss";
.device-info-block{
    width: 100%;
    display: flex;
    padding: 20px 10px;
    .nodeImage{
        background-image: url(/img/NodeImg.png);
        width: 100%;
        min-height: 250px;
        @include respond-to(medium-screens) { 
            max-height: 500px;
            min-height: 500px;
        }
        height: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain; 
    }
    .advantagesBlock{
        .advantageItem{
            display: flex;
            img.icon{
                width: 60px;
                height: 41px;
                @include respond-to(medium-screens) {
                    width: 120px;
                    height: 80px;
                }
                @include respond-to(large-screens) {
                    width: 75px;
                    height: 48px;
                }
                @include respond-to(wide-screens) {
                    width: 120px;
                    height: 80px;
                }
            }
            .describe{
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 5%;
                margin-top: 5%;
            }
        }
    }
.advantageItem:hover {
        background-color: #fedd0e;
    }

.bgbutton1 {
      background-image: url(/img/node_1.jpg);
      background-repeat: no-repeat;
      background-size: contain;
          }
.bgbutton2 {
      background-image: url(/img/node_2.jpg);
      background-repeat: no-repeat;
      background-size: contain;
          }

.bgbutton3 {
        background-image: url(/img/node_3.jpg);
        background-repeat: no-repeat;
        background-size: contain;
            }
}
.coledit {
    width: 50%;
    height: 90px;
    text-align: center;
    padding: 15px;
    font-size: 16px;
}
.coledit:hover {
    width: 50%;
    height: 90px;
    text-align: center;
    padding: 0px;
    .visedit {
        visibility: inherit;
    }
}
.visedit {
    visibility: hidden;
    font-size: 12px;
    }
.v-card[data-v-b322a76e]:not(.v-sheet--tile):not(.v-card--shaped):hover {
    background: #fedd0e;
}
@media (max-width: 600px) {
    .coledit{
      width: 100%;
    }
    .coledit:hover{
        width: 100%;
    }
    .wid100 {
        width: 218%;
    }
}
</style>