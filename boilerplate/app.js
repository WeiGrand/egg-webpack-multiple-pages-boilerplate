'use strict';

const path = require('path');

module.exports = function(app) {
  // load assets.json
  app.beforeStart(async () => {

    try {
      let assetsMap;
      const fileName = 'assets.json';

      if (app.env === 'local') {
        const url = `http://localhost:8080/dist/${fileName}`;
        const response = await app.curl(url, {
          method: 'GET',
          dataType: 'json',
        });

        assetsMap = response.data;
      } else {
        const file = path.resolve(path.resolve(__dirname, './app/public'), fileName);
        assetsMap = require(file);
      }

      if (!assetsMap) {
        throw new Error('Missing assets map');
      }

      Object.assign(app.locals, {
        assetsMap,
      });
    } catch (err) {
      // log
      console.log(err);
    }
  });

};
