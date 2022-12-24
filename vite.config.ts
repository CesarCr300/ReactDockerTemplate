import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_INNER_PORT),
      host: true,
      strictPort: true,
      hmr: { //hot module reload
        clientPort: parseInt(process.env.VITE_OUT_PORT), //port exposed outside the container
      },
      watch: { //to reload the page when you're editing a file
        usePolling: true,
      },
    }
  });
}
