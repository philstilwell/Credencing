code
TypeScript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/credencing/', // Replace 'credencing' with your actual repository name
});
