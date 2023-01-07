const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'https://get-cat-back.onrender.com',
      changeOrigin: true,
    })
  );
};
