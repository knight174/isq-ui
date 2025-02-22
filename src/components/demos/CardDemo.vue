<template>
  <div class="card-demo isq-demo">
    <section>
      <h1>卡片 Card</h1>
      <h3>卡片（Card）是一种常见的容器组件，用于展示内容。</h3>
    </section>
    <DemoTemplate
      caseTitle="基础用法 Basic Usage"
      :demoComp="CardCase1"
      :demoHtmlStr="demo1"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="无阴影 No Shadow"
      :demoComp="CardCase2"
      :demoHtmlStr="demo2"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="悬浮效果 Hover Effect"
      :demoComp="CardCase3"
      :demoHtmlStr="demo3"
    ></DemoTemplate>
    <DemoTemplate
      caseTitle="带页脚 With Footer"
      :demoComp="CardCase4"
      :demoHtmlStr="demo4"
    ></DemoTemplate>
  </div>
</template>

<script lang="ts">
import DemoTemplate from '../DemoTemplate.vue';
import CardDemo1 from './demo_cases/Card.demo1.vue';
import CardDemo2 from './demo_cases/Card.demo2.vue';
import CardDemo3 from './demo_cases/Card.demo3.vue';
import CardDemo4 from './demo_cases/Card.demo4.vue';

export default {
  name: 'CardDemo',
  components: {
    DemoTemplate,
    CardDemo1,
    CardDemo2,
    CardDemo3,
    CardDemo4,
  },
  setup() {
    const utilStr =
      `
<script lang='ts'>
// import the component (Card) and the css file
import { Card } from 'isq-ui'
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Card,
  },
};\n` + '<\/script>';

    const demo1 =
      `
<template>
  <Card>
    <template #header>卡片标题</template>
    <div>这是卡片的内容，可以包含任何内容。</div>
  </Card>
</template>` + utilStr;

    const demo2 =
      `
<template>
  <Card shadow="never">
    <div>无阴影的卡片</div>
  </Card>
</template>` + utilStr;

    const demo3 =
      `
<template>
  <Card shadow="hover" hoverable>
    <template #header>悬浮显示阴影</template>
    <div>鼠标悬浮时会有阴影和上浮效果</div>
  </Card>
</template>` + utilStr;

    const demo4 =
      `
<template>
  <Card>
    <template #header>完整示例</template>
    <div>卡片的主要内容</div>
    <template #footer>
      <Button>操作按钮</Button>
    </template>
  </Card>
</template>` + utilStr;

    const CardCase1 = CardDemo1;
    const CardCase2 = CardDemo2;
    const CardCase3 = CardDemo3;
    const CardCase4 = CardDemo4;

    return {
      demo1,
      demo2,
      demo3,
      demo4,
      CardCase1,
      CardCase2,
      CardCase3,
      CardCase4,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-demo {
  .demo-block {
    margin: 20px 0;
    max-width: 500px;
  }
}
</style>
