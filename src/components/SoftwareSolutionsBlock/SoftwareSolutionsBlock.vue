<template>
  <section class="software-solution-block mxw1200">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="headSection pb-3 secondaryColor">
            {{ $t('softwareSolutions.head') }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in $t('softwareSolutions.column1')"
          :key="`SoftwareSolutionsBlock-item_${item.id}`"
          cols="12"
          md="4"
          class="blockContent"
        >
          <div class="block_img">
            <v-img
              :src="`/img/imgComponents/SoftwareSolutionsBlock/${item.icon}.png`"
            />
          </div>
          <div>
            <h3
              class="blockHeader"
              v-html="item.header"
            />
            <p
              class="blockText"
              v-html="item.text"
            />
          </div>
        </v-col>
        <v-col
          v-for="item in $t('softwareSolutions.column2')"
          :key="`SoftwareSolutionsBlock-item_${item.id}`"
          cols="12"
          md="4"
          class="blockContent"
        >
          <div class="block_img">
            <v-img
              :src="`/img/imgComponents/SoftwareSolutionsBlock/${item.icon}.png`"
            />
          </div>
          <div>
            <h3
              class="blockHeader"
              v-html="item.header"
            />
            <p
              class="blockText"
              v-html="item.text"
            />
          </div>
        </v-col> 
        <v-col
          v-for="item in $t('softwareSolutions.column3')"
          :key="`SoftwareSolutionsBlock-item_${item.id}`"
          cols="12"
          md="4"
          class="blockContent"
        >
          <div class="block_img">
            <v-img
              :src="`/img/imgComponents/SoftwareSolutionsBlock/${item.icon}.png`"
            />
          </div>
          <div>
            <h3
              class="blockHeader"
              v-html="item.header"
            />
            <p
              class="blockText"
              v-html="item.text"
            />
          </div>
        </v-col>
      </v-row>
      <v-divider class="divider" />
    </v-container>
  </section>
</template>

<script>
import locale from "../constants/locale";
export default {
  name: "SoftwareSolutionsBlock",
  i18n: {
    messages: {},
    sharedMessages: locale
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/index";
  
  .software-solution-block{
    .blockContent{
      display: flex;
      .block_img{
        width:67px;
        height: 67px;
        margin-right: 20px;
        @include respond-to(medium-screens) {
          width: 100px;
          height: 100px;
        }
      }
      .blockHeader{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
      }
      .blockText{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>
