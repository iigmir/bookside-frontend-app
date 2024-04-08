import { createWebHistory, createRouter } from "vue-router";
// Routes
import HomeView from "./views/Home/index.vue";
import BookView from "./views/Book/index.vue";
import AboutView from "./views/About.vue";

const routes = [
    { path: "/book/:isbn", component: BookView },
    { path: "/about", component: AboutView },
    { path: "/", component: HomeView },
]

/**
 * Fuck it.
 * @see https://router.vuejs.org/guide/essentials/history-mode.html
 * @see https://github.com/vuejs/vue-router/issues/2671
 */
export default createRouter({
    history: createWebHistory(),
    routes,
});
