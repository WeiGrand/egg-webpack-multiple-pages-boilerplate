'use strict';

const { lstatSync, readdirSync } = require('fs');
const { resolve, basename } = require('path');

const getEntry = function() {
  const appsSrc = './src/pages';

  const isDirectory = source => lstatSync(source).isDirectory();

  const getDirectories = source =>
    readdirSync(source).map(name => resolve(source, name)).filter(isDirectory);

  const appsDirs = getDirectories(appsSrc);

  const entry = appsDirs.reduce((entry, dir) => {
    entry[basename(dir)] = `${dir}/index.js`;
    return entry;
  }, {});

  return entry;
};

module.exports = getEntry;
