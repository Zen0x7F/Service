import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'node:path'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'static',
    },
    plugins: [
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './resources/ts/locales/**'),
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
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/ts'),
        }
    }
});
