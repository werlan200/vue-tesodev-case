import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SearchConsole from "./pages/SearchConsole.vue";
import ErrorPage from "./pages/ErrorPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/search", component: SearchConsole },
    { path: "/:notFound(.*)", component: ErrorPage },
  ],
});
export default router;
