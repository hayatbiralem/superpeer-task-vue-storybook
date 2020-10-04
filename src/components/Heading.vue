<template>
  <h1 class="c-heading" v-if="prefix || text">
    <slot></slot>
    <span class="c-heading__prefix" v-if="prefix">{{ prefix }}</span>
    <span class="c-heading__text" v-if="text">{{ text }}</span>
  </h1>
</template>

<script>
export default {
  name: "Heading",
  props: ["prefix", "text"]
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.heading";
</style>
