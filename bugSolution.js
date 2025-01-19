const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  const longRunningTask = () => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
  };

  longRunningTask().then(result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Result: ' + result);
  }).catch(err => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});