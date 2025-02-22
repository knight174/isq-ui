<template>
  <div class="demo-block">
    <Card shadow="never">
      <div>无阴影的卡片</div>
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
