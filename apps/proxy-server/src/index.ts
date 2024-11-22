import http from "http";
import httpProxy from "http-proxy";
import dotenv from "dotenv";

dotenv.config();

const proxy = httpProxy.createProxyServer();
const PORT = process.env.PORT || 4000;
const FWD_URL = process.env.FWD_URL;

const server = http.createServer((req, res) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} from ${
      req.socket.remoteAddress
    }`
  );

  // Forward all requests to the target server
  proxy.web(req, res, { target: FWD_URL }, (err) => {
    console.error("Proxy error:", err);
    res.writeHead(502);
    res.end("Bad Gateway");
  });

  res.on("finish", () => {
    console.log(
      `[${new Date().toISOString()}] Response status: ${res.statusCode}`
    );
  });
});

server.listen(PORT, () => {
  console.log("Reverse proxy server running on port: " + PORT);
});
