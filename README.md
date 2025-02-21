# iSQ UI

iSQ UI 是一套基于 Vue 3.0 的轻量级 UI 组件库，使用 TypeScript 开发。

## 特点

- 🛠 Vue 3.0 Composition API
- 📦 使用 TypeScript 构建，提供完整的类型定义
- ⚡️ 轻量、简约、易用的组件体系
- 🎨 样式美观，支持移动端显示
- 📝 详细的文档和示例

## 组件

目前已实现的组件:

- Button 按钮 - 支持多种主题、尺寸和状态
- Switch 开关 - 基础开关组件
- Modal 模态框 - 对话框组件，支持自定义内容
- Tabs 选项卡 - 标签页切换组件

## 安装

```bash
# npm
npm install isq-ui

# yarn
yarn add isq-ui
```

## 使用

```bash
import { Button } from 'isq-ui'
import 'isq-ui/dist/lib/isq.css'

export default {
  components: {
    Button
  }
}
```

## 开发

```bash
# 安装依赖
yarn

# 本地开发
yarn dev

# 构建
yarn build
```

## 开源协议

MIT
