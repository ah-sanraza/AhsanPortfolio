import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});

// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),

//     {
//       name: 'tradingview-image-proxy',

//       configureServer(server) {
//         server.middlewares.use(
//           '/api/tradingview-image',
//           async (req, res) => {
//             try {
//               const url = new URL(
//                 req.url || '',
//                 'http://localhost'
//               );

//               const id = url.searchParams.get('id');

//               if (!id) {
//                 res.statusCode = 400;
//                 res.end('Missing TradingView ID');
//                 return;
//               }

//               const imageUrl =
//                 `https://s3.tradingview.com/snapshots/m/${id}.png`;

//               const response = await fetch(imageUrl);

//               if (!response.ok) {
//                 res.statusCode = response.status;
//                 res.end('Chart image not found');
//                 return;
//               }

//               const image = Buffer.from(
//                 await response.arrayBuffer()
//               );

//               res.statusCode = 200;
//               res.setHeader('Content-Type', 'image/png');
//               res.setHeader(
//                 'Cache-Control',
//                 'public, max-age=3600'
//               );

//               res.end(image);

//             } catch (error) {
//               console.error(error);

//               res.statusCode = 500;
//               res.end('Failed to fetch chart');
//             }
//           }
//         );
//       },
//     },
//   ],

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, '.'),
//     },
//   },
// });