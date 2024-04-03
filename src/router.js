import { createMemoryHistory, createRouter } from "vue-router";
// Routes
import HomeView from "./views/Home/index.vue";
import AboutView from "./views/About.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
