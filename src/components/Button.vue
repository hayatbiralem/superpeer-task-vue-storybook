<template>
  <button
    class="c-btn"
    :class="classes"
    type="button"
    :style="style"
    @click="onClick"
  >
    <Icon class="c-btn__icon" :icon="icon" v-if="icon"></Icon>
    <span class="c-btn__label" v-if="label">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Button",
  props: {
    label: {
      type: String
    },
    isPrimary: {
      type: Boolean,
      default: false
    },
    isHoverPrimary: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    },
    isIcon: {
      type: Boolean,
      default: false
    },
    isRound: {
      type: Boolean,
      default: false
    },
    isGhost: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      localIsActive: this.isActive,
      isHover: false
    };
  },
  methods: {
    toggle: function() {
      this.localIsActive = !this.localIsActive;
    },
    onClick() {
      this.$emit("onClick");
    }
  },
  computed: {
    classes: function() {
      return {
        "c-btn--primary": this.isPrimary,
        "c-btn--hover-primary": this.isHoverPrimary,
        "c-btn--block": this.isBlock,
        "c-btn--icon": this.isIcon,
        "c-btn--round": this.isRound,
        "c-btn--ghost": this.isGhost,
        "c-btn--active": this.localIsActive,
        [`c-btn--${this.size}`]: true
      };
    },
    style() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.buttons";
</style>
