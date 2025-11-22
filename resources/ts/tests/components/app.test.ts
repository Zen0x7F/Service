import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect } from "vitest";
import AppComponent from "@/components/App.vue";
import routes from "../../routes";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

describe("AppComponent", () => {
    it("CanBeMounted", async () => {
        const wrapper = mount(AppComponent, {
            global: {
                plugins: [router],
            },
        });
        await router.isReady();
        expect(wrapper.vm.mounted).toBe(true);
    });
});
