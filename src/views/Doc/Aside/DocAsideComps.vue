<template lang="pug">
.aside-comps
  h2 组件
  ul
    li
      router-link(to='/doc/switch') Switch组件
    li
      router-link(to='/doc/button') Button组件
    li
      router-link(to='/doc/modal') Modal组件
    li
      router-link(to='/doc/tabs') Tabs组件
    li
      router-link(to='/doc/card') Card组件
</template>

<script lang="ts">
export default {
  name: 'DocAsideComps',
};
</script>
