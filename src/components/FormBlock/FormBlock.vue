<template>
  <section class="form-block imgBlock">
    <div id="targetOffer" />
    <v-container>
      <v-row class="height100">
        <v-col
          cols="12"
          offset-sm="5"
          md="3"
          style="background-color: white; min-width: 304px; min-height: 456px; max-width: 355px; max-height: 528px; margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: auto; padding: 30px;"
        >
          <h2
            class="headSection pb-3 secondaryColor "
            align="center"
          >
            {{ $t('formBlock.head') }}
          </h2>
          <div class="maxWidth">
            <v-text-field
              v-model="name"
              :label="$t('formBlock.name')"
              name="name"
              required
            />
            <v-text-field
              v-model="email"
              :label="$t('formBlock.mail')"
              name="email"
              required
            />
            <v-text-field
              v-model="phone"
              :label="$t('formBlock.phone')"
              name="phone"
              required
            />
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
                href="#targetSend"
                @click="formSend()"
              >
                {{ $t('formBlock.head') }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
      class="modalOpen"
      v-if="modalTrue"
    >
      <div class="modalCards">
        <v-card
          class="modalCard"
          max-width="344"
          max-height="344"
          outlined
        >
          <p
            class="errorMessage"
            v-if="errorMessage"
          >
            {{ errorMessage }}
          </p>
          <p
            class="response"
            v-if="response"
          >
            {{ response }}
          </p>
          <v-btn
            rounded
            outlined
            @click="reversModal()"
          >
            Close
          </v-btn>
        </v-card>
      </div>
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
        formData.append("form_id", "585211");
        formData.append("hash", "9b47fca870a99ee10cbd330676441105");

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
        // }
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
  background-image: url(/img/form_photo.png);
  width: 100%;
  @include respond-to(medium-screens) {
    max-height: 548px;
    min-height: 548px;
  }
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  //  background-size: cover;
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
