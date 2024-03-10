#!/usr/bin/node

const fs = require('fs');
const file_path = process.argv.slice(2);

fs.readFile(file_path, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});