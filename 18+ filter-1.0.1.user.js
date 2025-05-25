// ==UserScript==
// @name         18+ filter
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  当搜索内容包含敏感词汇时，跳转到哔哩哔哩黄夫人视频
// @author       ZipperHX
// @match        *://www.google.com/*
// @match        *://www.baidu.com/*
// @match        *://www.bing.com/*
// @match        *://cn.bing.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 配置部分 - 可以在这里修改关键词和目标URL
    const config = {
        keywords: ['jk', '美女', '萝莉','白丝','黑丝','av','sex','pornhub'],  // 触发跳转的关键词（只要包含任意一个）
        targetUrl: 'https://www.bilibili.com/video/BV1A5411E7Q1/?spm_id_from=333.337.search-card.all.click', // 跳转目标
        enableConsoleLog: true,      // 是否启用调试日志
        requireWholeWord: false      // 设为true则要求完整单词匹配
    };

    // 调试日志函数
    function log(message) {
        if(config.enableConsoleLog) {
            console.log(`[18+ filter] ${message}`);
        }
    }

    // 获取当前搜索引擎的搜索词
    function getSearchQuery() {
        const params = new URLSearchParams(window.location.search);
        const host = window.location.hostname;

        if(host.includes('bing.com')) {
            return params.get('q') || '';
        }
        else if(host.includes('baidu.com')) {
            return params.get('wd') || '';
        }
        else {
            return params.get('q') || '';
        }
    }

    // 检查搜索词是否包含关键词
    function shouldRedirect(query) {
        if(!query) return false;

        // 统一处理查询词（去除前后空格，转为小写，解码URL）
        const processedQuery = decodeURIComponent(query.trim().toLowerCase());

        // 检查是否包含任一关键词
        return config.keywords.some(keyword => {
            const processedKeyword = keyword.trim().toLowerCase();

            if(config.requireWholeWord) {
                // 完整单词匹配模式（使用正则表达式）
                const regex = new RegExp(`\\b${processedKeyword}\\b`, 'i');
                return regex.test(processedQuery);
            } else {
                // 简单包含模式
                return processedQuery.includes(processedKeyword);
            }
        });
    }

    // 执行跳转检查
    function checkAndRedirect() {
        const query = getSearchQuery();
        log(`检测到搜索词: "${query}" (原始值)`);

        if(shouldRedirect(query)) {
            log(`检测到包含关键词 "${query}"，正在跳转到哔哩哔哩...`);
            window.location.href = config.targetUrl;
        }
    }

    // 初始化脚本
    function init() {
        log('脚本已加载，开始监听搜索词...');

        // 立即检查
        checkAndRedirect();

        // 监听URL变化
        let lastUrl = window.location.href;
        const observer = new MutationObserver(() => {
            if(window.location.href !== lastUrl) {
                lastUrl = window.location.href;
                checkAndRedirect();
            }
        });

        observer.observe(document, {subtree: true, childList: true});

        // 延迟检查以防万一
        setTimeout(checkAndRedirect, 800);
    }

    // 启动脚本
    init();
})();