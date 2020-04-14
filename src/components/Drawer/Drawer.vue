<template>
  <v-navigation-drawer
    right
    absolute
    temporary
    v-model="thisDrawer"
  >
    <div
      v-for="(item, i) in getmenuItems"
      :key="`drawerMenu${i}`"
    >
      <a
        href="{item.link}"
        class="elHover"
      >{{ item.text }}</a>
    </div>
    <!-- <a class="elHover" href="#" @click="$emit('switch-lang', 'en')" v-if="this.$i18n.locale == 'ru'">English</a>
    <a class="elHover" href="#" @click="$emit('switch-lang', 'ru')" v-else>Russian</a> -->
    <div>
    <!-- <a>asdsad</a> -->
    </div>
  </v-navigation-drawer>
</template>

<script>
import locale from "../constansts/locale.js";
export default {
  name: "Drawer",
  props: {
    menuItems: {
      type: Array,
      default: null
    }
  },
  i18n: {
      messages: {},
      sharedMessages: locale
  },
  computed: {
    getmenuItems() {
      return this.menuItems;
    }
  },
  data() {
    return {
      thisDrawer: true
    };
  }
};
</script>
<style lang="scss" scope>
@import "../../assets/styles/index";
</style>
