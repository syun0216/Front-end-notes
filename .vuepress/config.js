module.exports = {
  title: '前端学习文档',
  dest: './docs',
  base: '/Front-end-notes/',
  port: 9527,
  extraWatchFiles: ['./*'],
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  themeConfig: {
    repo: 'https://github.com/syun0216/Front-end-notes',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在Github上编辑此页',
    docsDir: '/',
    docsBranch: 'master',
    plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links', '@vuepress/nprogress'],
    lastUpdated: '上次更新',
    nav: [{
        text: 'JavaScript',
        link: '/JavaScript/'
      },
      {
        text: 'CSS',
        link: '/css/'
      },
      {
        text: 'HTML',
        link: '/html/'
      },
      {
        text: '网络',
        link: '/web/'
      },
      {
        text: '项目构建',
        link: '/project/'
      },
      {
        text: '算法集合',
        link: '/algorithm/'
      },
      {
        text: '框架',
        link: '/framework/'
      },
      {
        text: '面试题',
        link: '/interview/'
      },
      {
        text: '读书笔记',
        link: '/books/'
      },
    ],
    sidebar: {
      '/JavaScript/': [{
          title: 'ES6',
          collapsable: false,
          children: [{
              title: 'ES6 Decorator',
              path: '/JavaScript/ES6/ES6 Decorator'
            },
            {
              title: 'ES6核心特性',
              path: '/JavaScript/ES6/ES6核心特性'
            },
            {
              title: 'Promise&Generator',
              path: '/JavaScript/ES6/Promise&Generator'
            },
          ]
        },
        {
          title: 'js原理',
          collapsable: false,
          children: [{
              title: '简单实现bind、apply和call',
              path: '/JavaScript/js原理/简单实现bind、apply和call'
            },
            {
              title: '如何遍历一个dom tree',
              path: '/JavaScript/js原理/如何遍历一个dom tree'
            },
            {
              title: '实现一个event',
              path: '/JavaScript/js原理/实现一个event'
            },
            {
              title: '详解js的继承',
              path: '/JavaScript/js原理/详解js的继承'
            },
            {
              title: '详解requestAnimationFrame',
              path: '/JavaScript/js原理/详解requestAnimationFrame'
            },
            {
              title: 'Canvas api详解',
              path: '/JavaScript/js原理/Canvas api详解'
            },
            {
              title: 'DOM事件',
              path: '/JavaScript/js原理/DOM事件'
            },
            {
              title: 'EventLoop详解',
              path: '/JavaScript/js原理/EventLoop详解'
            },
            {
              title: 'JavaScript的内存管理',
              path: '/JavaScript/js原理/JavaScript的内存管理'
            },
            {
              title: 'JavaScript的运行机制',
              path: '/JavaScript/js原理/JavaScript的运行机制'
            },
            {
              title: 'Math对象',
              path: '/JavaScript/js原理/Math对象'
            },
            {
              title: 'new操作符都做了什么',
              path: '/JavaScript/js原理/new操作符都做了什么'
            },
            {
              title: 'Object.create基本实现原理',
              path: '/JavaScript/js原理/Object.create基本实现原理'
            },
            {
              title: 'Set、Map、WeakSet和WeakMap',
              path: '/JavaScript/js原理/Set、Map、WeakSet和WeakMap'
            },
            {
              title: 'web worker原理',
              path: '/JavaScript/js原理/web worker原理'
            },
            {
              title: 'WebGL教程(MDN)',
              path: '/JavaScript/js原理/WebGL教程(MDN)'
            },
          ]
        },
        {
          title: 'jsInfoSeries',
          collapsable: false,
          children: [{
              title: '简介',
              path: '/JavaScript/jsInfoSeries/简介'
            },
            {
              title: 'JavaScript基础知识',
              path: '/JavaScript/jsInfoSeries/JavaScript基础知识'
            },
            {
              title: '基础知识2',
              path: '/JavaScript/jsInfoSeries/基础知识2'
            },
            {
              title: '基础知识3',
              path: '/JavaScript/jsInfoSeries/基础知识3'
            },
          ]
        },
      ],
      '/css/': [{
          title: '怎么写出更好的css',
          collapsable: false,
          path: '/css/怎么写出更好的css'
        },
        {
          title: 'BFC详解',
          collapsable: false,
          path: '/css/BFC详解'
        },
        {
          title: 'box-shadow详解',
          collapsable: false,
          path: '/css/box-shadow详解'
        },
        {
          title: 'CSS小技巧',
          collapsable: false,
          path: '/css/CSS小技巧'
        },
        {
          title: 'Grid布局详解',
          collapsable: false,
          path: '/css/Grid布局详解'
        },
      ],
      '/html/': [],
      '/web/': [
        '/web/IP十问',
        '/web/http笔试',
        '/web/http协议',
      ],
      '/project/': [
        '/project/浏览器原理',
        '/project/浏览器兼容性问题',
        '/project/移动端开发兼容性适配',
        '/project/前端性能优化',
        '/project/前端如何进行seo优化',
        {title: 'webpack', collapsable: false, children: [
          '/project/webpack/webpack HMR.md',
          '/project/webpack/webpack优化基本方法.md',
        ]}      
      ],
      '/algorithm/': [
        {title: 'leetcode题解', collapsable: false, children: [
          '/algorithm/leetcode题解/两数之和',
          '/algorithm/leetcode题解/判断整数是否为回文串',
          '/algorithm/leetcode题解/无重复字符的最长子串'
        ]}
      ],
      '/framework/': [
        {title: 'React',collapsable: false, children: [
          '/framework/React/虚拟DOM原理理解',
          '/framework/React/React Hook',
          {title: 'React组件复用指南',path: '/framework/React/组件复用指南'},
        ]}
      ],
      '/interview/': [
        {title: '面试',path: '/interview/'},
        {title: '大漠面试3',path: '/interview/大漠面试3'},
        {title: '大漠面试4', path: '/interview/大漠面试4'},
      ],
      '/books/': [
        {title: '白帽子讲web安全', collapsable: false, children: [
          '/books/白帽子讲web安全/HTML5安全',
          '/books/白帽子讲web安全/PHP安全',
          '/books/白帽子讲web安全/WebServer配置安全',
          '/books/白帽子讲web安全/Web框架安全',
          '/books/白帽子讲web安全/互联网业务安全',
          '/books/白帽子讲web安全/加密算法和随机数',
          '/books/白帽子讲web安全/安全的开发流程',
          '/books/白帽子讲web安全/安全运营',
          '/books/白帽子讲web安全/应用层拒绝服攻击',
          '/books/白帽子讲web安全/文件上传漏洞',
          '/books/白帽子讲web安全/注入攻击',
          '/books/白帽子讲web安全/点击劫持',
          '/books/白帽子讲web安全/认证与会话管理',
          '/books/白帽子讲web安全/访问控制',
          '/books/白帽子讲web安全/跨站点请求伪造(CSRF)',
          '/books/白帽子讲web安全/跨站脚本攻击'
        ]},
        {title: '深入react技术栈', collapsable: false, children: [
          '/books/深入react技术栈/chapter1.md'
        ]},
        {title: '高性能建站', path: '/books/高性能网站建设指南/高性能网站建设指南'},
        {title: '冴羽系列文章链接', path: '/books/冴羽系列文章链接'},
      ],
    }
  },
}