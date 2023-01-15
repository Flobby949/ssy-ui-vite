// import { DefaultTheme } from 'vitepress'


// const sidebar: DefaultTheme.Sidebar = {
//   '/guide': [
//     {
//       text: '指南',
//       items: [
//         { text: '组件库', link: '/components/button/' }
//       ]
//     }
//   ],
//   '/components': [
//     {
//       text: '通用基础组件',
//       items: [
//         { text: '按钮', link: '/components/button/' },
//         { text: '链接', link: '/components/link/' }
//       ]
//     },
//     {
//       text: '通用业务组件',
//       items: [
//         { text: '通用组件 1', link: '/components/common-component1/' },
//         { text: '通用组件 2', link: '/components/common-component2/' }
//       ]
//     },
//     {
//       text: '高级业务组件',
//       items: [
//         { text: '高级组件 1', link: '/components/pro-component1/' },
//         { text: '高级组件 2', link: '/components/pro-component2/' }
//       ]
//     }
//   ]
// }




const config = {
  title: "SSY-UI-FLOBBY",
  description: "组件库搭建文档",
  themeConfig: {
    // logo: '/logo.png',
    siteTitle: 'SSY-UI-VITE',
    lang: 'cn-ZH',
    base: '/',
    lastUpdated: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flobby949/ssy-ui-vite' }
    ],
    // sidebar
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '首页', link: '/' },
          { text: '按钮', link: '/components/button/' },
          { text: '导航' },
          { text: '反馈' },
          { text: '数据录入' },
          { text: '数据展示' },
          { text: '布局' },
        ]
      }
    ],
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }

}
export default config