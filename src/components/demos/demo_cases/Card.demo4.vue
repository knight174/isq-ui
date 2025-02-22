<template>
  <div class="demo-block">
    <Card>
      <template #header>完整示例</template>
      <div>卡片的主要内容</div>
      <template #footer>
        <Button>操作按钮</Button>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card, Button } from '../../../lib';

export default {
  components: { Card, Button },
};
</script>

<style lang="scss" scoped>
.demo-block {
  max-width: 500px;
}
</style>
