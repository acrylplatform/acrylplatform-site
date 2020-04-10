<template>
  <v-app-bar
    app
    elevate-on-scroll
    short
    class="surface"
    pa-0
  >
    <v-container
      h-100
      pa-0
      align-center
      d-flex
    >
      <div class="display1200 h-100">
        <v-toolbar-title>
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
        </v-toolbar-title>
        <v-spacer />
        <div class="hidden-sm-and-down h-100">
          <v-toolbar-items>
            <div
              class="d-flex align-center pr-3"
              v-for="(item, i) in getmenuItems"
              :key="`menuItem${i}`"
            >
              <a
                :href="`${item.link}`"
                class="elHover"
                :target="`${item.target}`"
                rel="noreferrer noopener"
                @click="`${SubmitBTN(item.click)}`"
              >{{ item.text }}</a>
            </div>
            <div class="d-flex align-center pr-3">
              <a
                href="tel:+78005113715"
                class="disPrimary elHover"
                @click="Submit_tel1()"
              >+7 (800) 511-37-155</a>
            </div>
          </v-toolbar-items>
        </div>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="handleDrawer"
          name="menuDrawer"
          aria-label="menuDrawer"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    menuItems: {
      type: Array,
      default: null
    }
  },
  computed: {
    getmenuItems() {
      return this.menuItems;
    }
  },
  methods: {
    handleDrawer: function() {
      this.$emit("changeDrawer");
    },
    Click_order1() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Click_order1");
      window.yaSendButton("Click_order1");
    },
    Submit_tel1() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Submit_tel1");
      window.yaSendButton("Submit_tel1");
    },
    SubmitBTN(target) {
      switch (target) {
        case "Submit_support":
          this.Submit_support();
          break;
        case "Click_more":
          this.Click_more();
          break;
        case "Sublit_Blog1":
          this.Sublit_Blog1();
          break;
        case "Click_contact":
          this.Click_contact();
          break;
        default:
          break;
      }
    },
    Submit_support() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Submit_support");
      window.yaSendButton("Submit_support");
    },
    Click_more() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Click_more");
      window.yaSendButton("Click_more");
    },
    Sublit_Blog1() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Sublit_Blog1");
      window.yaSendButton("Sublit_Blog1");
    },
    Click_contact() {
      console.log("CLICK_ORDER");
      window.gaSendButton("Click_contact");
      window.yaSendButton("Click_contact");
    }
  }
};
</script>

<style lang="scss" scope>
@import "../../assets/styles/index";
.display1200 {
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.h-100 {
  height: 100%;
}
.logotype {
  width: 220px;
  display: flex;
  align-items: center;
  overflow: hidden;
  @include respond-to(medium-screens) {
    width: 220px;
  }
  .widthMobil {
    height: 18px;
    @include respond-to(medium-screens) {
      height: 20px;
    }
  }
}
.disPrimary {
  color: #3c3c40 !important;
  text-decoration: none;
  vertical-align: middle;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
}
.elHover {
  color: black !important;
  text-decoration: none;
  vertical-align: middle;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-style: normal;
  letter-spacing: 1px;
}
</style>
