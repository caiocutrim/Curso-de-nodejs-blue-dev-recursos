'use strict';

const http = require('http');
const url = require('url');

// Incoming Message, Response
// Server
let server = http.createServer((req, res) => {
  let urlPassada = url.parse(req.url, true);
    res.setHeader('Content-type','text/html');
  switch (urlPassada.pathname) {
    case '/':
      res.statusCode = 200;
      res.end(`<h1>Hello, home! ${res.statusCode}</h1>`);
    break;
    case '/contacts':
      res.statusCode = 200;
      res.end(`<h1>Contatos ${res.statusCode}</h1>`);
    break;
    default:
      res.statusCode = 404;
      res.end(`<h1>404 not found ${res.statusCode}</h1>`);
    break;
  }
});


server.listen(3000, () => {
  console.log("O meu servidor está no ar na porta 3000");
});

