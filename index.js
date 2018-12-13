'use strict';

module.exports = {
  name: {
    desc: 'egg-webpack-multiple-pages-boilerplate',
  },
  description: {
    desc: 'project description',
  },
  author: {
    desc: 'hi.heweiguang@gmail.com',
  },
  keys: {
    desc: 'egg-wmpb-keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
