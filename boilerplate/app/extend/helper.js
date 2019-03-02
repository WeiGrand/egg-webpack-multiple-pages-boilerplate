'use strict';

function wrapScriptTag(array = []) {
  return array.map(url => `<script src="${url}"></script>`).join('');
}

function wrapStyleTag (array = []) {
  return array.map(url => `<link href="${url}" rel="stylesheet">`).join('');
}

module.exports = {
  scripts (pageName, assetsMap) {
    const pageScript = assetsMap[pageName]['js'];

    if (!pageScript) return [];

    return wrapScriptTag([ pageScript ]);
  },
  styles (pageName, assetsMap) {
    const pageStyle = assetsMap[pageName]['css'];

    if (!pageStyle) return [];

    return wrapStyleTag([ pageStyle ]);
  }
};
