<template>
  <v-app id="inspire">
    <!-- NAVICAGTION DRAWER -->
    <v-navigation-drawer
      fixed
      left
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
      style="z-index: 2147483646;"
    >
      <div class="nav-drawer">
        <div class="topBlock">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                <div class="logotype">
                  <router-link
                    to="/"
                  >
                    <img
                      class="vert-center widthMobil"
                      src="/img/Acryl-Logo.svg"
                      alt="acryl-logo"
                    >
                  </router-link>
                </div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />

          <div
            v-for="(item, i) in getmenuItems"
            :key="`drawerMenu${i}`"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <a
                    :href="`${item.link}`"
                    class="elHover"
                    :target="`${item.target}`"
                    rel="noreferrer noopener"
                  >{{ item.text }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
          </div>
          <div class="bottomBlock">
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <a
                    :href="`tel:${$t('addressItems.numberLink')}`"
                    class="noDecoration secondaryColor"
                  >{{ $t('addressItems.number') }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <v-btn
                    color="primaryColor"
                    dark
                    href="#targetOffer"
                  >
                    LEARN MORE
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title d-flex">
                  <div class="d-flex align-center pr-3">
                    <a
                      class="elHover"
                      @click="switchLang('en')"
                    >
                      En
                    </a>
                  </div>
                  <div class="d-flex align-center pr-3">
                    <a
                      class="elHover"
                      @click="switchLang('ru')"
                    >
                      Ru
                    </a>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <app-header
      :menu-items="menuItems"
      @changeDrawer="changeDrawerReverse"
      @switchLang="switchLang"
    />

    <!-- PAGES BLOCKS  -->
    <router-view />

    <footer-block
      :footer-items="menuItems"
      :address-items="$t('addressItems')"
    />
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader/AppHeader";
import FooterBlock from "@/components/FooterBlock/FooterBlock";

export default {
  name: "App",
  components: {
    AppHeader,
    FooterBlock
  },

  data() {
    return {
      menuItems: [
        {
          id: 1,
          text: "Client",
          link: "https://client.acrylplatform.com/",
          target: "_blank",
          click: "Click_more"
        },
        {
          id: 2,
          text: "Explorer",
          link: "https://explorer.acrylplatform.com/",
          target: "_blank",
          click: "Click_more"
        },
        {
          id: 3,
          text: "Checknode",
          link: "https://checknode.acrylminer.com/",
          target: "_blank",
          click: "Click_more"
        },
        {
          id: 4,
          text: "Blog",
          link: "https://medium.com/acrylplatform",
          target: "_blank",
          click: "Sublit_Blog1"
        },
        // {id: 5, text: "Контакты", link: "#contacts", target: "_self", click: "Click_contact"}
      ],
      drawer: false,
      addressItems: {
        city: "17/4, Fabrichnaya st. (12-13 fl.),",
        address: "Novosibirsk, 630007, Russia",
        number: "+7 (800) 511-37-15",
        numberLink: "+78005113715",
        email: "sales@acrylplatform.com",
      }
    };
  },
  computed: {
    getmenuItems() {
      return this.menuItems;
    }
  },
  methods: {
    changeDrawerReverse() {
      this.drawer = !this.drawer;
    },
    switchLang: function(lang) {
      this.$i18n.locale = lang
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/index.scss";
#inspire {
  font-family: $body-font-family !important;
  .nav-drawer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    .bottomBlock {
      .noDecoration {
        text-decoration: none;
      }
    }
  }
}
.logotype {
  width: 109px;
  margin: 0;
  padding: 0;
  img {
    width: 200px;
    height: auto;
  }
}
.v-btn__content {
  color: $secondaryColor !important;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: black;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):hover {
  background-color: #3c3c40;
}
</style>
