const moment = require('moment');

module.exports = {
  base:"/vuePress/",
  title:"张嘉家的个人博客",
  description:"使用VuePress制作的个人博客",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: '张嘉家' }],
    ['meta', { name: 'keyword', content: 'VuePress介绍,VuePress说明,张嘉家个人博客' }],
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],//插件要放在themeConfig外面
    themeConfig: {
      lastUpdated: '更新时间',
        // navbar:false, // 全局隐藏导航栏
      logo: '/assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'About1',link: '/about1'},
        { text: 'CSS', link:'/css/'},
        { text: 'JavaScript', link:'/javascript/'},
        {
        text: 'Languages',
          items: [
            { text: 'Group1', items: [
                { text:'test1',link:'/test1'},
                { text:'test2',link:'/test2'}
            ] },
            { text: 'Group2', items: [
                { text:"test1",link:'/test1'},
                { text:"test2",link:'/test2'}
            ] }
          ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
    // sidebar:'auto' //全局自动设置侧边栏sidebar
    //   sidebar:[
    //       '',
    //       'about',
    //       'about1',
    //       {
    //         title: '侧边栏分组',   // 必要的
    //         path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //         collapsable: false, // 可选的, 默认值是 true,
    //         sidebarDepth: 1,    // 可选的, 默认值是 1
    //         children: [
    //           '/css/c-aaa',
    //           '/css/c-bbb',
    //           '/css/c-ccc',
    //         ]
    //       },
    //   ],
         sidebar:{
            //匹配规则是从上往下，路径越短的，要放到最下方
             '/css/':[
                 '',
                 'c-aaa',
                 'c-bbb',
                 'c-ccc',
             ],
             '/javascript/':[
                 '',
                'j-aaa',
                'j-bbb',
                'j-ccc',
             ],
             "/":[
                "",
                'about',
                'about1'
             ],
         }
    }
  }