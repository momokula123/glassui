# GlassUI ✨

现代化的**玻璃拟态（Glassmorphism）UI 组件库**，采用毛玻璃效果与半透明背景设计，支持暗色/亮色双主题切换。

[![GitHub stars](https://img.shields.io/github/stars/momokula123/glassui?style=flat-square)](https://github.com/momokula123/glassui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/momokula123/glassui?style=flat-square)](https://github.com/momokula123/glassui/network)
[![GitHub license](https://img.shields.io/github/license/momokula123/glassui?style=flat-square)](https://github.com/momokula123/glassui/blob/main/LICENSE)

## 🌐 在线演示

👉 **[点击查看在线演示](https://momokula123.github.io/glassui)** 👈

## 🌟 特性

- 🎨 **玻璃拟态风格** - 毛玻璃效果 + 半透明背景
- 🌓 **双主题切换** - 深色/浅色主题一键切换
- ⚡ **轻量无依赖** - 纯原生 JavaScript 实现
- 📦 **50+ 丰富组件** - 按钮、卡片、表单、导航等
- ✨ **优雅动画** - CSS3 流畅动效系统
- 📱 **完美响应式** - 支持桌面/平板/移动端

## 🚀 快速开始

### 引入文件

```html
<link rel="stylesheet" href="css/glassui.css">
<script src="js/glassui.js"></script>
```

### 初始化

```javascript
var G = GlassUI;
G.initBody();
```

## 📦 核心组件

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
```

### 卡片 Card

```javascript
var card = new G.Card({
  icon: "🎨",
  title: "标题",
  subtitle: "副标题",
  description: "卡片描述内容...",
  tags: ["标签1", "标签2"],
  grade: "A",        // A-F 评级
  interactive: true,
  onClick: function() {
    console.log("点击了卡片");
  }
});
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
    console.log("已关闭");
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
```

### 搜索栏 SearchBar

```javascript
var search = new G.SearchBar({
  placeholder: "搜索...",
  onSearch: function(val) {
    console.log("搜索:", val);
  }
});
```

### 统计数据 Stat

```javascript
var stat = new G.Stat({
  value: "1000+",
  label: "用户数量"
});
```

### 网格布局 Grid

```javascript
var grid = new G.Grid(3); // 3列网格
grid.add(card);
grid.add(card2);
grid.add(card3);
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
```

### 主题管理 ThemeManager

```javascript
var theme = new G.ThemeManager();

theme.get();           // 获取当前主题 ("dark" / "light")
theme.toggle();        // 切换主题
theme.set("dark");     // 设置深色主题
theme.set("light");    // 设置浅色主题
```

## 🏷️ 其他组件

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

## 📁 项目结构

```
glassui/
├── index.html          # 演示页面（含所有组件示例）
├── css/
│   ├── glassui.css     # 主样式文件
│   └── glassui-v2.css  # 金色主题变体
└── js/
    └── glassui.js      # JavaScript 组件库
```

## 🎨 自定义主题

修改 CSS 变量即可自定义配色：

```css
:root {
  --gu-accent-blue: #6c63ff;
  --gu-accent-cyan: #00d4ff;
  --gu-accent-green: #00e676;
  /* ... 更多变量 */
}
```

## 📄 License

MIT License

---

Made with ❤️ by [momokula123](https://github.com/momokula123)