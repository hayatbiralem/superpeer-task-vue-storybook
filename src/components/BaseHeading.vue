<template>
  <h1 :class="classes" v-if="prefix || text">
    <slot></slot>
    <span class="c-heading__prefix" v-if="prefix">{{ prefix }}</span>
    <span class="c-heading__text" v-if="text">{{ text }}</span>
  </h1>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    prefix: {
      type: String
    },
    text: {
      type: String
    },
    extraClassNames: {
      type: String
    }
  },
  computed: {
    classes() {
      return {
        "c-heading": true,
        [`${this.extraClassNames}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.heading";
</style>
