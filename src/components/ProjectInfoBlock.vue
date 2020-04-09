<template>
    <section class="project-info-block mxw1200">
        <div id="targetInfo"></div>
        <v-container>
            <v-row class="">
                <v-col cols="12" sm="5">
                    <div class="mapImage"></div>
                </v-col>
                <v-col cols="12" sm="7" class="mede">
                    <div class="describeBlock">
                        <h2 class="headSection pb-3 secondaryColor">{{headSection}}</h2>
                        <p class="py-2 secondaryColor">{{textSection_1}}</p>
                        <p class="py-2 secondaryColor">Размести у себя дома компактный и бесшумный дата-центр <a class="py-2 text-bold secondaryColor"> ACRYL Node* </a>, стань частью сети и получай за это вознаграждение.</p>
                        <p class="py-2 secondaryColor">{{textSection_3}}</p>
                        <p class="py-2 text-bold secondaryColor">{{textSection_4}}</p>
                    </div>
                    <div class="numbersBlock">
                        <div v-for="(indecator, i) in indicators" :key="`indecator${i}`" :class="`indecator grid${indecator.id}`">
                            <span class="number">{{indecator.number}}</span>
                            <span class="describe">{{indecator.describe}}</span>
                        </div>
                    </div>
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
            headSection: `Описание проекта`,
            textSection_1: `Наша цель — создать самую распределенную и устойчивую сеть для записи данных бизнеса. (Наша цель — создать самую распределенную и устойчивую сеть (блокчейн) для записи данных бизнеса.) `,
          //  textSection_2: `Размести у себя дома компактный и бесшумный дата-центр ACRYL Node, стань частью сети и получай за это вознаграждение. `,
            textSection_3: `Это новый вид бизнеса, в котором мы вместе создаем децентрализованное пространство, где каждый участник получает доход.`,
            textSection_4: `*До 31 марта действует специальное предложение на приобретение ACRYL Node по старому курсу доллара: $1 = 64₽.`,
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
    .mapImage{
        background-image: url(/img/mapv2.png);
        width: 100%;
        min-height: 250px;
        @include respond-to(medium-screens) { 
            max-height: 500px;
            min-height: 410px;
        }
        height: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain; 
    }
    .mapImage:hover {
      //   transform: scale(1.5);
        background-image: url(/img/map_animate.png);
        width: 151%;
        min-height: 250px;
        @include respond-to(medium-screens) {
            max-height: 500px;
            min-height: 410px;
        }
        height: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain; ;
        margin-left: -48%;
    //    margin-top: 44%;
    }
    .numbersBlock{
        display: grid;
        grid-gap: 10px;
        grid-template-areas: 
                "grid1 grid2 grid2 grid2 grid2"
                "grid3 grid3 grid3 grid3 grid3";
        .grid1{ grid-area: grid1}
        .grid2{ grid-area: grid2}
        .grid3{ grid-area: grid3}
        @include respond-to(medium-screens) { 
            grid-template-areas: 
                "grid1 grid2 grid3 grid3 grid3 grid3 grid3";
        }
        .indecator{
            display: flex;
            flex-direction: column;
            .number{
                font-weight: bold;
                font-size: 62px;
                line-height: 76px;
                color: #FFD900;
            }
            .describe{
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                color: $secondaryColor;
            }
        }
    }
}
.height100{
    height: 100%;
}
@media (max-width: 960px) {
    .project-info-block {
        .mapImage {
            visibility: hidden;
        }
    }
}
@media (max-width: 600px) {
   .mede {
       margin-top: -90%;
   }
}

</style>