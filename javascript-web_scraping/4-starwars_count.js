#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
let count = 0;

request(url, function (error, content, body) {
    if (error) {
      console.error('error:', error);
    }
  for (const movie of JSON.parse(body).results) {
    for (const c of movie.characters) {
      if (c.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
