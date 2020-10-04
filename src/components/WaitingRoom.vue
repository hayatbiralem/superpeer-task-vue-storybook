<template>
  <div class="c-waiting-room">
    <Card submit-text="Join Call" @submit.native.prevent="form.submit">
      <template v-slot:header>
        <CallDetails :data="callDetails"></CallDetails>
      </template>

      <template v-slot:default>
        <VideoPreview :data="videoPreview"></VideoPreview>
        <Form :data="form.items"></Form>
      </template>

      <template v-slot:foot>
        <Button :is-primary="true" :is-block="true" type="submit">
          {{ submitText }}
        </Button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "./Card";
import CallDetails from "./CallDetails";
import VideoPreview from "./VideoPreview";
import Button from "./Button";
import Form from "./Form";

export default {
  name: "WaitingRoom",
  props: ["data"],
  components: {
    Card,
    CallDetails,
    VideoPreview,
    Button,
    Form
  },
  data() {
    return {
      callDetails: this.data.callDetails || null,
      videoPreview: this.data.videoPreview || null,
      form: this.data.form || null,
      submitText: this.data.submitText
    };
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.waiting-room";
</style>
