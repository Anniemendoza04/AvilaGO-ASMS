// filepath: c:\Users\annie\Downloads\AvilaGo-2.0-main\AvilaGo-2.0-main\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
});