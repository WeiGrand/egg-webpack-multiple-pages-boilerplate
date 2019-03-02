# egg-webpack-multiple-pages-boilerplate

最小化 egg + webpack 多页应用配置样板

## 安装

**不要直接用 `npm i` 安装该 npm 包**

```bash
$ npm i -g egg-init
$ egg-init --package egg-webpack-multiple-pages-boilerplate showcase
$ cd showcase
$ npm i
$ npm run dev-client # client
$ npm run dev # server
$ open http://localhost:7001
```

## 结构

```
app # 服务端文件根目录
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
src # 客户端文件根目录
└── pages
    ├── about
    │   └── index.js
    └── home
        └── index.js

```

## 更新日志

### `v1.1.0`

1. 增加 CSS/LESS 内置支持
2. 实现 <head/> 标签子元素克配置
