/* eslint-disable @typescript-eslint/no-require-imports */
import { vi } from "vitest";
import { config } from "@vue/test-utils";
import messages from "../messages";

vi.mock("@unhead/vue", () => ({
    useHead: () => {},
}));

vi.mock("vue-i18n", () => ({
    useI18n: () => ({
        $t: (key: string) => key,
        t: (key: string) => key,
    }),
}));

// axios (básico)
vi.mock("axios", () => {
    const mockFn = vi.fn();
    return {
        __esModule: true,
        default: {
            get: mockFn,
            post: mockFn,
            put: mockFn,
            delete: mockFn,
            create: () => ({
                get: mockFn,
                post: mockFn,
                put: mockFn,
                delete: mockFn,
            }),
        },
    };
});

vi.mock("vue-router", async () => {
    const actual = await vi.importActual("vue-router").catch(() => ({}));
    return {
        ...actual,
        useRouter: () => ({
            push: vi.fn(),
            replace: vi.fn(),
            currentRoute: { value: {} },
        }),
        useRoute: () => ({ params: {}, query: {} }),
    };
});

try {
    const { createTestingPinia } = require("@pinia/testing");
    const testingPinia = createTestingPinia({ stubActions: true });
    config.global.plugins = config.global.plugins || [];
    config.global.plugins.push(testingPinia);
} catch (e) {
    console.log("Error: ", e);
}

try {
    const { createI18n } = require("vue-i18n");

    const i18n = createI18n({
        locale: "en",
        fallbackLocale: "en",
        messages,
    });

    config.global.plugins = config.global.plugins || [];
    config.global.plugins.push(i18n);
} catch (e) {
    console.log("Error: ", e);

    config.global.mocks = {
        ...(config.global.mocks || {}),
        $t: (s: string) => s,
    };
}
