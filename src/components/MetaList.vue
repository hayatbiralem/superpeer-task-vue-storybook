<template>
  <div :class="classes">
    <div class="c-meta__items">
      <MetaListItem v-for="(item, index) in items" :key="index" v-bind="item" />
    </div>
  </div>
</template>

<script>
import MetaListItem from "./MetaListItem";

export const layouts = ["default", "inline"];
export const decorations = ["default", "bordered"];

export default {
  name: "MetaList",
  props: {
    layout: {
      type: String,
      default: layouts[0],
      required: true,
      validator: function(value) {
        return layouts.indexOf(value) !== -1;
      }
    },
    decoration: {
      type: String,
      default: decorations[0],
      required: true,
      validator: function(value) {
        if (!value) {
          return true;
        } else {
          return decorations.indexOf(value) !== -1;
        }
      }
    },
    items: {
      type: Array,
      default: () => [] // https://github.com/vuejs/vue/issues/1032#issuecomment-120212888
    },
    extraClassNames: {
      type: String
    }
  },
  components: {
    MetaListItem
  },
  computed: {
    classes() {
      return {
        "c-meta": true,
        [`c-meta--layout-${this.layout}`]: true,
        [`c-meta--style-${this.decoration}`]: true,
        [`${this.extraClassNames}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.meta-list";
</style>
