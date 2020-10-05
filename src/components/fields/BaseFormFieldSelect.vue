<template>
  <div :class="classes">
    <select
      class="c-form__input c-form__input--select"
      v-model="localValue"
      :disabled="disabled"
      :name="name"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>

    <BaseIcon
      icon="fill-arrow-down"
      class="c-form__caret"
      width="18"
      height="18"
    ></BaseIcon>

    <span class="c-form__input-base" aria-hidden="true"></span>
  </div>
</template>

<script>
import states from "../../data/states";
import BaseIcon from "../BaseIcon";

export default {
  name: "BaseFormFieldSelect",
  props: {
    name: {
      type: String
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: states[0],
      validator: value => {
        return states.indexOf(value) !== -1;
      }
    },
    options: {
      type: Array,
      default: () => [] // https://github.com/vuejs/vue/issues/1032#issuecomment-120212888
    }
  },
  data: function() {
    return {
      localValue: this.value
    };
  },
  components: {
    BaseIcon
  },
  computed: {
    classes() {
      return {
        "c-form__field": true,
        "c-form__field--select": true,
        "c-form__field--disabled": this.disabled,
        [`c-form__field--${this.state}`]: true
      };
    }
  }
};
</script>
