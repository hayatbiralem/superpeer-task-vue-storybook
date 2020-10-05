<template>
  <div :class="classes">
    <BaseButton
      :is-primary="true"
      :is-ghost="true"
      :is-block="true"
      @click.native="buttonClick"
      :disabled="disabled"
    >
      {{ buttonText }}
    </BaseButton>
  </div>
</template>

<script>
import states from "../../data/states";
import BaseButton from "../BaseButton";

export default {
  name: "BaseFormFieldText",
  props: {
    buttonText: {
      type: String
    },
    buttonClick: {
      type: Function
    },
    disabled: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: states[0],
      validator: function(value) {
        return states.indexOf(value) !== -1;
      }
    }
  },
  components: {
    BaseButton
  },
  computed: {
    classes() {
      return {
        "c-form__field": true,
        "c-form__field--button": true,
        "c-form__field--disabled": this.disabled,
        [`c-form__field--${this.state}`]: true
      };
    }
  }
};
</script>
