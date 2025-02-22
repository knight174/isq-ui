<template>
  <div class="isq-tabs">
    <div class="isq-tabs-nav" ref="nav">
      <!-- navigation title -->
      <div
        :class="{ active: title === active }"
        class="isq-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        @click="select(title)"
        :ref="
          (el) => {
            if (title === active) activeItem = el as HTMLDivElement;
          }
        "
      >
        {{ title }}
      </div>
      <!-- motive border-bottom box -->
      <div class="bottom-line" ref="bottomLine"></div>
    </div>
    <div class="isq-tabs-content">
      <!-- content for different navigation -->
      <component
        v-for="(comps, index) in defaults"
        :is="comps"
        :key="index"
        :class="{ active: comps?.props?.title === active }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import Tab from './Tab.vue';
import type { Ref } from 'vue';

export default {
  name: 'Tabs',
  components: {
    Tab,
  },
  props: {
    active: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    // 确保 default() 存在
    const defaultSlot = context.slots.default;
    if (!defaultSlot) {
      throw new Error('Tabs组件需要默认插槽！');
    }

    const defaults = defaultSlot();
    defaults.forEach((vnode) => {
      if (vnode.type !== Tab) {
        throw new Error('Tabs的子标签必须是Tab！');
      }
    });

    const titles = defaults.map((vnode) => {
      return vnode.props?.title || ''; // 使用可选链操作符
    });

    const select = (title: string) => {
      // 使用小写的string类型
      context.emit('update:active', title);
    };

    const { activeItem, bottomLine, nav } = useBottomLine();

    onMounted(() => {
      watchEffect(
        () => {
          if (!activeItem.value || !bottomLine.value || !nav.value) return;

          const { width } = activeItem.value.getBoundingClientRect();
          bottomLine.value.style.width = width + 'px';
          const { left: currentLeft } =
            activeItem.value.getBoundingClientRect();
          const { left: navLeft } = nav.value.getBoundingClientRect();
          const left = currentLeft + nav.value.scrollLeft - navLeft;
          bottomLine.value.style.left = left + 'px';
        },
        { flush: 'post' }
      );
    });

    return {
      defaults,
      titles,
      select,
      activeItem,
      bottomLine,
      nav,
    };
  },
};

const useBottomLine = () => {
  const activeItem = ref<HTMLDivElement | null>(null);
  const bottomLine = ref<HTMLDivElement | null>(null);
  const nav = ref<HTMLDivElement | null>(null);
  return { activeItem, bottomLine, nav };
};
</script>

<style lang="scss">
.isq-tabs {
  .isq-tabs-nav {
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 100%;
    overflow-x: auto;
    border-bottom: 2px solid #e3e3e3;
    & > .bottom-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 2px;
      background-color: #8e24aa;
      transition: all 0.25s;
    }
    div.isq-tabs-nav-item {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0.5em 1em;
      cursor: pointer;
      span {
        margin-left: 10px;
        &:hover {
          background-color: #8e24aa;
          color: #fff;
        }
      }
    }
    div.isq-tabs-nav-item.active {
      color: #8e24aa !important;
    }
  }
  .isq-tabs-content {
    padding: 10px;
    & div {
      display: none;
    }
    & div.active {
      display: block;
    }
  }
}
</style>
