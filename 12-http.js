// http( hyper text transfer protocol module) aka server setup

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our home page");
  }
  if (req.url === '/about') {
    res.end('About us page')
  }
  res.end(`<h1>Oops!<h1/>
    <p>we cant' seem to find the page you are looking for </p>
    <a href='/'>Back home<a/>`)
});

server.listen(5000);
