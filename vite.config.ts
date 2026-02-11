import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  server: {
    fs: {
      allow: [
        process.cwd(),
        "/Users/vikasbanerjeemurthy/Downloads/Coding/App SW/1540website-main/static/assets"
      ]
    }
  }
});
