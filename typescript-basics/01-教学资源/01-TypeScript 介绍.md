# TypeScript介绍

- [ ] TypeScript 介绍
- [ ] TypeScript 初体验

![image-20220224224618791](assets/image-20220224224618791.png)

## TypeScript 是什么？

**目标：能够说出什么是typescript**

**内容：**

- [TS 官方文档](https://www.typescriptlang.org/)
- [TS 中文参考 - 不再维护](https://www.tslang.cn/)

<figure class="third">
  <img src="./images/TS_logo.png"  style="width: 300px; display: inline-block;" />
  <img src="./images/TS是JS的超集.png" style="width: 500px; display: inline-block;" />
</figure>

- **`TypeScript` 简称：TS，是 JavaScript 的类型超集**，简单来说就是：JS 有的 TS 都有 

- TypeScript = `Type` + JavaScript（在 JS 基础之上，**为 JS 添加了类型支持**）
- TypeScript 是*微软*开发的开源编程语言，可以在任何运行 JavaScript 的地方运行

![TS 和 JS 的对比](./images/TSvsJS.png)

## 为什么要有TypeScript

**目标：能够说出为什么需要有TypeScript** 

**内容：**   

> 背景：JS 的类型系统存在“先天缺陷”，JS 代码中绝大部分错误都是类型错误（<span style="color:red">Uncaught TypeError...</span>）

这些经常出现的错误，导致了在使用 JS 进行项目开发时，增加了找 Bug、改 Bug 的时间，严重影响开发效率

> 为什么会这样？

- 从编程语言的动静来区分，**TypeScript 属于静态类型的编程语言**，**JavaScript 属于动态类型的编程语言**
  - 静态类型：**编译**期做类型检查
  - 动态类型：**执行**期做类型检查
- 代码编译和代码执行的顺序：1 编译 2 执行

- 对于 JS 来说：需要等到代码真正去执行的时候才能发现错误（晚）
- 对于 TS 来说：在代码编译的时候（代码执行前）就可以发现错误（早）

并且，配合 VSCode 等开发工具，TS 可以提前到**在编写代码的同时就发现代码中的错误**，减少找 Bug、改 Bug 时间  

> 对比 JS 和 TS 发现错误的时机：

- 使用 JS：
  1. 在 VSCode 里面写代码
  2. 在浏览器中运行代码 --> 运行时，才会发现错误【晚】
- 使用 TS：
  1. 在 VSCode 里面写代码 --> 写代码的同时，就会发现错误【早】
  2. 在浏览器中运行代码

## TypeScript 相比 JS 的优势

**目标：**能够说出TS相比JS的优势

**内容：**

1. **更早（写代码的同时）发现错误**，减少找 Bug、改 Bug 时间，提升开发效率
2. 程序中任何位置的代码都有**代码提示**，随时随地的安全感，增强了开发体验
3. 强大的类型系统提升了代码的可维护性，使得**重构代码更加容易**
4. 支持最新的 ECMAScript 语法，**优先体验最新的语法，让你走在前端技术的最前沿** 
5. TS 类型推断机制，不需要在代码中的每个地方都显示标注类型，让你在享受优势的同时，尽量降低了学习负担

> 除此之外，Vue 3 源码使用 TS 重写、Angular 默认支持 TS、React 与 TS 完美配合，TypeScript 已成为大中型前端 项目的首选编程语言

目前，前端最新的开发技术栈：

1. React： TS + Hooks
2. Vue： TS + Vue3 

  - 注意： Vue2 对 TS 的支持不好~  

---

## 安装编译 TS 的工具包

**目标：**能够使用工具包编译TS代码

**内容：**

> 问题：为什么要安装编译 TS 的工具包?

- 回答：Node.js/浏览器，只认识 JS 代码，不认识 TS 代码。需要先将 TS 代码转化为 JS 代码，然后才能运行
- 安装命令：`npm i -g typescript`  或者 `yarn global add typescript`
  - typescript 包：用来编译 TS 代码的包，提供了 `tsc` 命令，实现了 TS -> JS 的转化
  - *注意：Mac 电脑安装全局包时，需要添加 `sudo` 获取权限：`sudo npm i -g typescript`*  yarn 全局安装：`sudo yarn global add typescript`
- 验证是否安装成功：tsc –v(查看 typescript 的版本)

![TS 编译](./images/TS编译.png)

##  编译并运行 TS 代码

**目标：**能够理解TS的运行步骤

**内容：**

- **TS 文件的后缀名为 `.ts`**

  > 流程：1 创建 ts 文件  =>  2 编译 TS  =>  3 执行 JS  

- 说明：所有合法的 JS 代码都是 TS 代码，有 JS 基础只需要**学习 TS 的类型**即可

- 注意：由 TS 编译生成的 JS 代码中就没有类型信息了

**步骤**：

1. 创建 hello.ts 文件
2. 将 TS 编译为 JS：在终端中输入命令，`tsc hello.ts`（此时，在同级目录中会出现一个同名的 JS 文件）
3. 执行 JS 代码：在终端中输入命令，`node hello.js`

## 简化运行 TS 的步骤

**目标：**能够通过ts-node包来简化TS的运行

**内容：**

> 问题描述：每次修改代码后，都要重复执行两个命令，才能运行 TS 代码，太繁琐

- 简化方式：使用 `ts-node` 包，直接在 Node.js 中执行 TS 代码
- 安装命令：`npm i -g ts-node`
  - ts-node 包提供了 `ts-node` 命令
  - 使用方式：`ts-node hello.ts` 相当于：1 tsc 命令  2 node（注意：ts-node 不会生成 js 文件）

解释：ts-node 命令在内部偷偷的将 TS => JS，然后，再运行 JS 代码

## ts-node 运行 TS 报错

如果发现 ts-node 运行 ts 代码时报错，可以先运行：`tsc --init` 命令（运行一次即可），然后，再运行 ts-node xxx.ts 即可

> 错误如下：

![image-20211121111454776](images/image-20211121111454776.png)

## 解决两个ts文件之变量名冲突

> 问题：在非模块化环境下，TS 会把 .ts 文件中声明的变量当做全局变量

所以，当两个 .ts 文件中声明的变量名称相同，并且在 VSCode 中同时打开这两个文件时，VSCode 会提示报错

虽然，不会影响代码的运行。但看到报错会让人感觉不舒服，所以，只要让 .ts 文件中的代码变为模块化环境即可

操作方式：**在 .ts 文件中添加 `export {}`** 

解释1：当 TS 看到 export 这样的模块化语法后，就会将该文件当做模块来解析，此时，再声明的变量就是该模块中的局部变量了

解释2：export 不需要导出任何内容，该代码的作用仅仅是为了让 TS 知道这是模块化环境

---

## TypeScript介绍总结

- TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：**类型系统**
  - 所有的 JS 代码都是 TS 代码
  - **JS 有类型**（比如，number/string 等），但是 **JS 不会检查变量的类型是否发生变化**，而 TS 会检查
- TypeScript 类型系统的主要优势：**可以显式标记出代码中的意外行为，从而降低了发生错误的可能性**



