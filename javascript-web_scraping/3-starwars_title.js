#!/usr/bin/node

const request = require('request');
const episode = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${episode}`;

request(url, function (error, content) {
  if (error) {
    console.error('error:', error);
  }
  console.log(JSON.parse(content.body).title);
});
