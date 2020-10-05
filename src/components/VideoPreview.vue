<template>
  <div class="c-video-preview">
    <!-- .c-video-preview__figure -->
    <div class="c-video-preview__figure">
      <!-- .c-video-preview__image -->
      <img class="c-video-preview__image" v-bind="image" />
      <!-- /.c-video-preview__image -->

      <!-- .c-video-preview__controls -->
      <div class="c-video-preview__controls">
        <BaseButton
          v-for="(control, index) in controls"
          :key="index"
          :ref="'control-' + index"
          :is-round="true"
          :is-icon="true"
          :icon="control.icon"
          @click.native="toggleControll(index)"
        />
      </div>
      <!-- /.c-video-preview__controls -->
    </div>
    <!-- /.c-video-preview__figure -->

    <!-- .c-video-preview__input -->
    <div class="c-video-preview__input">
      <BaseFormField
        left-icon="line-user"
        v-bind="field"
        v-model="localInputValue"
      ></BaseFormField>
    </div>
    <!-- /.c-video-preview__input -->
  </div>
</template>

<script>
import BaseButton from "./BaseButton";
import BaseFormField from "./BaseFormField";

const controls = [
  { icon: "fill-microphone" },
  { icon: "fill-camera" },
  { icon: "fill-options" }
];

const field = {
  label: "Name",
  name: "name",
  type: "text",
  icon: "line-user"
};

export default {
  name: "VideoPreview",
  props: {
    image: {
      type: Object,
      required: true
    },
    inputValue: {
      type: String
    }
  },
  components: {
    BaseButton,
    BaseFormField
  },
  methods: {
    toggleControll: function(index) {
      this.$refs["control-" + index][0].toggle();
    }
  },
  data() {
    return {
      controls: controls,
      field: field,
      localInputValue: this.inputValue
    };
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.video-preview";
</style>
