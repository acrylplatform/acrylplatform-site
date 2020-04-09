<template>
    <v-navigation-drawer right absolute temporary v-model="thisDrawer">
        <div v-for="(item, i) in getmenuItems" :key="`drawerMenu${i}`">
            <a href={item.link} class="elHover">{{item.text}}</a>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: ['menuItems'],
  computed: {
    getmenuItems(){
      return this.menuItems
    }
  },
  data() {
      return {
          thisDrawer: true
      }
  }
}
</script>

<style lang="scss" scope>
@import "../assets/styles/index.scss";
</style>