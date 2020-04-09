<template>
    <div>
        <main-block></main-block>
        <!-- <project-info-block></project-info-block>
        <device-info-block></device-info-block>
        <compare-block></compare-block>
        <instruction-block></instruction-block>
        <client-block></client-block>
        <faq-block :addressItems="addressItems"></faq-block> -->
        <form-block></form-block>
    </div>
</template>

<script>
import MainBlock from '@/components/MainBlock'
// import ProjectInfoBlock from '@/components/ProjectInfoBlock'
// import DeviceInfoBlock from '@/components/DeviceInfoBlock'
// import CompareBlock from '@/components/CompareBlock'
// import InstructionBlock from '@/components/InstructionBlock'
// import ClientBlock from '@/components/ClientBlock'
// import FaqBlock from '@/components/FaqBlock'
import FormBlock from '@/components/FormBlock'

export default {
  name: 'App',

  components: {
    MainBlock,
    // ProjectInfoBlock,
    // DeviceInfoBlock,
    // CompareBlock,
    // InstructionBlock,
    // ClientBlock,
    // FaqBlock,
    FormBlock
  },

  data() {
    return {
      addressItems: {
        city: "г.Новосибирск",
        address: "ул. Фабричная 17/4 (12,13 этаж)",
        number: "8 (800) 511-3715",
        numberLink: "88005113715",
        email: "sales@acrylplatform.com"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
</style>