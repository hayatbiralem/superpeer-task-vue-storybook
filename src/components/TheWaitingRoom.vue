<template>
  <div class="c-waiting-room">
    <BaseCard @submit.native.prevent="onSubmit">
      <template v-slot:header>
        <CallDetails
          v-bind="callDetails"
          class="u-text-align-center"
        ></CallDetails>
      </template>

      <template v-slot:default>
        <VideoPreview v-bind="videoPreview"></VideoPreview>
        <BaseForm :fields="fields" layout="horizontal"></BaseForm>
      </template>

      <template v-slot:foot>
        <BaseButton :is-primary="true" :is-block="true" type="submit">
          {{ submitText }}
        </BaseButton>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "./BaseCard";
import CallDetails from "./CallDetails";
import VideoPreview from "./VideoPreview";
import BaseButton from "./BaseButton";
import BaseForm from "./BaseForm";

export default {
  name: "TheWaitingRoom",
  props: {
    onSubmit: {
      type: Function
    },
    callDetails: {
      type: Object
    },
    videoPreview: {
      type: Object
    },
    fields: {
      type: Array,
      default: () => []
    },
    submitText: {
      type: String,
      default: "Submit"
    }
  },
  components: {
    BaseCard,
    CallDetails,
    VideoPreview,
    BaseButton,
    BaseForm
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.waiting-room";
</style>
