<template>
  <div class="c-meta" :class="modifiers">
    <ul class="c-meta__items o-list-bare o-list-inline">
      <li
        class="c-meta__item o-list-inline__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <Icon
          class="c-meta__icon"
          :icon="item.icon"
          width="18"
          height="18"
        ></Icon>
        <span class="c-meta__text">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Meta",
  props: ["data", "is-inline"],
  components: {
    Icon
  },
  data() {
    return {
      items: this.data
    };
  },
  computed: {
    modifiers: function() {
      return {
        "c-meta--inline": this.isInline
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.meta";
</style>
