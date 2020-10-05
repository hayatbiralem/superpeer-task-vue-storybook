<template>
  <div id="app" class="c-app">
    <TheWaitingRoom v-bind="$data" />
    <DocsToolbar />
  </div>
</template>

<script>
import Vue from "vue";
import TheWaitingRoom from "./components/TheWaitingRoom";
import DocsToolbar from "./components/DocsToolbar";
import response from "./data/example-api-response.js";

export default Vue.extend({
  name: "App",
  components: {
    TheWaitingRoom,
    DocsToolbar
  },
  data() {
    return {
      onSubmit: response.form.submit,
      callDetails: response.callDetails,
      videoPreview: response.videoPreview,
      fields: response.form.fields,
      submitText: response.submitText
    };
  }
});
</script>
