<template>
  <form class="c-card" method="post">
    <!-- .c-card__header -->
    <div class="c-card__header">
      <slot name="header"></slot>
    </div>
    <!-- /.c-card__header -->

    <!-- .c-card__body -->
    <div class="c-card__body">
      <slot></slot>
    </div>
    <!-- /.c-card__body -->

    <!-- .c-card__footer -->
    <div class="c-card__footer">
      <slot name="foot"></slot>
    </div>
    <!-- /.c-card__footer -->
  </form>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style lang="scss">
@import "../styles/common";
@import "../styles/components/components.card";
</style>
