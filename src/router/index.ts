import { createRouter, createWebHistory } from "vue-router";
import {
  HOME_PAGE,
  HOME_PAGE_ROUTE,
  NOT_FOUND_PAGE,
  NOT_FOUND_PAGE_ROUTE,
  POKEMON_DETAILS_PAGE,
  POKEMON_DETAILS_PAGE_ROUTE,
} from "@/constants/user_interface_constants";
import NotFoundView from "@/views/not_found_view.vue";
import HomeView from "@/views/home_view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PAGE_ROUTE,
      name: HOME_PAGE,
      component: HomeView,
    },
    {
      path: POKEMON_DETAILS_PAGE_ROUTE,
      name: POKEMON_DETAILS_PAGE,
      component: () => import("../views/pokemon_details_view.vue"),
    },
    {
      path: NOT_FOUND_PAGE_ROUTE,
      name: NOT_FOUND_PAGE,
      component: NotFoundView,
    },
  ],
});

export default router;
