'use strict';

function wrapScriptTag(array) {
  return array.map(url => `<script src="${url}"></script>`).join('');
}

module.exports = {
  scripts(pageName, assetsMap) {
    const pageScript = assetsMap[pageName].js;

    return wrapScriptTag([ pageScript ]);
  },
};
