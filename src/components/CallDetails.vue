<template>
  <div :class="classes">
    <!-- .c-call-details__heading -->
    <div class="c-call-details__heading" v-if="headingPrefix || headingText">
      <BaseHeading
        class="u-margin-bottom-none"
        :prefix="headingPrefix"
        :text="headingText"
      ></BaseHeading>
    </div>
    <!-- /.c-call-details__heading -->

    <!-- .c-call-details__time -->
    <div
      class="c-call-details__time"
      v-if="(metaItems && metaItems.length) || timezone"
    >
      <!-- .c-call-details__meta -->
      <div class="c-call-details__meta" v-if="metaItems">
        <MetaList
          :items="metaItems"
          layout="inline"
          decoration="bordered"
          class="u-display-inline-block"
        ></MetaList>
      </div>
      <!-- /.c-call-details__meta -->

      <!-- .c-call-details__timezone -->
      <div class="c-call-details__timezone" v-if="timezone">
        <BaseTip :text="timezone" />
      </div>
      <!-- /.c-call-details__timezone -->
    </div>
    <!-- /.c-call-details__time -->
  </div>
</template>

<script>
import MetaList from "./MetaList";
import BaseHeading from "./BaseHeading";
import BaseTip from "./BaseTip";

export default {
  name: "CallDetails",
  props: {
    headingPrefix: {
      type: String
    },
    headingText: {
      type: String
    },
    metaItems: {
      type: Array,
      default: () => [] // https://github.com/vuejs/vue/issues/1032#issuecomment-120212888
    },
    timezone: {
      type: String
    },
    extraClassNames: {
      type: String
    }
  },
  components: {
    MetaList,
    BaseHeading,
    BaseTip
  },
  computed: {
    classes() {
      return {
        "c-call-details": true,
        [`${this.extraClassNames}`]: true
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.call-details";
</style>
