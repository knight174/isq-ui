import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Intro from '../views/Intro.vue';
import SwitchDemo from '../components/demos/SwitchDemo.vue';
import ButtonDemo from '../components/demos/ButtonDemo.vue';
import ModalDemo from '../components/demos/ModalDemo.vue';
import TabsDemo from '../components/demos/TabsDemo.vue';
import CardDemo from '../components/demos/CardDemo.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  scrollBehavior: () => {
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/doc',
      redirect: { name: 'Intro' },
      name: 'Doc',
      // component: () => import(/* webpackChunkName: "doc" */ "../views/Doc.vue"),
      component: Doc,
      children: [
        {
          path: 'intro',
          name: 'Intro',
          // component: () => import(/* webpackChunkName: "introduce" */ "../views/Intro.vue"),
          component: Intro,
        },
        {
          path: 'switch',
          name: 'SwitchDemo',
          // component: () => import(/* webpackChunkName: "switch" */ "../components/demos/SwitchDemo.vue"),
          component: SwitchDemo,
        },
        {
          path: 'button',
          name: 'ButtonDemo',
          // component: () => import(/* webpackChunkName: "button" */ "../components/demos/ButtonDemo.vue"),
          component: ButtonDemo,
        },
        {
          path: 'modal',
          name: 'ModalDemo',
          // component: () => import(/* webpackChunkName: "modal" */ "../components/demos/ModalDemo.vue"),
          component: ModalDemo,
        },
        {
          path: 'tabs',
          name: 'TabsDemo',
          // component: () => import(/* webpackChunkName: "tabs" */ "../components/demos/TabsDemo.vue"),
          component: TabsDemo,
        },
        {
          path: 'card',
          name: 'CardDemo',
          component: CardDemo,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () =>
        import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    },
  ],
});

export default router;
