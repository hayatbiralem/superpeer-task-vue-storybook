<template>
  <component :is="componentName" :style="style" :class="classes"></component>
</template>

<script>
// Load dynamic Vue components based on a prop string variable.
// https://medium.com/bitbond/vue-load-dynamic-components-based-on-a-string-variable-52f54860a0d

import * as components from "./icons/index";
import icons from "../data/icons";
import pascalCase from "../utils/pascalCase";

export default {
  name: "BaseIcon",
  components: {
    ...components // https://forum.vuejs.org/t/avoid-warning-invalid-value-for-option-components/61328/3
  },
  props: {
    icon: {
      type: String,
      default: icons[0],
      required: true,
      validator: value => {
        return icons.indexOf(pascalCase(value)) !== -1;
      }
    },
    size: { type: String },
    color: { type: String },
    backgroundColor: { type: String },
    extraClassNames: {
      type: String
    }
  },
  computed: {
    componentName() {
      return pascalCase(this.icon);
    },
    style() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
        width: this.size,
        height: this.size
      };
    },
    classes() {
      return {
        "svg-icon": true,
        [`${this.extraClassNames}`]: true
      };
    }
  }
};
</script>
