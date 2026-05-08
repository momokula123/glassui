# GlassUI

现代化的**玻璃拟态（Glassmorphism）UI 组件库**，采用毛玻璃效果与半透明背景设计，支持暗色/亮色双主题切换。

[![GitHub stars](https://img.shields.io/github/stars/momokula123/Glassui?style=flat-square)](https://github.com/momokula123/Glassui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/momokula123/Glassui?style=flat-square)](https://github.com/momokula123/Glassui/network)
[![GitHub license](https://img.shields.io/github/license/momokula123/Glassui?style=flat-square)](https://github.com/momokula123/Glassui/blob/main/LICENSE)

## 在线演示

[点击查看在线演示](https://momokula123.github.io/Glassui)

## 特性

- **玻璃拟态风格** - 毛玻璃效果 + 半透明背景
- **双主题切换** - 深色/浅色主题一键切换
- **轻量无依赖** - 纯原生 JavaScript 实现
- **50+ 丰富组件** - 按钮、卡片、表单、导航等
- **优雅动画** - CSS3 流畅动效系统
- **完美响应式** - 支持桌面/平板/移动端
- **免费 CDN** - 开箱即用，无需下载

## 快速开始

### 方式一：CDN 引入（推荐）

只需在 HTML 中添加以下代码即可使用 GlassUI：

#### 深色主题（默认黑色背景）

```html
<!-- 1. 引入 Font Awesome 图标库 -->
<link rel="stylesheet" href="https://momokula123.github.io/Glassui/css/font-awesome.min.css">

<!-- 2. 引入 GlassUI 深色主题样式 -->
<link rel="stylesheet" href="https://momokula123.github.io/glassui/css/glassui.css">

<!-- 3. 引入 GlassUI 组件库 -->
<script src="https://momokula123.github.io/glassui/js/glassui.js"></script>

<script>
  // 4. 初始化
  var G = GlassUI;
  G.initBody();
</script>
```

#### 浅色主题（默认白色背景）

```html
<!-- 1. 引入 Font Awesome 图标库 -->
<link rel="stylesheet" href="https://momokula123.github.io/Glassui/css/font-awesome.min.css">

<!-- 2. 引入 GlassUI 浅色主题样式（白色背景） -->
<link rel="stylesheet" href="https://momokula123.github.io/Glassui/css/glassui-white.css">

<!-- 3. 引入 GlassUI 组件库 -->
<script src="https://momokula123.github.io/Glassui/js/glassui.js"></script>

<script>
  // 4. 初始化
  var G = GlassUI;
  G.initBody();
</script>
```

> **注意**: 使用 `glassui-white.css` 时，页面默认显示为**浅色/白色主题**。可以通过 `theme.set("dark")` 切换到深色模式。

#### 白绿主题（默认白色背景 + 绿色主色调）

```html
<!-- 1. 引入 Font Awesome 图标库 -->
<link rel="stylesheet" href="https://momokula123.github.io/Glassui/css/font-awesome.min.css">

<!-- 2. 引入 GlassUI 白绿主题样式（白色背景+绿色主色） -->
<link rel="stylesheet" href="https://momokula123.github.io/Glassui/css/glassui-green.css">

<!-- 3. 引入 GlassUI 组件库 -->
<script src="https://momokula123.github.io/Glassui/js/glassui.js"></script>

<script>
  // 4. 初始化
  var G = GlassUI;
  G.initBody();
</script>
```

> **注意**: 使用 `glassui-green.css` 时，页面显示为**白底绿色主色调**。清新自然风格，适合健康、环保、科技类应用。

### 方式二：本地引入

下载本项目到本地后引用：

```html
<!-- 深色主题（紫色） -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/glassui.css">
<script src="js/glassui.js"></script>

<!-- 浅色主题（紫色） -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/glassui-white.css">
<script src="js/glassui.js"></script>

<!-- 白绿主题（绿色） -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/glassui-green.css">
<script src="js/glassui.js"></script>
```

## CDN 文件列表

所有文件均可通过以下地址访问：

```
https://momokula123.github.io/glassui/
├── css/
│   ├── glassui.css              # 深色主题样式（默认黑色背景）
│   ├── glassui-white.css        # 浅色主题样式（默认白色背景）
│   ├── glassui-v2.css           # 金色主题变体（可选）
│   └── font-awesome.min.css      # 图标库（必引）
├── js/
│   └── glassui.js               # JavaScript 组件（必引）
└── fonts/                       # 图标字体（自动加载）
    ├── fa-solid-900.woff2
    ├── fa-regular-400.woff2
    └── fa-brands-400.woff2
```

### 主题选择指南

| CSS 文件 | 默认背景 | 适用场景 |
|---------|---------|---------|
| `glassui.css` | 深色 (#0a0a0a) | 暗色风格应用、后台管理系统 |
| `glassui-white.css` | 浅色 (#ffffff) | 亮色风格应用、企业官网、展示页面 |
| `glassui-v2.css` | 深色+金色 | 特殊场景、高端定制 |

## 核心组件

### 导航栏 Navbar

```javascript
var nav = new G.Navbar({
  brand: "GlassUI",
  links: [
    { label: "首页", href: "#" },
    { label: "组件", href: "#components", active: true },
    { label: "文档", href: "#docs" }
  ],
  actions: [
    G.el("button", {
      className: "gu-btn gu-btn-ghost gu-btn-sm",
      textContent: "登录"
    })
  ]
});
document.body.appendChild(nav.element);
```

### 按钮 Button

```html
<button class="gu-btn gu-btn-primary">主要按钮</button>
<button class="gu-btn gu-btn-ghost">幽灵按钮</button>
<button class="gu-btn gu-btn-outline">轮廓按钮</button>
<button class="gu-btn gu-btn-danger">危险按钮</button>

<!-- 尺寸变体 -->
<button class="gu-btn gu-btn-primary gu-btn-sm">小按钮</button>
<button class="gu-btn gu-btn-primary gu-btn-lg">大按钮</button>

<!-- 禁用状态 -->
<button class="gu-btn gu-btn-primary" disabled>禁用按钮</button>
```

### 卡片 Card

```javascript
var card = new G.Card({
  icon: '<i class="fas fa-palette"></i>',
  title: "标题",
  subtitle: "副标题",
  description: "卡片描述内容...",
  tags: ["标签1", "标签2"],
  grade: "A",
  interactive: true,
  onClick: function() {
    G.Toast("点击了卡片");
  }
});
document.body.appendChild(card.element);
```

### 表单 Form

```html
<input class="gu-input" type="text" placeholder="普通输入框">
<input class="gu-input gu-input-search" type="text" placeholder="搜索输入框">
<select class="gu-input gu-select">
  <option>选项一</option>
  <option>选项二</option>
</select>
<textarea class="gu-input" placeholder="多行文本..."></textarea>
```

### 模态框 Modal

```javascript
new G.Modal({
  title: "模态框标题",
  content: "<p>内容...</p>",
  onClose: function() {
    G.Toast("已关闭");
  }
}).open();
```

### Toast 提示

```javascript
G.Toast("操作成功！", "success");
G.Toast("操作失败", "error");
G.Toast("警告信息", "warning");
G.Toast("提示信息", "info");
```

### 标签页 Tabs

```javascript
var tabs = new G.Tabs({
  items: [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" }
  ],
  onChange: function(index) {
    console.log("当前标签:", index);
  }
});
document.body.appendChild(tabs.element);
```

### 搜索栏 SearchBar

```javascript
var search = new G.SearchBar({
  placeholder: "搜索...",
  onSearch: function(val) {
    console.log("搜索:", val);
  }
});
document.body.appendChild(search.element);
```

### 统计数据 Stat

```javascript
var stat = new G.Stat({
  value: "1000+",
  label: "用户数量"
});
// 通常放入卡片中使用
var card = new G.Card({});
card.element.innerHTML = "";
card.element.appendChild(stat.element);
```

### 网格布局 Grid

```javascript
var grid = new G.Grid(3); // 3列网格
grid.add(card1);
grid.add(card2);
grid.add(card3);
document.body.appendChild(grid.element);
```

### Hero 英雄区

```javascript
var hero = new G.Hero({
  title: "GlassUI",
  description: "现代化 UI 组件库",
  actions: [
    G.el("button", { className: "gu-btn gu-btn-primary", textContent: "开始" }),
    G.el("button", { className: "gu-btn gu-btn-outline", textContent: "文档" })
  ]
});
document.body.appendChild(hero.element);
```

### 主题管理 ThemeManager

```javascript
var theme = new G.ThemeManager();

theme.get();           // 获取当前主题 ("dark" / "light")
theme.toggle();        // 切换主题
theme.set("dark");     // 设置深色主题
theme.set("light");    // 设置浅色主题
```

## 其他组件

### 标签 Tag

```html
<span class="gu-tag gu-tag-blue">blue</span>
<span class="gu-tag gu-tag-cyan">cyan</span>
<span class="gu-tag gu-tag-green">green</span>
<span class="gu-tag gu-tag-orange">orange</span>
<span class="gu-tag gu-tag-purple">purple</span>
<span class="gu-tag gu-tag-red">red</span>
<span class="gu-tag gu-tag-pink">pink</span>
<span class="gu-tag gu-tag-yellow">yellow</span>
<span class="gu-tag gu-tag-ghost">ghost</span>
```

### 评级 Grade

```html
<span class="gu-grade gu-grade-green">A</span>
<span class="gu-grade gu-grade-cyan">B</span>
<span class="gu-grade gu-grade-orange">C</span>
<span class="gu-grade gu-grade-red">D</span>
<span class="gu-grade gu-grade-red">F</span>
```

### 导航栏 Navbar（HTML版本）

```html
<nav class="gu-nav">
  <a href="#" class="gu-nav-brand">GlassUI</a>
  <div class="gu-nav-links">
    <a href="#" class="active">首页</a>
    <a href="#">组件</a>
    <a href="#">文档</a>
  </div>
  <div class="gu-nav-actions">
    <button class="gu-btn gu-btn-ghost gu-btn-sm">登录</button>
  </div>
</nav>
```

## 完整示例

创建一个 `index.html` 文件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App - Powered by GlassUI</title>
  
  <!-- 从 CDN 引入 GlassUI -->
  <link rel="stylesheet" href="https://momokula123.github.io/glassui/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://momokula123.github.io/glassui/css/glassui.css">
</head>
<body>
  <div id="app"></div>

  <script src="https://momokula123.github.io/glassui/js/glassui.js"></script>
  <script>
    var G = GlassUI;
    G.initBody();

    // 创建导航栏
    var nav = new G.Navbar({
      brand: "My App",
      links: [
        { label: "Home", href: "#", active: true },
        { label: "About", href: "#" }
      ]
    });

    // 创建 Hero 区域
    var hero = new G.Hero({
      title: "Welcome to My App",
      description: "Built with GlassUI",
      actions: [
        G.el("button", { className: "gu-btn gu-btn-primary", textContent: "Get Started" })
      ]
    });

    // 创建卡片
    var card = new G.Card({
      icon: '<i class="fas fa-rocket"></i>',
      title: "Feature Title",
      description: "Description of this feature.",
      tags: ["New", "Popular"],
      grade: "A"
    });

    // 组装页面
    var app = document.getElementById("app");
    app.appendChild(nav.element);
    app.appendChild(hero.element);
    app.appendChild(card.element);
  </script>
</body>
</html>
```

## 项目结构

```
glassui/
├── index.html          # 完整演示页面
├── css/
│   ├── glassui.css     # 深色主题样式（默认黑色）
│   ├── glassui-white.css  # 浅色主题样式（默认白色）
│   ├── glassui-v2.css  # 金色主题变体
│   └── font-awesome.min.css  # Font Awesome 图标库
├── js/
│   └── glassui.js      # JavaScript 组件库
└── fonts/              # 字体文件（自动加载）
```

## 自定义主题

修改 CSS 变量即可自定义配色：

```css
:root {
  /* 主色调 */
  --gu-accent-blue: #6c63ff;
  --gu-accent-cyan: #00d4ff;
  --gu-accent-green: #00e676;

  /* 背景色 */
  --gu-bg-primary: #0a0a0a;
  --gu-bg-secondary: #111111;

  /* 玻璃效果 */
  --gu-glass-bg: rgba(255, 255, 255, 0.05);
  --gu-glass-border: rgba(255, 255, 255, 0.1);

  /* 更多变量... */
}
```

## 可用的图标（Font Awesome）

GlassUI 集成了 Font Awesome 6.5.1，支持 2000+ 图标：

```html
<!-- 示例图标 -->
<i class="fas fa-home"></i>        <!-- 首页 -->
<i class="fas fa-user"></i>       <!-- 用户 -->
<i class="fas fa-cog"></i>         <!-- 设置 -->
<i class="fas fa-search"></i>      <!-- 搜索 -->
<i class="fas fa-heart"></i>       <!-- 心形 -->
<i class="fas fa-star"></i>        <!-- 星形 -->
<i class="fas fa-bolt"></i>        <!-- 闪电 -->
<i class="fas fa-moon"></i>        <!-- 月亮 -->
<i class="fas fa-sun"></i>         <!-- 太阳 -->

<!-- 更多图标请访问 https://fontawesome.com/icons -->
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - 自由使用、修改和分发。

---

Made by [momokula123](https://github.com/momokula123)

CDN provided by [GitHub Pages](https://pages.github.com/)