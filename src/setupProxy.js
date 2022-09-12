const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'https://get-cat-back.herokuapp.com',
      changeOrigin: true,
    })
  );
};
