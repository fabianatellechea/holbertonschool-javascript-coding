#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
const text = process.argv[3];

fs.appendFile(filename, text, 'utf-8', function (err) {
    if (err) {
      console.log(err);
    }
  });
