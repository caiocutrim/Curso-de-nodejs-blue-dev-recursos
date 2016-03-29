'use strict';
const fs = require('fs');

fs.readFile('helloworld.txt', (err, data) => {
  console.log(data.toString('utf-8'));
});


let result = fs.readFileSync("helloworld.txt");
console.log(`${result} síncrono!`);
