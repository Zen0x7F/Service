import "./bootstrap";
import "../css/app.css";
import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import axios from "axios";
import routes from "./routes";

import App from "./components/App.vue";

export const createApp = ViteSSG(
    App,
    { routes, base: "/" },
    ({ app, isClient /*router, routes, isClient, initialState*/ }) => {
        const pinia = createPinia();
        app.use(pinia);

        if (isClient) {
            app.config.globalProperties.$axios = axios;
            app.config.globalProperties.$axios.defaults.headers.common[
                "Accept"
            ] = "application/json";
            app.config.globalProperties.$axios.defaults.headers.common[
                "X-Requested-With"
            ] = "XMLHttpRequest";
        }
    },
);
