import { createMemoryHistory, createRouter } from "vue-router";
// Routes
import HomeView from "./views/Home/index.vue";
import BookView from "./views/Book/index.vue";
import AboutView from "./views/About.vue";

const routes = [
    { path: "/book/:isbn", component: BookView },
    { path: "/about", component: AboutView },
    { path: "/", component: HomeView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
