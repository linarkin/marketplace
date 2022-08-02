/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

const up42API = {
  target: "https://api.up42.com",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/marketplace/blocks", createProxyMiddleware(up42API));
};
