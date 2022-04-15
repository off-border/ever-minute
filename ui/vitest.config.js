import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import { transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
    test: {
        environment: 'jsdom',

        globals: true,
    },

    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
    ],
});
