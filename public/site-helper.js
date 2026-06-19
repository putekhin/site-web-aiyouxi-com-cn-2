// public/site-helper.js
(function() {
  'use strict';

  // 配置数据
  const config = {
    siteUrl: 'https://site-web-aiyouxi.com.cn',
    keyword: '爱游戏',
    cardTitle: '站点导航',
    badgeLabel: '热门'
  };

  // 页面提示卡片数据
  const cardData = {
    title: config.cardTitle,
    description: '欢迎访问我们的网站。本页提供关键词浏览与快速导航功能。',
    link: config.siteUrl,
    linkText: '前往 ' + config.keyword
  };

  // 关键词徽章数据
  const badgeKeywords = ['爱游戏', '游戏攻略', '新游推荐', '玩家社区', '游戏资讯'];

  // 访问说明数据
  const instructions = [
    { icon: '📖', text: '浏览关键词徽章，快速了解本站内容分类。' },
    { icon: '🔍', text: '点击徽章可查看相关页面的更多信息。' },
    { icon: '💡', text: '站点内容持续更新，请留意最新动态。' }
  ];

  // 创建卡片元素
  function createCard() {
    const card = document.createElement('div');
    card.className = 'site-helper-card';
    card.innerHTML = `
      <h3>${escapeHtml(cardData.title)}</h3>
      <p>${escapeHtml(cardData.description)}</p>
      <a href="${escapeHtml(cardData.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cardData.linkText)}</a>
    `;
    return card;
  }

  // 创建徽章列表
  function createBadgeList() {
    const list = document.createElement('ul');
    list.className = 'site-helper-badges';
    badgeKeywords.forEach(function(keyword) {
      const item = document.createElement('li');
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = keyword;
      item.appendChild(badge);
      list.appendChild(item);
    });
    return list;
  }

  // 创建访问说明列表
  function createInstructionList() {
    const list = document.createElement('ol');
    list.className = 'site-helper-instructions';
    instructions.forEach(function(inst) {
      const item = document.createElement('li');
      item.textContent = inst.icon + ' ' + inst.text;
      list.appendChild(item);
    });
    return list;
  }

  // 简单的 HTML 转义函数
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // 注入样式
  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = `
      .site-helper-card {
        background: #f9f9fb;
        border: 1px solid #dcdde1;
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 16px;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .site-helper-card h3 {
        margin: 0 0 8px 0;
        font-size: 1.2em;
        color: #2c3e50;
      }
      .site-helper-card p {
        margin: 0 0 12px 0;
        color: #555;
      }
      .site-helper-card a {
        color: #3498db;
        text-decoration: none;
        font-weight: 500;
      }
      .site-helper-card a:hover {
        text-decoration: underline;
      }
      .site-helper-badges {
        list-style: none;
        padding: 0;
        margin: 0 0 16px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .site-helper-badges li {
        margin: 0;
      }
      .badge {
        display: inline-block;
        background: #e74c3c;
        color: #fff;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.85em;
        font-weight: 600;
      }
      .site-helper-instructions {
        margin: 0;
        padding-left: 20px;
        color: #333;
        line-height: 1.6;
      }
    `;
    document.head.appendChild(style);
  }

  // 初始化函数
  function init() {
    injectStyles();

    var container = document.createElement('div');
    container.className = 'site-helper-container';

    container.appendChild(createCard());
    container.appendChild(createBadgeList());
    container.appendChild(createInstructionList());

    // 将容器插入到页面主体中
    var target = document.body;
    if (target) {
      target.appendChild(container);
    }
  }

  // 确保在 DOM 加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();