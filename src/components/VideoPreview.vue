<template>
  <div class="c-video-preview">
    <!-- .c-video-preview__figure -->
    <div class="c-video-preview__figure">
      <!-- .c-video-preview__image -->
      <img
        class="c-video-preview__image"
        :src="image.src"
        :srcset="image.srcset"
        :alt="image.alt"
      />
      <!-- /.c-video-preview__image -->

      <!-- .c-video-preview__controls -->
      <div class="c-video-preview__controls" v-if="controls">
        <!-- .c-icon-controls -->
        <div class="c-icon-controls">
          <ul
            class="c-icon-controls__items o-list-bare o-list-inline u-margin-bottom-none"
          >
            <li
              class="c-icon-controls__item o-list-inline__item"
              v-for="(control, index) in controls"
              :key="index"
            >
              <Button
                :ref="'control-' + index"
                :is-round="true"
                :is-icon="true"
                :icon="control.icon"
                @click.native="toggleControll(index)"
              ></Button>
            </li>
          </ul>
        </div>
        <!-- /.c-icon-controls -->
      </div>
      <!-- /.c-video-preview__controls -->
    </div>
    <!-- /.c-video-preview__figure -->

    <!-- .c-video-preview__input -->
    <div class="c-video-preview__input">
      <FormField type="text" left-icon="line-user" :data="input"></FormField>
    </div>
    <!-- /.c-video-preview__input -->
  </div>
</template>

<script>
import Button from "./Button";
import FormField from "./FormField";

export default {
  name: "VideoPreview",
  props: ["data"],
  components: {
    Button,
    FormField
  },
  methods: {
    toggleControll: function(index) {
      this.$refs["control-" + index][0].toggle();
    }
  },
  data() {
    return {
      image: this.data.image || null,
      controls: this.data.controls || null,
      input: this.data.input || null
    };
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.video-preview";
@import "../styles/components/components.icon-controls";
</style>
