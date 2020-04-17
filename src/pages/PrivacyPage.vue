<template>
  <div class="sectionPage">
    <h2>{{ $t('privacyPolicy.head') }}</h2>
    <p><span v-html="$t('privacyPolicy.block')" /></p>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.sectionPage {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 100px auto;
}
</style>
