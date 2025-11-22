import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import LoginPage from "../../pages/login-page.vue";

describe("LoginPage", () => {
    it("ShowHeader", async () => {
        const wrapper = mount(LoginPage);
        expect(wrapper.text()).toContain("Sign in to your account");
    });
});
