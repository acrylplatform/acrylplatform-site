<template>
  <v-app-bar
    app
    elevate-on-scroll
    short
    class="surface i-header"
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
            <a href="/">
              <img
                class="vert-center widthMobil"
                src="/img/Acryl-Logo.svg"
                alt="acryl-logo"
              >
            </a>
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
              >
                {{ item.text }}
              </a>
            </div>
            <div class="d-flex align-center pr-3">
              <a
                href="tel:+78005113715"
                class="disPrimary elHover"
                @click="Submit_tel1()"
              >+7 (800) 511-37-15</a>
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
