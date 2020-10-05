<template>
  <div :class="classes">{{ text }}<slot></slot></div>
</template>

<script>
export default {
  name: "BaseTip",
  props: {
    text: {
      type: String,
      required: true
    },
    extraClassNames: {
      type: String
    }
  },
  computed: {
    classes() {
      return {
        "c-tip": true,
        [`${this.extraClassNames}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.tip";
</style>
