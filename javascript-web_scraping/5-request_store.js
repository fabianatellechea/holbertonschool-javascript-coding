#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filename = process.argv[3];

request(url, function (error, content, body) {
  if (error) {
    console.error('error:', error);
  }
  fs.appendFile(filename, body, 'utf-8', function (err) {
    if (err) {
      console.error(err);
    }
  });
});
