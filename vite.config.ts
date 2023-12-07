import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'my-virtual-html',
      resolveId(source, _, options) {
        if (source.endsWith('index.html') && options.isEntry) {
          return source;
        }
      },
      async load(id) {
        if (id.endsWith('index.html')) {
          return `<script type="module">
          import './src/main.ts'
          </script>`;
        }
      },
    },
  ],
});
