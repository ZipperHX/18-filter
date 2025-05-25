# 🔄 18+filter- 成人内容拦截跳转学习插件

![License](https://img.shields.io/badge/license-MIT-green)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-v4.19+-blue)
![Chrome](https://img.shields.io/badge/Chrome-supported-brightgreen)
![Firefox](https://img.shields.io/badge/Firefox-supported-brightgreen)

## 📌 项目简介

**18+filter**是一款油猴(Tampermonkey)脚本，当检测到用户尝试搜索色情内容时，会自动跳转到B站学习区（默认跳转B站知名物理老师"黄夫人"的教学视频）。本工具旨在帮助用户培养健康上网习惯，将注意力转向有价值的学习内容。

## ✨ 功能特点

- 🛡️ **智能关键词拦截**：内置常见色情相关关键词识别
- 📚 **自动跳转学习**：跳转至B站优质学习内容
- 🔧 **高度可配置**：支持自定义关键词和跳转目标
- 🔍 **多搜索引擎支持**：兼容Google、百度、必应等主流搜索引擎
- 📊 **隐私保护**：所有处理在本地完成，不收集任何用户数据

## 🛠️ 安装方法

1. 确保已安装[Tampermonkey](https://www.tampermonkey.net/)浏览器扩展
2. 点击以下安装链接：
   [![安装脚本](https://img.shields.io/badge/安装脚本-点击这里-orange)](https://github.com/yourname/healthy-browsing-helper/raw/main/healthy-browsing-helper.user.js)
3. 点击"安装"按钮完成安装

## ⚙️ 自定义配置

脚本支持通过修改代码开头的`config`对象进行自定义：

```javascript
const config = {
    keywords: ['色情', ' porn', '成人', '裸体', 'xxx'], // 拦截关键词列表
    targetUrl: 'https://search.bilibili.com/all?keyword=黄夫人', // 跳转目标
    enableConsoleLog: false, // 调试日志开关
    requireWholeWord: false // 是否要求完整单词匹配
};
```

## 🌟 推荐跳转目标

| 学习领域       | B站搜索链接                          |
|----------------|-------------------------------------|
| 物理教学       | `https://search.bilibili.com/all?keyword=黄夫人` |
| 编程学习       | `https://search.bilibili.com/all?keyword=编程教学` |
| 英语学习       | `https://search.bilibili.com/all?keyword=英语学习` |
| 科普知识       | `https://search.bilibili.com/all?keyword=科普中国` |

## 🤝 贡献指南

欢迎提交Pull Request或Issue来：
- 完善关键词列表
- 添加对新搜索引擎的支持
- 改进匹配算法
- 添加更多优质学习资源

## 📜 开源协议

本项目采用[MIT License](LICENSE)开源协议。

## 📢 免责声明

本工具仅供学习研究使用，开发者不对用户的使用行为负责。请合理合法使用互联网资源。
