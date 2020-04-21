<template>
  <section class="form-block imgBlock">
    <div id="targetOffer" />
    <div class="mxw1200 main-block">
      <v-container>
        <v-row
          class="formBlock"
        >
          <v-col>
            <h2
              class="headSection pb-3 secondaryColor "
              align="center"
            >
              {{ $t('formBlock.head') }}
            </h2>
          </v-col>
          <v-col
            style="min-width: 304px; max-width: 800px; padding-bottom: 0"
          >
            <div class="fmodel">
              <v-text-field
                v-model="name"
                :label="$t('formBlock.name')"
                name="name"
                outlined
                style="margin: 0 10px;"
              />
              <v-text-field
                v-model="email"
                :label="$t('formBlock.mail')"
                name="email"
                outlined
                style="margin: 0 10px;"
              />
              <v-text-field
                v-model="phone"
                :label="$t('formBlock.phone')"
                name="phone"
                outlined
                style="margin: 0 10px;"
              />
            </div>
          </v-col>
          <v-col
            class="checkBlock"
            cols="12"
          >
            <v-checkbox
              v-model="agreeCheck"
              class="CheckBoxUp"
            >
              <template #label>
                <span
                  @click.stop
                  class="agreeCheckLabel"
                  v-html="$t('formBlock.agreeCheckLabel')"
                />
              </template>
            </v-checkbox>
            <div class="d-flex align-center ">
              <v-btn
                class="border-radius: 12px;"
                color="primaryColor"
                dark
                block
                @click="formSend"
              >
                {{ $t('formBlock.btnText') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FormBlock",
  data() {
    return {
      valid: false,
      name: "",
      phone: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      response: "",
      errorMessage: "",
      modalTrue: false,
      agreeCheck: false
    };
  },
  methods: {
    formSend: function() {
      if (!this.agreeCheck) {
        this.modalTrue = true;
        this.errorMessage =
          "Вы не согласились с обработкой персональных данных";
      } else {
        // this.Submit_order();
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
        formData.append("form_id", "606424");
        formData.append("hash", "9dca6b952100937d1cf669c8f56122a7");
        axios
          .post("https://forms.amocrm.ru/queue/add", formData, {})
          .then(response => {
            console.log("response", response);
            this.errorMessage = "";
            this.response =
              "Спасибо за оставленную заявку! Наш менеджер свяжется с Вами в ближайшее время.";
            this.modalTrue = true;
            this.name = "";
            this.phone = "";
            this.email = "";
          })
          .catch(error => {
            console.log(error);
            this.errorMessage = "";
            this.response =
              "Спасибо за оставленную заявку! Наш менеджер свяжется с Вами в ближайшее время.";
            this.modalTrue = true;
            this.name = "";
            this.phone = "";
            this.email = "";
          });
      }
    },
    reversModal: function() {
      this.modalTrue = !this.modalTrue;
      this.errorMessage = "";
      this.response = "";
    },
    Submit_order() {
      console.log("Submit_order");
      window.gaSendButton("Submit_order");
      window.yaSendButton("Submit_order");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
#targetOffer {
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
}
.agreeCheckLabel {
  font-size: 11px;
  line-height: 16px;
}
.form-block {
  background-image: url(/img/imgComponents/FormBlock/headerImage.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  padding: 20px 10px;
  position: relative;
  .height100 {
    height: 100%;
  }
  .maxWidth {
    max-width: 325px;
    margin-left: auto;
    margin-right: auto;
  }
  .responseError {
    padding-top: 10px;
    .errorMessage {
      color: red;
    }
    .response {
      color: $secondaryColor;
    }
  }
}

.imgBlock {
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  .main-block{
    width:100%;
      .formBlock{
    display: flex;
    flex-direction: column;
    justify-content:center;
    .fmodel{
      display: flex;
      flex-direction: column;
      justify-content:center;
      @include respond-to(medium-screens) {
        flex-direction: row;
        margin-left: -10px;
      }
    }
    .checkBlock{
      display: flex;
      flex-direction: column;
      justify-content:center;
      max-width: 600px;
      padding-top: 0;
      @include respond-to(medium-screens) {
        flex-direction: row-reverse;
      }
      .CheckBoxUp{
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
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

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: black;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):hover {
  background-color: #3c3c40;
}
</style>
