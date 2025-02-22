<template>
  <div class="demo-block">
    <Card>
      <template #header>卡片标题</template>
      <div>这是卡片的内容，可以包含任何内容。</div>
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
