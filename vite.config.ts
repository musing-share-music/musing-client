import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development'; // 개발 환경 여부 확인

  return {
    plugins: [
      react({
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      svgr(),
    ],
    resolve: {
      alias: {
        app: path.resolve(__dirname, './src/app'),
        pages: path.resolve(__dirname, './src/pages'),
        widgets: path.resolve(__dirname, './src/widgets'),
        features: path.resolve(__dirname, './src/features'),
        entities: path.resolve(__dirname, './src/entities'),
        shared: path.resolve(__dirname, './src/shared'),
        '#': path.resolve(__dirname, './src'),
      },
    },
    server: {
      open: true,
      port: 3000,
      ...(isDevelopment && {
        proxy: {
          '/musing/alarm': {
            target: 'http://localhost:8090',
            changeOrigin: true,
            secure: false,
          },
        },
      }),
    },
  };
});
