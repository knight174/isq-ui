<template>
  <Tabs v-model:active="activeTitle">
    <Tab title="导航项目-1">内容一</Tab>
    <Tab title="导航项目-2">内容二</Tab>
    <Tab title="导航项目-3">内容三</Tab>
    <Tab title="导航项目-4">内容四</Tab>
    <Tab title="导航项目-5">内容五</Tab>
    <Tab title="导航项目-6">内容六</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tab from '../../../lib/Tab.vue';
import Tabs from '../../../lib/Tabs.vue';
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const activeTitle = ref<string>('导航项目-1');
    return {
      activeTitle,
    };
  },
};
</script>
