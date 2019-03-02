# egg-webpack-multiple-pages-boilerplate

Minimum webpack multiple pages boilerplate for egg.

## Installation

**Don't `npm i` this directly**

```bash
$ npm i -g egg-init
$ egg-init --package egg-webpack-multiple-pages-boilerplate showcase
$ cd showcase
$ npm i
$ npm run dev-client # client
$ npm run dev # server
$ open http://localhost:7001
```

## Structure

```
app # server root
├── controller
│   ├── about.js
│   └── home.js
├── extend
│   └── helper.js
├── public
├── router.js
└── view
    ├── about.tpl
    ├── home.tpl
    └── layout.tpl
src # client root
└── pages
    ├── about
    │   └── index.js
    └── home
        └── index.js

```

## Change Log

### `v1.1.0`

1. Add CSS/LESS build-in support
2. Make `<head/>` children configurable
