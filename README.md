# Richasy 的个人博客

基于 [astro-erudite](https://github.com/jktrn/astro-erudite) 模板构建的个人博客网站。

## 特性

- 基于 [Astro](https://astro.build/) 构建，采用 Islands 架构
- 使用 [Tailwind CSS](https://tailwindcss.com/) 和 [shadcn/ui](https://ui.shadcn.com/) 组件库
- 支持 [MDX](https://mdxjs.com/) 编写博客文章
- 支持 $\LaTeX$ 数学公式渲染（通过 [KaTeX](https://katex.org/)）
- 代码块语法高亮（[Expressive Code](https://expressive-code.com/)）
- 支持 RSS 订阅和站点地图
- 支持多作者和标签分类
- 自适应深色/浅色主题

## 技术栈

| 类别     | 技术                                                                                       |
| -------- | ------------------------------------------------------------------------------------------ |
| 框架     | [Astro](https://astro.build/)                                                              |
| 样式     | [Tailwind CSS](https://tailwindcss.com)                                                    |
| 组件库   | [shadcn/ui](https://ui.shadcn.com/)                                                        |
| 内容格式 | [MDX](https://mdxjs.com/)                                                                  |
| 代码高亮 | [Expressive Code](https://expressive-code.com/), [Shiki](https://github.com/shikijs/shiki) |

## 快速开始

1. 克隆仓库：

   ```bash
   git clone https://github.com/Richasy/richasy-home.git
   cd richasy-home
   ```

2. 安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm run dev
   ```

4. 在浏览器中访问 `http://localhost:4321`

### 常用命令

| 命令                | 说明             |
| ------------------- | ---------------- |
| `pnpm run dev`      | 启动开发服务器   |
| `pnpm run build`    | 构建生产版本     |
| `pnpm run preview`  | 预览构建后的网站 |
| `pnpm run prettier` | 格式化所有文件   |

## 配置说明

### 网站配置

编辑 `src/consts.ts` 文件来更新网站的元数据、导航链接和社交链接：

```ts
export const SITE: Site = {
  title: '你的网站标题',
  description: '你的网站描述',
  href: 'https://your-site.com',
  featuredPostCount: 2,
  postsPerPage: 3,
}
```

### 颜色主题

颜色定义在 `src/styles/global.css` 中，使用 OKLCH 颜色格式。

### Favicon

使用 [RealFaviconGenerator](https://realfavicongenerator.net/) 生成 favicon，并替换 `public/` 目录中的文件。

## 添加内容

### 博客文章

在 `src/content/blog/` 目录中添加 MDX 文件。使用以下 frontmatter 结构：

```yml
---
title: '文章标题'
description: '文章简介'
date: 2024-01-01
tags: ['标签1', '标签2']
image: './image.png'
authors: ['作者ID']
draft: false
---
```

### 作者信息

在 `src/content/authors/` 目录中添加作者信息（Markdown 格式）：

```yml
---
name: '作者名称'
pronouns: 'he/him'
avatar: 'https://gravatar.com/avatar/...'
bio: '个人简介'
website: 'https://example.com'
github: 'https://github.com/username'
mail: 'email@example.com'
---
```

### 项目

在 `src/content/projects/` 目录中添加项目信息：

```yml
---
name: '项目名称'
description: '项目描述'
tags: ['技术栈A', '技术栈B']
image: '/static/project.png'
link: 'https://project-url.com'
startDate: '2024-01-01'
endDate: '2024-12-31'
---
```

## 许可证

本项目采用双协议授权：

- **代码部分**：采用 [MIT License](LICENSE) 开源协议
- **文档内容**：采用 [CC BY-ND 4.0](LICENSE-CONTENT) 协议（署名-禁止演绎）

具体说明：
- 所有源代码（包括但不限于 TypeScript、Astro、CSS 文件）采用 MIT 协议
- 所有文档内容（包括但不限于 `src/content/blog/`、`src/content/authors/`、`src/content/projects/` 目录下的 Markdown/MDX 文件及其中的文字、图片）采用 CC BY-ND 4.0 协议

---

基于 [astro-erudite](https://github.com/jktrn/astro-erudite) 模板构建
