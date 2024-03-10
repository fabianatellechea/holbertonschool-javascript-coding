#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, content) {
  if (error) {
    console.error('error:', error);
  }
  console.log('code:', content.statusCode);
});
