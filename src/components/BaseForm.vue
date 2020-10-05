<template>
  <div :class="classes">
    <div class="c-form__group" v-for="(field, index) in fields" :key="index">
      <label class="c-form__label">{{ field.label }}</label>
      <BaseFormField v-bind="field"></BaseFormField>
    </div>
  </div>
</template>

<script>
import BaseFormField from "./BaseFormField";

export const layouts = ["default", "horizontal"];

export default {
  name: "BaseForm",
  props: {
    layout: {
      type: String,
      default: layouts[0],
      required: true,
      validator: value => {
        return layouts.indexOf(value) !== -1;
      }
    },
    fields: {
      type: Array,
      default: () => [] // https://github.com/vuejs/vue/issues/1032#issuecomment-120212888
    }
  },
  components: {
    BaseFormField
  },
  computed: {
    classes() {
      return {
        "c-form": true,
        [`c-form--${this.layout}`]: true
      };
    }
  }
};
</script>
