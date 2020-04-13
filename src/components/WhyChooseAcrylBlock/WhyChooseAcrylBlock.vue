<template>
  <section class="why-choose-acryl-block mxw1200">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="headSection secondaryColor">
            {{ headSection }}
          </h2>
        </v-col>
      </v-row>
      <v-row :class="`cardActive__number${cardActive}`">
        <v-col
          v-for="card in blocks"
          :key="`WhyChooseAcrylBlock-card_${card.id}`"
          cols="12"
          md="4"
        >
          <v-card
            :id="`cardNumber${card.id}`"
            class="mx-auto cardInBlock"
            min-width="288"
            max-width="411"
            height="180"
            :style="`background-image: url(/img/imgComponents/WhyChooseAcrylBlock/${card.icon}.png);`"
            @click="checkActiveCard(card.id)"
          >
            <div
              class="yellowBgr"
              :style="`background-image: url(/img/imgComponents/WhyChooseAcrylBlock/${card.icon}.png);`"
            />
            <div class="textCard">
              <p
                class="cardInBlock__header"
                v-html="card.header"
              />
              <p
                class="cardInBlock__text"
                v-html="card.text"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="divider" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "WhyChooseAcrylBlock",
  data() {
    return {
      headSection: "Why choose acryl",
      blocks: [
        {id: 0, header: "Sustainable network", text: "Сoverage by the regional distribution of the ACRYL Node data centers around the world", icon: "001b"},
        {id: 1, header: "Modern technologies", text: "Fast (1000 tx/s), secure open-source network. Simple integration and smart contract support", icon: "002b"},
        {id: 2, header: "Stable value", text: "The price for data recording in the Acryl blockchain is stable and competitive due to constant cost for the Acryl coins", icon: "003b"}
      ],
      cardActive: 0
    }
  },
  methods: {
    checkActiveCard: function (id) {
      this.cardActive = id;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/index";

  %__generalStyleDivBgr{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  %__generalStyleText{
    font-family: $font-family;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    padding-bottom: 0;
    margin: 0;
    transition: .5s;
  }
  .why-choose-acryl-block{
    .cardActive__number0 #cardNumber0,
    .cardActive__number1 #cardNumber1,
    .cardActive__number2 #cardNumber2 {
      @include respond-to(specialMobile) {
        transition: 1s;
        .yellowBgr{
          opacity: 1;
        }
        p.cardInBlock__header{
          transition: 1s;
          color: $secondaryColor;
        }
        p.cardInBlock__text {
          transition: 1s;
          margin-bottom: 0;
          opacity: 1;
        }
      }
    }
    .cardInBlock{
      width: 100%;
      height: 100%;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .yellowBgr {
        @extend %__generalStyleDivBgr;
        transition: 1s;
        background-color: $yellowBgr2;
        background-blend-mode: screen;
        opacity: 0;
      }
      .textCard{
        @extend %__generalStyleDivBgr;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        p.cardInBlock__header{
          @extend %__generalStyleText;
          font-weight: 500;
          color: white;
        }
        p.cardInBlock__text{
          @extend %__generalStyleText;
          font-weight: 300;
          color: $secondaryColor;
          margin-bottom: -60px;
          opacity: 0;
          height: 65px;
        }
      }
      &:hover {
        transition: 1s;
        .yellowBgr{
          opacity: 1;
        }
        p.cardInBlock__header{
          transition: 1s;
          color: $secondaryColor;
        }
        p.cardInBlock__text {
          transition: 1s;
          margin-bottom: 0;
          opacity: 1;
        }
      }
    }
    .divider{
      margin-top: 40px;
    }
  }
</style>
