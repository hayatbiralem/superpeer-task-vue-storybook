<template>
  <div class="c-docs-toolbar">
    <a href="/ui/" class="c-btn c-btn--primary" target="_blank">
      <span class="c-btn__label">Storybook</span>
    </a>
    <a
      href="https://github.com/hayatbiralem/superpeer-task-vue-storybook"
      class="c-btn c-btn--icon"
      target="_blank"
    >
      <BaseIcon icon="fill-github" class="c-btn__icon" color="#333" size="24" />
    </a>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon";

export default {
  name: "DocsToolbar",
  props: {},
  components: {
    BaseIcon
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.docs-toolbar";
</style>
