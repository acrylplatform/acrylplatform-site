<template>
  <section class="fields-of-app-block mxw1200">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="headSection pb-3 secondaryColor">
            {{ $t('fieldsOfAppliaction.head') }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="card in $t('fieldsOfAppliaction.blocks')"
          :key="`FieldsOfAppBlock-card_${card.id}`"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card
            class="mx-auto cardInBlock"
            width="288"
            height="120"
          >
            <p
              class="cardInBlock__header"
              v-html="card.header"
            />
            <img
              class="cardInBlock__img"
              :src="`/img/imgComponents/FieldsOfAppBlock/${card.icon}.png`"
            >
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="divider" />
    </v-container>
  </section>
</template>

<script>
export default {
  name: "FieldsOfAppBlock",
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/index";

  .fields-of-app-block{
    .cardInBlock{
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      transition: 1s;
      &:hover {
        transition: 1s;
        background-color: $yellowBgr;
      }
      p.cardInBlock__header{
        font-family: $font-family;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        padding-bottom: 0;
        margin: 0;
      }
      img.cardInBlock__img{
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    .divider{
      margin-top: 40px;
    }
  }
</style>
