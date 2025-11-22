import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue';
import path from 'path';
import istanbul from 'vite-plugin-istanbul'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'static',
    },
    plugins: [
        VueI18nPlugin({
            ssr: true,
        }),
        laravel({
            input: ['./resources/ts/app.ts'],
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                }
            }
        }),
        istanbul({
            include: [
                './resources/ts/pages/**/*.{ts,vue}',
                './resources/ts/components/**/*.{ts,vue}',
                './resources/ts/states/**/*.{ts,vue}',
            ],
            exclude: ['node_modules', 'test', 'tests'],
            extension: ['.js', '.ts', '.vue'],
            cypress: true,
            forceBuildInstrument: true
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/ts'),
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['./resources/ts/tests/**/*.test.{js,ts}', './resources/ts/tests/**/*.spec.{js,ts}'],
        watch: false,
        setupFiles: ['./resources/ts/tests/setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov', 'html'],
            reportsDirectory: './storage/coverage/js',
            include: [
                'resources/ts/pages/**/*.{ts,vue}',
                'resources/ts/components/**/*.{ts,vue}',
                'resources/ts/states/**/*.{ts,vue}',
            ],
            exclude: [
                'resources/ts/assets/**',
                'resources/ts/locales/**',
                '**/*.png',
                '**/*.jpg',
                '**/*.svg',
                '**/*.css',
                '**/*.json'
            ]
        }
    }
});
