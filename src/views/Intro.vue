<template>
  <div class="intro isq-demo">
    <section>
      <h1 class="first">介绍与开始</h1>
      <h2>介绍 Introduce</h2>
      <p>
        iSQ UI 是一套基于 Vue3.0，用 TypeScript 编写而成的UI框架。免费、开源。
      </p>
      <h2>安装 Installing</h2>
      <h3>使用 npm 安装：</h3>
      <pre class="ter">
          <code>npm install isq-ui</code>
        </pre>
      <h3>或者使用 yarn 安装：</h3>
      <pre class="ter">
        <code>yarn add isq-ui</code>
      </pre>
      <h2>使用 Usage</h2>
      <pre class="ter">
        <code class="language-html" v-text="code"></code>
      </pre>
    </section>
  </div>
</template>

<script lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import { onMounted } from 'vue';

export default {
  name: 'Intro',
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
    const code =
      `<template>
  <Button>按钮</Button>
</template>

<script>
/*
  import components and css file from lib of isq-ui
  e.g. Using the component of Button.
*/
import {Button} from 'isq-ui'
import 'isq-ui/dist/lib/isq.css'
export default {
  name: 'App',
  components: {
    Button
  }
}\n` + '<\/script>';
    return {
      code,
    };
  },
};
</script>

<style lang="scss" scoped>
h1.first {
  margin-top: 0;
}
h1 {
  margin-top: 5rem;
}
h2 {
  line-height: 1.5;
}
h3 {
  margin-bottom: 1rem;
}
p {
  letter-spacing: 0.95px;
}
pre.ter {
  display: flex;
  align-items: center;
  min-height: 45px;
  padding: 1.5rem !important;
  background-color: #eee;
  font-size: 16px;
  white-space: pre;
  word-break: break-word;
}
</style>
