#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, content, body) {
  if (error) {
    console.error('error:', error);
  }
  const tasks = {};
  JSON.parse(body).forEach(task => {
    if (task.completed === true) {
      if (!tasks[task.userId]) {
        tasks[task.userId] = 0;
      }
      tasks[task.userId] += 1;
    }
  });
  console.log(tasks);
});
