<template>
  <component :is="componentName"></component>
</template>

<script>
// Load dynamic Vue components based on a prop string variable.
// https://medium.com/bitbond/vue-load-dynamic-components-based-on-a-string-variable-52f54860a0d

import * as components from "./icons/index";
import camelcase from "camelcase";
export default {
  name: "SvgIcon",
  components: {
    ...components // https://forum.vuejs.org/t/avoid-warning-invalid-value-for-option-components/61328/3
  },
  props: {
    icon: { type: String, required: true }
  },
  computed: {
    componentName: function() {
      return camelcase(this.icon, { pascalCase: true });
    }
  }
};
</script>
