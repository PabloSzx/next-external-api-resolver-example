import connect from "connect";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = connect();

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
