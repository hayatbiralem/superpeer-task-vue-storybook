<template>
  <div class="c-form c-form--left-label">
    <div class="c-form__group" v-for="(field, index) in fields" :key="index">
      <label class="c-form__label">{{ field.label }}</label>
      <FormField :data="field"></FormField>
    </div>
  </div>
</template>

<script>
import FormField from "./FormField";

export default {
  name: "Form",
  props: ["data"],
  components: {
    FormField
  },
  data() {
    return {
      fields: this.data || {}
    };
  }
};
</script>
