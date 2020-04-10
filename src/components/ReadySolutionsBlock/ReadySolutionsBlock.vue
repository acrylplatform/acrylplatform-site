<template>
  <section class="ready-solutions-block mxw1200">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="headSection secondaryColor">
            {{ headSection }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in blocks"
          :key="`ReadySolutionsBlock_${item.id}`"
          cols="12"
          lg="4"
        >
          <v-card
            class="mx-auto cardInBlock"                 
            :style="`background-image: url(/img/imgComponents/ReadySolutionsBlock/${item.icon}.png);`"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "ReadySolutionsBlock",
  data() {
    return {
      headSection: "Ready solutions",
      blocks:[
        {id:0, icon:"node"},
        {id:1, icon:"1c"},
        {id:2, icon:"cdn"}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/index";  
  
  .ready-solutions-block{
    padding-bottom: 40px;
    .cardInBlock{
      width: 288px;
      height: 185px;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @include respond-to(medium-screens) {
        width: 405px;
        height: 256px;
      }
    }
  }
</style>
