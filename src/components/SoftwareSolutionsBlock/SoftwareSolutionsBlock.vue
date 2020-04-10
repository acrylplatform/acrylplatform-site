<template>
  <section class="software-solution-block mxw1200">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="headSection pb-3 secondaryColor">
            {{ headSection }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in column1"
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
          v-for="item in column2"
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
          v-for="item in column3"
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
export default {
  name: "SoftwareSolutionsBlock",
  data() {
    return {
      headSection: "Software Solutions",
      column1: [
        {id:11, header: "Platform for tokenization", text: "Asset tokenization for financial companies based on the public or private blockchain.", icon: "11"},
        {id:12, header: "Communications and IoT solutions", text: "Software to automate processes, exchange and store data, and deal with fraudulent within the telecommunication industry.", icon: "12"},
        {id:13, header: "Distributed data storage", text: "A solution for storing any information in the decentralized blockchain network ACRYL.", icon: "13"},
      ],
      column2: [
        {id:21, header: "Supply chain management", text: "A solution for automation, management and control of all stages of delivery of goods and services that provides full transparency of transactions.", icon: "21"},
        {id:22, header: "Labeling of goods and services", text: "A solution for marking products and services in all production and logistic processes. Storing all information in the distributed registry.", icon: "22"},
        {id:23, header: "ACRYL Government registry", text: "A framework for building public registries based on the blockchain technology.", icon: "23"},
      ],
      column3: [
        {id:31, header: "Kross Card Smart Loyalty", text: "A package solution to launch a loyalty program. Unique stack of the technologies Blockchain, AR, VR, AI, Big Data Analysis.", icon: "31"},
        {id:32, header: "Monitoring and controlling", text: "System of monitoring and controlling of critical processes of the company: protection against theft and fraud.", icon: "32"},
        {id:33, header: "Gambling", text: "The blockchain technology helps to increase the credibility of in-game services and minimize fraud.", icon: "33"},
      ],
    }
  }
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
