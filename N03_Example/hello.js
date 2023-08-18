// const http = require('http'); // 이것은 비표준(CommonJS) 방식이다.
// 표준방식으로 바꿔보자. (package.json 생성 + import문 사용)
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const serverOptions = {
    headersTimeout : 1000
}

const server = http.createServer(serverOptions, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

console.log(server.headersTimeout);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});