<template lang="pug">
.aside-nav
  h2 导航
  ul
    li
      router-link(to='/') 主页
    li
      router-link(to='/doc/intro') 介绍与开始
    li
      a(href='https://github.com/Knight174/isq-ui', target='_blank') GitHub
</template>

<script lang="ts">
export default {
  name: 'DocAsideNav',
};
</script>
