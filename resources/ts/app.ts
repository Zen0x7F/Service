import "./bootstrap";
import "../css/app.css";
import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import { createI18n } from "vue-i18n";
import axios from "axios";
import routes from "./routes";
import App from "./components/App.vue";
import messages from "./locales";

export const createApp = ViteSSG(
    App,
    { routes, base: "/" },
    ({ app, isClient /*router, routes, isClient, initialState*/ }) => {
        if (isClient) {
            const pinia = createPinia();
            const i18n = createI18n({
                locale: "es",
                messages: messages,
            });
            app.use(i18n);
            app.use(pinia);

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
