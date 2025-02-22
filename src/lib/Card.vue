<template>
  <div
    class="isq-card"
    :class="{
      [`isq-card-${shadow}`]: shadow,
      'is-hoverable': hoverable,
    }"
  >
    <div v-if="$slots.header || header" class="isq-card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="isq-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="isq-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    header: {
      type: String,
      default: '',
    },
    shadow: {
      type: String,
      values: ['always', 'hover', 'never'],
      default: 'always',
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.isq-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;

  &-always {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &-hover {
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  &.is-hoverable:hover {
    transform: translateY(-2px);
  }

  &-header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }

  &-body {
    padding: 20px;
  }

  &-footer {
    padding: 18px 20px;
    border-top: 1px solid #ebeef5;
  }
}
</style>
