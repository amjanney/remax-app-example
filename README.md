# Remax One

使用 Remax 开发跨平台小程序。

## Getting Start

安装依赖

```bash
npm install
```

调试项目

```bash
# 选定要进行开发的平台，如 wechat，并调试
$ npm run dev wechat
or
yarn dev wechat
```

```bash
# 运行到web
$ npm run dev web
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录。

## 构建

```bash
# 选定要构建的平台，如 wechat，并执行构建
$ npm run build wechat
or
$ yarn build wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录，上传代码即可。

## useAsync

获取数据

## useRender

渲染 HTML

## 总结

上面这两个 hooks 使得代码更加的简介，函数可以更加的纯洁
