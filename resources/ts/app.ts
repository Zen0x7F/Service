import "./bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./components/App.vue";
const pinia = createPinia();
import router from "./router";

const app = createApp(App);

app.use(router).use(pinia).mount("#app");
