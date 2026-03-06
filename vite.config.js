import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                kids: resolve(__dirname, 'kids.html'),
                pro: resolve(__dirname, 'pro.html')
            }
        }
    }
});
