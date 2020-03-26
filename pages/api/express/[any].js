import express from "connect";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

app.use(
  createProxyMiddleware({
    target: "http://jsonplaceholder.typicode.com/",
    changeOrigin: true
  })
);

export default app;

export const config = {
  api: {
    bodyParser: false
  }
};
