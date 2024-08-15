const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Hello World!');
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log("Server listening on PORT ", port);
});