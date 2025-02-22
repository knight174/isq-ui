<template lang="pug">
.bottom-footer
  p Copyright © 2021-{{ new Date().getFullYear() }} knight174
</template>

<script lang="ts">
export default {
  name: 'BottomFooter',
};
</script>

<style lang="scss" scoped>
.bottom-footer {
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  p {
    font-weight: 800;
    letter-spacing: 0.15rem;
  }
}
</style>
