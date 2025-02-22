<template>
  <section>
    <h2>{{ caseTitle }}</h2>
    <div class="demo-box">
      <div class="demo-component">
        <component :is="demoComp"></component>
      </div>
      <div class="demo-action">
        <Button @click="handleDrop">查看示例代码</Button>
      </div>
      <div class="demo-code" ref="code">
        <pre>
            <code class="language-html" v-text="demoHtmlStr"></code>
          </pre>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import Button from '../lib/Button.vue';
import { onMounted, ref } from 'vue';
export default {
  name: 'DemoTemplate',
  components: {
    Button,
  },
  props: {
    caseTitle: {
      type: String,
    },
    demoComp: {
      type: Object,
    },
    demoHtmlStr: {
      type: String,
    },
  },
  setup(props, context) {
    const code = ref<HTMLDivElement | null>(null);

    const handleDrop = () => {
      if (code.value && !code.value.classList.contains('open')) {
        code.value.classList.add('open');
      } else if (code.value) {
        code.value.classList.remove('open');
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });
    return {
      handleDrop,
      code,
    };
  },
};
</script>

<style lang="scss">
.demo-component {
  button.isq-btn {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}
.demo-action {
  padding-top: 2rem;
  border-top: 1px solid #e3e3e3;
}
.demo-code {
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s ease;
  &.open {
    height: auto;
    max-height: 1200px;
    transition: all 0.5s ease;
  }
}
</style>
