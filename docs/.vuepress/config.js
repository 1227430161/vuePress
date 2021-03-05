const moment = require('moment');

module.exports = {
  base: "/vuePress/",
  title: "张嘉家的个人博客",
  description: "使用VuePress制作的个人博客",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: '张嘉家' }],
    ['meta', { name: 'keyword', content: 'VuePress介绍,VuePress说明,张嘉家个人博客' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format("LLLL")
      }
    },
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: '1227430161',
        repo: 'vuePress',
        clientId: '26e927f6d0d5325e0169',
        clientSecret: '00e17364019d320659870f3c745373b95bade54e',
        autoCreateIssue: true
      },
    },

    //插件要放在themeConfig外面
    themeConfig: {
      lastUpdated: '更新时间',
      // navbar:false, // 全局隐藏导航栏
      logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        {
          text: '学习',
          items: [
            {
              text: '前端', items: [
                { text: 'test1', link: '/test1' },
                { text: 'test2', link: '/test2' }
              ]
            },
            {
              text: '后端', items: [
                { text: "test1", link: '/test1' },
                { text: "test2", link: '/test2' }
              ]
            },
          ]
        },
        { text: '生活', link: '/about1' },
        { text: '其他', link: '/css/' },
        { text: '关于', link: '/javascript/' },
        {
          text: '链接',
          items: [
            { text: 'GitHub', link: 'https://github.com/1227430161/vuePress' },
            { text: 'Gitee', link: 'xxxxxx' }
          ]
        },
      ],

      //页面滚动效果
      smoothScroll: true,

      // sidebar:'auto' //全局自动设置侧边栏sidebar
      // sidebar:[
      //     '',
      //     'about',
      //     'about1',
      //     {
      //       title: '侧边栏分组',   // 必要的
      //       path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //       collapsable: false, // 可选的, 默认值是 true,
      //       sidebarDepth: 1,    // 可选的, 默认值是 1
      //       children: [
      //         '/css/c-aaa',
      //         '/css/c-bbb',
      //         '/css/c-ccc',
      //       ]
      //     },
      // ],
      sidebar: {
        //匹配规则是从上往下，路径越短的，要放到最下方
        '/css/': [
          '',
          'c-aaa',
          'c-bbb',
          'c-ccc',
        ],
        '/javascript/': [
          '',
          'j-aaa',
          'j-bbb',
          'j-ccc',
        ],
        "/": [
          "",
          'about',
          'about1'
        ],
      }
    }
  }