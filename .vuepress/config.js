module.exports = {
  title: "junwen's blog",
  dest: './docs',
  base: '/myblog/',
  port: 9527,
  extraWatchFiles: ['./*'],
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/img/favicon.ico` }]
  ],
  markdown: {
    lineNumbers: true
  },
  theme: 'vdoing', // 使用依赖包主题
  plugins: [
    [
      'one-click-copy',
      {
        // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
  ],
  // plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    repo: 'https://github.com/syun0216/Front-end-notes',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在Github上编辑此页',
    docsDir: 'docs',
    docsBranch: 'master',    
    lastUpdated: '上次更新',
    nav: [{
        text: 'JavaScript',
        link: '/JavaScript/',
        items : [
          {
            text: 'ES6', 
            items: [
              {text: 'ES6 Decorator', link: '/pages/d9ebac/'},
              {text: 'ES6核心特性', link: '/pages/780ea1/'},
              {text: 'Promise&Generator', link: '/pages/c8677a/'},
            ]
          },
          {
            text: 'js原理', 
            items: [
              {text: '简单实现bind、apply和call', link: '/pages/1b56f1/'},
              {text: '如何遍历一个dom tree', link: '/pages/abdbcb/'},
              {text: '实现函数currying', link: '/pages/a8d5a8/'},
              {text: '实现一个event', link: '/pages/2c3bf4/'},
              {text: '详解js的继承', link: '/pages/4eb0e3/'},
              {text: '详解requestAnimationFrame', link: '/pages/64db0d/'},
              {text: 'Canvas api详解', link: '/pages/12cc8e/'},
              {text: 'DOM事件', link: '/pages/185d72/'},
              {text: 'EventLoop详解', link: '/pages/c49367/'},
              {text: 'JavaScript的内存管理', link: '/pages/b50bad/'},
              {text: 'JavaScript的运行机制', link: '/pages/38b7e6/'},
              {text: 'Math对象', link: '/pages/f16f62/'},
              {text: 'new操作符都做了什么', link: '/pages/6cd659/'},
              {text: 'create基本实现原理', link: '/pages/46dbec/'},
              {text: 'Set、Map、WeakSet和WeakMap', link: '/pages/d980a4/'},
              {text: 'web worker原理', link: '/pages/674ecf/'},
              {text: 'WebGL教程(MDN)', link: '/pages/aa8fa2/'},
            ]
          },
          {
            text: 'jsInfoSeries', 
            items: [
              {text: '简介', link: '/pages/7607c2/'},
              {text: 'JavaScript基础知识', link: '/pages/422096/'},
              {text: '基础知识2', link: '/pages/492e58/'},
              {text: '基础知识3', link: '/pages/30968d/'},
              {text: '基础知识4', link: '/pages/e139a1/'},
            ]
          },
          {
            text: '技巧', 
            items: [
              {text: ' 5个js解构有趣用途', link: '/pages/d7ece9/'},
              {text: '如何使用set提高代码性能', link: '/pages/c41df5/'},
              {text: 'cordova构建项目时的问题', link: '/pages/a66f47/'},
              {text: 'js中轻松遍历对象属性的几种方式', link: '/pages/662607/'},
            ]
          },
        ]
      },
      {
        text: 'CSS',
        link: '/css/',
        items: [
          {text: '怎么写出更好的css', link: '/pages/493b2e/'},
          {text: 'BFC详解', link: '/pages/f0604f/'},
          {text: 'box-shadow详解', link: '/pages/13ad2e/'},
          {text: 'CSS小技巧', link: '/pages/a07dbe/'},
          {text: 'Grid布局详解', link: '/pages/b81321/'},
        ]
      },
      {
        text: 'HTML',
        link: '/html/'
      },
      {
        text: '网络',
        link: '/web/',
        items: [
          {text: 'IP十问', link: '/pages/6f3543/'},
          {text: 'http笔试', link: '/pages/34aa02/'},
          {text: 'http协议', link: '/pages/13759c/'},
        ]
      },
      {
        text: '项目构建',
        link: '/project/',
        items: [
          {text: '浏览器原理', link: '/pages/8f406e/'},
          {text: '浏览器缓存其实就这么一回事儿', link: '/pages/0434c5/'},
          {text: '浏览器兼容性问题', link: '/pages/c048e3/'},
          {text: '移动端开发兼容性适配', link: '/pages/a7caa6/'},
          {text: '前端性能优化', link: '/pages/a986cc/'},
          {text: '前端如何进行seo优化', link: '/pages/c1a6d9/'},
          {text: 'webpack', items: [
            {text: 'webpack HMR', link: '/pages/f8772a/'},
            {text: 'webpack优化基本方法', link: '/pages/14a436/'},
          ]},
        ]
      },
      {
        text: '算法集合',
        link: '/algorithm/',
        items: [
          {text: 'leetcode题解', items: [
            {text: '两数之和', link: '/pages/0b0af3/'},
            {text: '判断整数是否为回文串', link: '/pages/acf1c6/'},
            {text: '无重复字符的最长子串', link: '/pages/5695b7/'},
          ]},
          {text: 'Js链表', link: '/pages/c29ced/'},
          {text: 'JavaScript排序', link: '/pages/ffcbad/'},
        ]
      },
      {
        text: '框架',
        link: '/framework/',
        items: [
          {text: 'React', items: [
            {text: '虚拟DOM原理理解', link: '/pages/8df2fb/'},
            {text: 'React Hook', link: '/pages/e61fb3/'},
            {text: '组件复用指南', link: '/pages/b5eeec/'},
          ]},
          {text: 'Vue', items: [
            {text: 'Vue举一反三', link: '/pages/c390d1/'},
          ]},
        ]
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
              title: '实现函数currying',
              path: '/JavaScript/js原理/实现函数currying'
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
            {
              title: '基础知识4',
              path: '/JavaScript/jsInfoSeries/基础知识4'
            },
          ]
        },
        {
          title: '技巧',
          collapsable: false,
          children: [{
              title: '5个js解构有趣用途',
              path: '/JavaScript/技巧/5个js解构有趣用途'
            },
            {
              title: '如何使用set提高代码性能',
              path: '/JavaScript/技巧/如何使用set提高代码性能'
            },
            {
              title: 'cordova构建项目时的问题',
              path: '/JavaScript/技巧/cordova构建项目时的问题'
            },
            {
              title: 'js中轻松遍历对象属性的几种方式',
              path: '/JavaScript/技巧/js中轻松遍历对象属性的几种方式'
            }
          ]
        }
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
        '/web/http协议'
      ],
      '/project/': [
        {title: '浏览器原理', path: '/project/浏览器原理', collapsable: false},
        {title: '浏览器缓存其实就这么一回事儿', path: '/project/浏览器缓存其实就这么一回事儿', collapsable: false},
        {title: '浏览器兼容性问题', path: '/project/浏览器兼容性问题', collapsable: false},
        {title: '移动端开发兼容性适配', path: '/project/移动端开发兼容性适配', collapsable: false},
        {title: '前端性能优化', path: '/project/前端性能优化', collapsable: false},
        {title: '前端如何进行seo优化', path: '/project/前端如何进行seo优化', collapsable: false},
        {title: 'webpack', collapsable: false, children: [
          '/project/webpack/webpack HMR.md',
          '/project/webpack/webpack优化基本方法.md',
        ]}      
      ],
      '/algorithm/': [
        {title: 'leetcode题解', collapsable: false, children: [
          {title: '两数之和',path: '/algorithm/leetcode题解/两数之和', collapsable: false},
          {title: '判断整数是否为回文串',path: '/algorithm/leetcode题解/判断整数是否为回文串', collapsable: false},
          {title: '无重复字符的最长子串',path: '/algorithm/leetcode题解/无重复字符的最长子串', collapsable: false},
          ],
        },
        '/algorithm/Js链表',
        '/algorithm/JavaScript排序'
      ],
      '/framework/': [
        {title: 'React',collapsable: false, children: [
          {title: '虚拟DOM原理理解',path: '/framework/React/虚拟DOM原理理解'},
          {title: 'React Hook',path: '/framework/React/React Hook'},
          {title: 'React组件复用指南',path: '/framework/React/组件复用指南'},
        ]},
        {
          title: 'Vue', collapsable: false, children: [
            {title: 'Vue原理举一反三', path: '/framework/Vue/Vue举一反三'}
          ]
        }
      ],
      '/interview/': [
        {title: '面试',path: '/interview/'},
        {title: '大漠面试3',path: '/interview/大漠面试3'},
        {title: '大漠面试4', path: '/interview/大漠面试4'},
        {title: '乐信2面', path: '/interview/乐信2面'},
        {title: 'Shopee1面', path: '/interview/Shopee1面'},
        {title: '阿里1面', path: '/interview/阿里1面'},
        {title: '头条1面', path: '/interview/头条1面'},
        {title: '微众银行1面', path: '/interview/微众银行1面'},
        {title: '腾讯qq音乐1面', path: '/interview/腾讯qq音乐1面'},
        {title: '高频面试总结', path: '/interview/高频面试总结'},
        {title: '大前端面试宝典', path: '/interview/大前端面试宝典'}
      ],
      '/books/': [
        {title: '白帽子讲web安全', collapsable: false, children: [
          {title: 'HTML5安全',path: '/books/白帽子讲web安全/HTML5安全', collapsable:false},
          {title: 'PHP安全',path: '/books/白帽子讲web安全/PHP安全', collapsable:false},
          {title: 'WebServer配置安全',path: '/books/白帽子讲web安全/WebServer配置安全', collapsable:false},
          {title: 'Web框架安全',path: '/books/白帽子讲web安全/Web框架安全', collapsable:false},
          {title: '互联网业务安全',path: '/books/白帽子讲web安全/互联网业务安全', collapsable:false},
          {title: '加密算法和随机数',path: '/books/白帽子讲web安全/加密算法和随机数', collapsable:false},
          {title: '安全的开发流程',path: '/books/白帽子讲web安全/安全的开发流程', collapsable:false},
          {title: '安全运营',path: '/books/白帽子讲web安全/安全运营', collapsable:false},
          {title: '应用层拒绝服攻击',path: '/books/白帽子讲web安全/应用层拒绝服攻击', collapsable:false},
          {title: '文件上传漏洞',path: '/books/白帽子讲web安全/文件上传漏洞', collapsable:false},
          {title: '注入攻击',path: '/books/白帽子讲web安全/注入攻击', collapsable:false},
          {title: '点击劫持',path: '/books/白帽子讲web安全/点击劫持', collapsable:false},
          {title: '认证与会话管理',path: '/books/白帽子讲web安全/认证与会话管理', collapsable:false},
          {title: '访问控制',path: '/books/白帽子讲web安全/访问控制', collapsable:false},
          {title: '跨站点请求伪造(CSRF)',path: '/books/白帽子讲web安全/跨站点请求伪造(CSRF)', collapsable:false},
          {title: '跨站脚本攻击',path: '/books/白帽子讲web安全/跨站脚本攻击', collapsable:false}
        ]},
        {title: '深入react技术栈', collapsable: false, children: [
          '/books/深入react技术栈/chapter1.md'
        ]},
        {title: '高性能建站', path: '/books/高性能网站建设指南/高性能网站建设指南'},
        {title: '冴羽系列文章链接', path: '/books/冴羽系列文章链接'},
      ],
    },
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'junwen', // 必需
      link: 'https://github.com/syun0216', // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: 'https://avatars.githubusercontent.com/u/18444325?s=460&u=6548250d9e4ad26571995008d5e74401d4b2243b&v=4',
      name: 'Syun0216',
      slogan: '多读书多种树',
    },
    category: true,
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:517897442@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/syun0216',
        }
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        'Syun',
    },
  },
}