<template>
    <section id="contacts" class="footer-block">
        <v-container class="Container mxw1200">
            <v-row>
                <v-col cols='12' sm='6' lg='3' class="marwieght">
                    <h4>{{head1}}</h4>
                    <div class="directions">
                        <a v-for="(direction, i) in directions"
                            :key="`direction${i}`"
                            :href="`${direction.link}`"
                            target="_blank"
                            @click="`${SubmitBTN(direction.click)}`"><img  :src="`/img/directions/${direction.img}.svg`"></a>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3'>
                    <h4>{{head2}}</h4>
                    <div class="menu">
                        <a v-for="(menuItem, i) in footerItems" :key="`menuItem${i}`" :href="`${menuItem.link}`"  @click="`${SubmitBTN(menuItem.click)}`" target="`${menuItem.target}`">
                            {{menuItem.text}}
                        </a>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3'>
                    <h4>{{head3}}</h4>
                    <div class="address">
                        <p><b><a :href="`tel:${addressItems.numberLink}`" @click="`${Submit_tel2()}`">{{addressItems.number}}</a></b></p>
                        <p><b><a :href="`mailto:${addressItems.email}`" @click="`${Submit_EmailLetter()}`">{{addressItems.email}}</a></b></p>
                        <p class="op07">{{addressItems.city}}</p>
                        <p class="op07">{{addressItems.address}}</p>
                        <p class="op07">{{addressItems.support}}</p>
                        <p><b><a :href="`mailto:${addressItems.emailsupport}`" @click="`${Submit_EmailLetter()}`">{{addressItems.emailsupport}}</a></b></p>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3'>
                    <h4>{{head4}}</h4>
                    <div class="subscription">
                        <v-text-field
                            dark
                            v-model="email"
                            label="E-mail"
                            required ></v-text-field>
                        <v-checkbox dark v-model="agreeCheck" class="CheckBoxUp" >
                            <template v-slot:label>
                                <span @click.stop class="agreeCheckLabel" v-html="agreeCheckLabel"></span>
                            </template>
                        </v-checkbox>
                        <v-btn rounded outlined href="#targetSubscription" dark @click="formSubSend() ">Подписаться</v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row class="bottomFooterBlock">
                <v-col cols='12' sm='6' lg='3'>
                    <div class="directions mweight">
                        <a href="#topTarget"><img src="/img/directions/acryl-logo-white.svg"></a>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3'>
                    <div class="polit">
                        <router-link to="/privacy">Privacy Policy</router-link>
                        <router-link to="/cookie">Cookie Policy</router-link>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3' class="iconwieght">
                    <div class="social">
                        <a v-for="(item, i) in iconItems" :key="`iconSocial${i}`" :href="`${item.link}`" target="_blank" rel="noreferrer noopener" @click="`${SubmitBTN(item.click)}`">
                            <img :src="`/img/social/icon_social_${item.icon}.svg`" :alt="`${item.icon}`">
                        </a>
                    </div>
                </v-col>
                <v-col cols='12' sm='6' lg='3'>
                    <div class="copyright">
                        <p>© 2020 - ACRYL RUS, LLC.</p>
                        <div class="tooltip">
                            <v-tooltip top max-width="300" color="black">
                                <template v-slot:activator="{ on }">
                                    <span class="tooltipSpan" style="color: #2EA9FB;" v-on="on">Все права защищены, 18+</span>
                                </template>
                                <span>
                                    Все материалы данного сайта являются объектами авторского права (в том числе дизайн). Запрещается копирование, распространение или любое иное использование материалов сайта без предварительного согласия правообладателя. Нарушение авторских прав может влечь гражданско-правовую, административную и/или уголовную ответственность.
                                </span>
                            </v-tooltip>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <div class='modalOpen' v-if="modalTrue">
            <div class="modalCards">
                <v-card
                class="modalCard"
                max-width="344"
                max-height="344"
                outlined
                >
                <p>{{textError}}</p>
                <v-btn rounded outlined @click="reversModal()">Закрыть</v-btn>
                </v-card>
            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FooterBlock',
  props: ['footerItems', 'addressItems'],
  computed: {
    getFooterItems(){
      return this.footerItems
    }
  },
  data(){
      return {
          head1: "Направления",
          directions: [
              {id: 1, img: "Logo_ACRYL_Platform", link: "https://acrylplatform.com/", click: "Submit_platform"},
              {id: 2, img: "Logo_ACRYL_1C_Integration", link: "https://1c.acrylplatform.com/", click: "Submit_1c"},
              {id: 3, img: "Logo_ACRYL_CDN", link: "https://cdn.acrylplatform.com/", click: "Submit_CDN"},
              {id: 4, img: "Logo_ACRYL_Enterprise", link: "https://enterprise.acrylplatform.com/", click: "Submit_Enterprise"},
          ],
          head2: "Меню",
          head3: "Контакты",
          head4: "Подписывайтесь на обновления",
          iconItems: [
              {id: 1, icon: "ins", link: "https://www.instagram.com/acrylplatformofficial/", click: "Submit_IG"},
              {id: 2, icon: "fb", link: "https://www.facebook.com/acrylplatformofficial", click: "Submit_FB"},
              {id: 3, icon: "tw", link: "https://twitter.com/acrylplatform", click: "Submit_TW"},
              {id: 4, icon: "vk", link: "https://vk.com/acrylplatform", click: "Submit_VK"},
              {id: 5, icon: "tg", link: "https://t.me/Acrylplatform", click: "Submit_TG"},
              {id: 6, icon: "gh", link: "https://github.com/acrylplatform", click: "Submit_github"}
          ],
          email: '',
          agreeCheckLabel: `
            Нажимая кнопку «Подписаться», я даю
            согласие на обработку своих
            персональных данных в соответствии с
            <a href="/privacy" style="color: #2EA9FB;">Политикой конфиденциальности</a>, а также
            соглашаюсь получать информацию о
            специальных предложениях на
            указанный e-mail и телефон.`,
          agreeCheck: false,
          modalTrue: false,
          textError: ''
      }
  },
  methods: {
        formSubSend: function() {
            let formData = new FormData();
            formData.append('entry.2123031748', this.email);
            if(this.agreeCheck){
                axios.post('https://docs.google.com/forms/d/e/1FAIpQLSfSqsAZL0CRuD_gkMFBjzkORI7KNZlKj4MUh6QG86jVinu76w/formResponse', formData, { })
                    .then((response) => {
                        console.log("response", response);
                        this.email = '';
                        this.modalTrue = true;
                        this.textError = 'Форма успешно отправлена';
                    })
                    .catch((error) => {
                        console.log(error);
                        this.email = '';
                        this.modalTrue = true;
                        this.textError = 'Форма успешно отправлена';
                });
            }else{
                this.modalTrue = true;
                this.textError = 'Вы не согласились с обработкой персональных данных';
            }
            this.Submit_EmailSubscription();
        },
        reversModal: function() {
            this.modalTrue = !this.modalTrue;
            this.textError = ''
        },
        SubmitBTN(target){
            switch (target) {
            case 'Submit_EmailSubscription':
                this.Submit_EmailSubscription();
                break;
            case 'Submit_FB':
                this.Submit_FB();
                break;
            case 'Submit_TG':
                this.Submit_TG();
                break;
            case 'Submit_TW':
                this.Submit_TW()
                break;
            case 'Submit_IG':
                this.Submit_IG()
                break;
            case 'Submit_VK':
                this.Submit_VK()
                break;
            case 'Submit_github':
                this.Submit_github()
                break;
            case 'Submit_EmailLetter':
                this.Submit_EmailLetter()
                break;
            case 'Submit_tel2':
                this.Submit_tel2()
                break;
            case 'Click_order4':
                this.Click_order4()
                break;
            case 'Click_contact':
                this.Click_contact()
                break;
            case 'Submit_Blog2':
                this.Submit_Blog2()
                break;
            case 'Submit_support':
                this.Submit_support()
                break;
            case 'Click_more':
                this.Click_more()
                break;
            case 'Submit_platform':
                this.Submit_platform()
                break;
            case 'Submit_1c':
                this.Submit_1c()
                break;
            case 'Submit_CDN':
                this.Submit_CDN()
                break;
                case 'Submit_Enterprise':
                    this.Submit_Enterprise()
                    break;
            default:
                break;
            }
        },
        Submit_EmailSubscription(){
            console.log("Submit_EmailSubscription")
            window.gaSendButton("Submit_EmailSubscription");
            window.yaSendButton("Submit_EmailSubscription");
        },
        Submit_FB(){
            console.log("Submit_FB")
            window.gaSendButton("Submit_FB");
            window.yaSendButton("Submit_FB");
        },
        Submit_TG(){
            console.log("Submit_TG")
            window.gaSendButton("Submit_TG");
            window.yaSendButton("Submit_TG");
        },
        Submit_TW(){
            console.log("Submit_TW")
            window.gaSendButton("Submit_TW");
            window.yaSendButton("Submit_TW");
        },
        Submit_VK(){
            console.log("Submit_TW")
            window.gaSendButton("Submit_TW");
            window.yaSendButton("Submit_TW");
        },
        Submit_IG(){
            console.log("Submit_IG")
            window.gaSendButton("Submit_IG");
            window.yaSendButton("Submit_IG");
        },
        Submit_github(){
            console.log("Submit_github")
            window.gaSendButton("Submit_github");
            window.yaSendButton("Submit_github");
        },
        Submit_EmailLetter(){
            console.log("Submit_EmailLetter")
            window.gaSendButton("Submit_EmailLetter");
            window.yaSendButton("Submit_EmailLetter");
        },
        Submit_tel2(){
            console.log("Submit_tel2")
            window.gaSendButton("Submit_tel2");
            window.yaSendButton("Submit_tel2");
        },
        Click_order4(){
            console.log("Click_order4")
            window.gaSendButton("Click_order4");
            window.yaSendButton("Click_order4");
        },
        Click_contact(){
            console.log("Click_contact")
            window.gaSendButton("Click_contact");
            window.yaSendButton("Click_contact");
        },
        Submit_Blog2(){
            console.log("Submit_Blog2")
            window.gaSendButton("Submit_Blog2");
            window.yaSendButton("Submit_Blog2");
        },
        Submit_support(){
            console.log("Submit_support")
            window.gaSendButton("Submit_support");
            window.yaSendButton("Submit_support");
        },
        Click_more(){
            console.log("Click_more")
            window.gaSendButton("Click_more");
            window.yaSendButton("Click_more");
        },
        Submit_platform(){
            console.log("Submit_platform")
            window.gaSendButton("Submit_platform");
            window.yaSendButton("Submit_platform");
        },
        Submit_1c(){
            console.log("Submit_1c")
            window.gaSendButton("Submit_1c");
            window.yaSendButton("Submit_1c");
        },
        Submit_CDN(){
            console.log("Submit_CDN")
            window.gaSendButton("Submit_CDN");
            window.yaSendButton("Submit_CDN");
        },
      Submit_Enterprise(){
          console.log("Submit_Enterprise")
          window.gaSendButton("Submit_Enterprise");
          window.yaSendButton("Submit_Enterprise");
      }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
.footer-block{
    color: white;
    background-color: $secondaryColor;
    h4{
        opacity: 0.7;
        font-size: 16px;
        line-height: 20px;
        font-weight: 300;
    }
    .directions{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 20px 0;
        img{
            height: 20px;
            margin: 10px 0;
        }
    }
    .menu{
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        font-weight: 500;
        a{
            color: white;
            text-decoration: none;
            &:hover{text-decoration: underline;}
        }
    }
    .address{
        margin: 20px 0;
        p{
            padding: 0;
            margin: 0;
            &.op07{
                opacity: 0.7;
            }
        }
        a{
            color: white;
            text-decoration: none;
            &:hover{text-decoration: underline;}
        }
    }
    .subscription{
        margin: 20px 0;
        max-width: 300px;
        .v-input{
            margin: 0;
            padding: 0;
        }
        .fieldSub{
            color: white;
        }
    }
    .polit{
        display: flex;
        align-items: center;
        height: 100%;
        a{
            color: white;
            text-decoration: none;
            margin: 0 10px 0 0;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            &:hover{text-decoration: underline;}
        }
    }
    .social{
        display: flex;
        align-items: center;
        height: 100%;
        a{margin: 0 20px 0 0;}
    }
    .copyright{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
        height: 100%;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        p{
            margin: 0;
            padding: 0;
        }
        a{margin: 0 20px 0 0;}
    }
}
.agreeCheckLabel{
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 12px;
}
.modalOpen{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  .modalCards{
    position: relative;
    width: 100%;
    height: 100vh;
    .modalCard{
        margin: 25% auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        padding: 20px;
        p{
            text-align: center;
        }
    }
  }
}
@media (max-width: 489px) {
    .marwieght {
        margin-top: 27%;
    }
    .mweight {
        margin: -236% 0 !important;
        position: absolute;
    }
    .iconwieght {
        margin-top: -457%;
    }
}
</style>
