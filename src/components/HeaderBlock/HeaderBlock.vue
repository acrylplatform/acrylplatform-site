<template>
  <section class="imgflow">
    <div class="imgHeaderPosition">
      <div class="imgHeaderBlock">
        <v-row class="textBlock">
          <v-col
            cols="12"
            md="4"
            offset-md="1"
            offset-xl="0"
          >
            <div class="btnHeaderBlock">
              <div class="textHeaderBlock">
                <p class="headText">
                  {{ $t('header.head') }}
                </p>
                <p class="bodyText">
                  {{ $t('header.bodyText') }}
                </p>
              </div>
              <v-btn
                class="contentBtn"
                color="primaryColor"
                dark
                @click="$emit('switch-lang', 'en')"
              >
                {{ $t('header.subscribeBtn') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderBlock",
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
.imgflow {
  width: 100%;
  .imgHeaderPosition {
    width: 100%;
    margin: 50px auto 0;
    overflow: hidden;
    height: 480px;
    @include respond-to(medium-screens) {
      height: 430px;
    }
    @include respond-to(large-screens) {
      height: 480px;
    }
    @include respond-to(wide-screens) {
      height: 480px;
    }
    .imgHeaderBlock {
      background-image: url(/img/headerImage.svg);
      background-position: top right 30%;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      @include respond-to(large-screens) {
        align-items: flex-end;
      }
      .textImg {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include respond-to(large-screens) {
          margin-right: 150px;
        }
        h3 {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: white;
          text-transform: uppercase;
          text-align: center;
          @include respond-to(medium-screens) {
            font-size: 24px;
            line-height: 29px;
            width: 325px;
          }
          @include respond-to(wide-screens) {
            font-size: 24px;
            line-height: 29px;
            width: 421px;
          }
        }
        img {
          @include respond-to(medium-screens) {
            height: 252px;
          }
          @include respond-to(wide-screens) {
            height: 342px;
          }
        }
      }
    }
  }
  .textBlock {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    .logotype_main {
      margin: 40px 10px 30px;
    }

    .btnHeaderBlock {
      display: flex;
      flex-direction: column;
      align-items: center;
      @include respond-to(large-screens) {
        align-items: flex-start;
      }
      width: 100%;
      max-width: 400px;
      @include respond-to(medium-screens) {
        max-width: 600px;
      }
      margin: 0 auto;
      .textHeaderBlock {
        padding: 10px 0;
        .bodyText {
          text-align: center;
          @include respond-to(large-screens) {
            text-align: left;
          }
        }
        p {
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
          &.headText {
            text-align: center;
            @include respond-to(large-screens) {
              text-align: left;
            }
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            margin: 15px 0 30px;
          }
        }
      }
    }
  }
}
.modalOpen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  .modalCards {
    position: relative;
    width: 100%;
    height: 100vh;
    .modalCard {
      margin: 25% auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding: 20px;
      p {
        text-align: center;
      }
    }
  }
}
.popup {
  max-width: 450px;
  .contentBtn {
    color: aqua !important;
  }
  // background-color: $secondaryColor !important;
}
.popup-block {
  h4 {
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  height: 100%;
  background-color: $secondaryColor;
  display: flex;
  margin-bottom: -12px;
  margin-top: -12px;
  padding: 20px;
  justify-content: center;
  .subscription {
    .agreeCheckLabel {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
