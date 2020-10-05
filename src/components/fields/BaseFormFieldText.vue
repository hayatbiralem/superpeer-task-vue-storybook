<template>
  <div :class="classes">
    <BaseIcon
      class="c-form__icon c-form__icon--left"
      :icon="icon"
      width="24"
      height="24"
      v-if="icon"
      :name="name"
    ></BaseIcon>

    <input
      class="c-form__input c-form__input--text"
      type="text"
      v-model="localValue"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <span class="c-form__input-base" aria-hidden="true"></span>
  </div>
</template>

<script>
import states from "../../data/states";
import BaseIcon from "../BaseIcon";

export default {
  name: "BaseFormFieldText",
  props: {
    name: {
      type: String
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    icon: {
      type: String
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
    }
  },
  data() {
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
        "c-form__field--text": true,
        "c-form__field--disabled": this.disabled,
        "c-form__field--icon": this.icon,
        [`c-form__field--${this.state}`]: true
      };
    }
  }
};
</script>
