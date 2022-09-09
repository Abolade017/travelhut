import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Destination from '../views/Destination.vue';
import Location from '../views/Location.vue';
import NotFound from '../views/NotFound.vue';
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Services from "../views/Services.vue";
import pricing from "../views/Pricing.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: Destination
  },

  {
    path: '/destination/:id',
    name: 'destination_id',
    component: Location
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component:pricing
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
