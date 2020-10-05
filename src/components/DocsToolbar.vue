<template>
  <div class="c-docs-toolbar">
    <a
      href="https://superpeer-task-vue-storybook.vercel.app/"
      class="c-btn c-btn--icon c-btn--primary c-btn--round"
      target="_blank"
      title="Storybook"
    >
      <BaseIcon icon="fill-storybook" class="c-btn__icon" size="24" />
    </a>
    <a
      href="https://codesandbox.io/s/superpeer-task-vue-storybook-1mhxp"
      class="c-btn c-btn--icon c-btn--primary c-btn--round"
      target="_blank"
      title="CodeSandbox"
    >
      <BaseIcon icon="fill-codesandbox" class="c-btn__icon" size="24" />
    </a>
    <a
      href="https://github.com/hayatbiralem/superpeer-task-vue-storybook"
      class="c-btn c-btn--icon c-btn--primary c-btn--round"
      target="_blank"
      title="Github"
    >
      <BaseIcon icon="fill-github" class="c-btn__icon" size="24" />
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
