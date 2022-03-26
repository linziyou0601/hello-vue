import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AboutNewView from "../views/AboutNewView.vue";
import AboutHotView from "../views/AboutHotView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    children: [
      {
        path: "new",
        name: "about-new",
        component: AboutNewView,
      },
      {
        path: "hot",
        name: "about-hot",
        component: AboutHotView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
