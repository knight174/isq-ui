<template lang="pug">
.topnav
  .logo
    img(:src='logo', alt='iSQ-UI-Logo', @click='toHome')
    h3.ui-name iSQ UI
  ul.menu
    li
      router-link(to='/doc') 文档
    li
      a(href='https://github.com/Knight174/isq-ui', target='_blank') GitHub
  .menu-btn(@click='switchAside', v-if='!isHome') 📖
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import logo from '../assets/logo.png';
import { useRouter } from 'vue-router';

export default {
  name: 'TopNav',
  setup() {
    const router = useRouter();
    const asideVisible = inject<Ref<boolean>>('mark');

    const switchAside = () => {
      if (asideVisible) {
        asideVisible.value = !asideVisible.value;
      }
    };

    const toHome = () => {
      router.push({ name: 'Home' });
    };

    let isHome = false;

    const currentRouterName = router.currentRoute.value.name;
    if (currentRouterName === 'Home') {
      isHome = !isHome;
    }

    return {
      isHome,
      toHome,
      switchAside,
    };
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-btn {
  cursor: pointer;
  font-size: $s-title;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
}
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;
  background-color: $c-d-purple;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  .logo {
    display: flex;
    align-items: center;
    min-width: 5rem;
    height: 5rem;
    img {
      cursor: pointer;
      height: 100%;
      box-shadow: 0 0 10rem 1rem #fff;
      transition: 0.5s;
      &:hover {
        transform: rotate(360deg);
      }
    }
    h3.ui-name {
      display: none;
      margin-left: 1rem;
      font-size: $s-title;
      font-weight: 700;
      letter-spacing: 0.25rem;
      color: $c-white !important;
    }
  }
  .menu {
    // display: flex;
    display: none;
    li {
      margin-left: 2rem;
      a {
        font-size: $s-font;
        color: $c-white !important;
      }
      a:hover {
        border-bottom: 2px solid $c-white;
      }
    }
  }
}
@media screen and (min-width: 750px) {
  .menu-btn {
    display: none;
  }
  .topnav {
    justify-content: space-between;
    .menu {
      display: flex;
    }
    .logo {
      h3.ui-name {
        display: block;
      }
    }
  }
}
</style>
