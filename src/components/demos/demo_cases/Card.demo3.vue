<template>
  <div class="demo-block">
    <Card shadow="hover" hoverable>
      <template #header>悬浮显示阴影</template>
      <div>鼠标悬浮时会有阴影和上浮效果</div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card } from '../../../lib';

export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
.demo-block {
  max-width: 500px;
}
</style>
