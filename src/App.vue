<template>
  <div id="app" class="c-app">
    <WaitingRoom :data="data" />
  </div>
</template>

<script>
import Vue from "vue";
import WaitingRoom from "./components/WaitingRoom";
import data from "./data";

export default Vue.extend({
  name: "App",
  components: {
    WaitingRoom
  },
  data() {
    return {
      data: data
    };
  }
});
</script>
