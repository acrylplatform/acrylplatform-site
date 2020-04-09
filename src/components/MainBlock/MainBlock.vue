<template>
  <section class="imgflow">
    <div class="imgHeaderPosition">
      <div class="imgHeaderBlock">
        <v-row class="textBlock">
          <v-col cols="12" md="4" offset-md="1" offset-xl="0">
            <div class="btnHeaderBlock">
              <div class="textHeaderBlock">
                <p class="headText">{{ text1 }}</p>
                <p class="bodyText">{{ text2 }}</p>
              </div>
              <v-dialog v-model="dialog" max-width="450" class="popup">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="contentBtn"
                    color="primaryColor"
                    dark
                    v-on="on"
                    @click="click_order()"
                    >{{ btn }}</v-btn
                  >
                </template>
                <v-container>
                  <v-row class="popup-block">
                    <v-col cols="12">
                      <h4>{{ head4 }}</h4>
                      <div class="subscription">
                        <v-text-field
                          dark
                          v-model="name"
                          label="Name"
                          full-width
                        ></v-text-field>
                        <v-text-field
                          dark
                          v-model="email"
                          label="E-mail"
                          full-width
                        ></v-text-field>
                        <v-text-field
                          dark
                          v-model="phone"
                          label="Phone"
                          full-width
                        ></v-text-field>
                        <v-checkbox dark v-model="agreeCheck">
                          <template v-slot:label>
                            <span
                              @click.stop
                              class="agreeCheckLabel"
                              v-html="agreeCheckLabel"
                            ></span>
                          </template>
                        </v-checkbox>
                        <div class="btn">
                          <v-btn
                            rounded
                            color="#FFFFFF primary"
                            light
                            @click="formSend()"
                            >Связаться с нами</v-btn
                          >
                        </div>
                        <div class="modalOpen" v-if="modalTrue">
                          <div class="modalCards">
                            <v-card
                              class="modalCard"
                              max-width="344"
                              max-height="344"
                              outlined
                            >
                              <p class="errorMessage" v-if="errorMessage">
                                {{ errorMessage }}
                              </p>
                              <p class="response" v-if="response">
                                {{ response }}
                              </p>
                              <v-btn rounded outlined @click="reversModal()"
                                >Закрыть</v-btn
                              >
                            </v-card>
                          </div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-dialog>
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
  data() {
    return {
      head: "Решение проблем бизнеса",
      text1: `ACRYL Platfotm`,
      text2: `Open-source blockchain platform that develops high-tech and easy-to-integrate solutions for business issues`,
      btn: `LEARN MORE`,
      absolute: true,
      overlay: false,
      name: "",
      email: "",
      phone: "",
      response: "",
      modalTrue: false,
      head4: "Узнайте, как применить блокчейн в вашем бизнесе",
      agreeCheckLabel: `
            Нажимая кнопку "Связаться с нами", я даю
            согласие на обработку своих
            персональных данных в соответствии с
            <a href="/privacy" style="color: #2EA9FB;">Политикой конфиденциальности</a>, а также
            соглашаюсь получать информацию о
            скидках и специальных предложениях на
            указанный e-mail и телефон.`,
      agreeCheck: false,
      dialog: false
    };
  },
  methods: {
    formSend: function() {
      if (!this.agreeCheck) {
        this.modalTrue = true;
        this.errorMessage =
          "Вы не согласились с обработкой персональных данных";
      } else {
        this.Submit_order();
        // if (this.name == '' || this.phone == '' || this.email == '') {
        //     // console.log("Запони все поля")
        //     this.errorMessage = 'Заполните все поля'
        //     this.response = ''
        //     this.modalTrue = true;
        // } else {
        let formData = new FormData();
        formData.append("fields[name_1]", this.name);
        formData.append("fields[543953_1][907777]", this.phone);
        formData.append("fields[543955_1][907789]", this.email);
        formData.append("form_id", "589840");
        formData.append("hash", "65d12632c23908dd5d503e1efe6733c3");
        axios
          .post("https://forms.amocrm.ru/queue/add", formData, {})
          .then(response => {
            console.log("response", response);
            this.errorMessage = "";
            this.response = "Мы с вами свяжемся в ближайшее время";
            this.modalTrue = true;
            this.name = "";
            this.phone = "";
            this.email = "";
          })
          .catch(error => {
            console.log(error);
            this.errorMessage = "";
            this.response = "Мы с вами свяжемся в ближайшее время";
            this.modalTrue = true;
            this.name = "";
            this.phone = "";
            this.email = "";
          });
        // }
      }
    },
    reversModal: function() {
      this.modalTrue = !this.modalTrue;
      this.errorMessage = "";
      this.response = "";
    },
    Submit_order() {
      // console.log("Submit_order");
      window.gaSendButton("Submit_order");
      window.yaSendButton("Submit_order");
    },
    click_order() {
      // console.log("Click_order");
      window.gaSendButton("Click_order");
      window.yaSendButton("Click_order");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
.imgflow {
  width: 100%;
  .imgHeaderPosition {
    width: 100%;
    max-width: 1600px;
    margin: 50px auto 0;
    overflow: hidden;
    height: 480px;
    @include respond-to(medium-screens) {
      height: 430px;
      margin-top: 70px;
    }
    @include respond-to(large-screens) {
      height: 480px;
      margin-top: 100px;
    }
    @include respond-to(wide-screens) {
      height: 480px;
      border-radius: 240px;
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
    // @include respond-to(large-screens) {
    //   margin-top: -480px;
    // }
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
        padding: 10px;
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
