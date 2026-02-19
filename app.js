const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from EC2 CI/CD 🚀");
});

server.listen(3000, "0.0.0.0");
