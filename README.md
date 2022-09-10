# xlinkote

## 简介

为了整理错乱的考试知识点而随手搞得一个简单的笔记系统，基于 js 等技术。[在线使用](https://xlinkote.vercel.app/)

无需注册，不存在官方云存储，只使用 webDAV 代替。

文件会保存到浏览器的 indexdDB，自动保存。

可以像做 PPT 一样自由更改自由元素的位置，并拥有无限画布，无限放大缩小。其中文本自由元素支持 markdown 语法。还有矢量画笔可以使用。

## 使用

[在线使用](https://xlinkote.vercel.app/)

### 编译

```shell
npm i # 安装依赖
npm run build # 编译
npx http-server ./dist # 打开服务器
```

## 功能

-   [ ] 画布
    -   [x] markdown 编辑
    -   [x] 无限画布
-   [ ] 文件
    -   [x] 与本地文件关联（带注释的 md 文件）
    -   [x] 默认保存到 indexedDB
    -   [x] 自由导出文件和数据库
    -   [x] webDAV（默认压缩，支持加密）
-   [ ] 元素(组件)
    -   [x] markdown 元素（支持换行渲染）（支持补全括号和引号）
    -   [x] 数学公式（$\LaTeX$数学公式,图形化点击输入）
    -   [x] 画板
        -   [ ] 粗细
        -   [ ] 颜色
        -   [ ] 图层
    -   [ ] 外部导入
        -   [x] 拖拽
        -   [ ] 粘贴
        -   [x] HTML 转 markdown
    -   [ ] 录音
    -   [ ] 思维导图
