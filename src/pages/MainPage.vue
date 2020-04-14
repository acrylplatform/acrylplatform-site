<template>
  <div>
    <header-block />
    <fields-of-app-block />
    <why-choose-acryl-block />
    <software-solutions-block />
    <ready-solutions-block />
    <form-block />
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock/HeaderBlock";
import FieldsOfAppBlock from "@/components/FieldsOfAppBlock/FieldsOfAppBlock";
import WhyChooseAcrylBlock from "@/components/WhyChooseAcrylBlock/WhyChooseAcrylBlock";
import SoftwareSolutionsBlock from "@/components/SoftwareSolutionsBlock/SoftwareSolutionsBlock";
import ReadySolutionsBlock from "@/components/ReadySolutionsBlock/ReadySolutionsBlock";
import FormBlock from "@/components/FormBlock/FormBlock";

export default {
  name: "App",

  components: {
    HeaderBlock,
    FieldsOfAppBlock,
    WhyChooseAcrylBlock,
    SoftwareSolutionsBlock,
    ReadySolutionsBlock,
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
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/index.scss";
</style>
