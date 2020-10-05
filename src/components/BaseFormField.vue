<template>
  <component v-bind="$props" :is="componentName"></component>
</template>

<script>
// Load dynamic Vue components based on a prop string variable.
// https://medium.com/bitbond/vue-load-dynamic-components-based-on-a-string-variable-52f54860a0d

import * as components from "./fields/index";

import pascalCase from "../utils/pascalCase";

import fields from "../data/fields";

import states from "../data/states";

export default {
  name: "BaseFormField",
  components: {
    ...components // https://forum.vuejs.org/t/avoid-warning-invalid-value-for-option-components/61328/3
  },
  props: {
    type: {
      type: String,
      default: fields[0],
      required: true,
      validator: value => {
        return fields.indexOf(pascalCase(value)) !== -1;
      }
    },
    name: {
      type: String
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    icon: {
      type: String
    },
    options: {
      type: Array,
      default: () => [] // https://github.com/vuejs/vue/issues/1032#issuecomment-120212888
    },
    buttonText: {
      type: String
    },
    buttonClick: {
      type: Function
    },
    disabled: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: states[0],
      validator: value => {
        return states.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    componentName() {
      return pascalCase("base-form-field-" + this.type);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.form";
</style>
