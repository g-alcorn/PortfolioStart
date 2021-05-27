const http = require('http');
const PORT = 8080;

const requestHandler = function(req, res) {
  res.end(`Request path: ${req.url}\nRequest method: ${req.method}`)
}

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});