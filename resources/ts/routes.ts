const routes = [
    { path: "/", component: () => import("./pages/index-page.vue") },
    { path: "/login", component: () => import("./pages/login-page.vue") },
];

export default routes;
