<template>
  <div class="c-meta__item">
    <BaseIcon
      class="c-meta__icon"
      :icon="icon"
      width="18"
      height="18"
      v-if="icon"
    ></BaseIcon>
    <span class="c-meta__text" v-if="text">{{ text }}</span>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon";
import icons from "../data/icons";
import pascalCase from "../utils/pascalCase";

export default {
  name: "MetaListItem",
  props: {
    icon: {
      type: String,
      default: icons[0],
      validator: value => {
        if (!value) {
          return true;
        } else {
          return icons.indexOf(pascalCase(value)) !== -1;
        }
      }
    },
    text: {
      type: String
    }
  },
  components: {
    BaseIcon
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.meta-list-item";
</style>
