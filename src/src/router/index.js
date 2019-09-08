import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Import Components
 */
import ValidatorsList from '@/components/ValidatorsList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Validators',
    component: ValidatorsList,
  },
];
  
const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: "active",
  routes,
});

export default router;