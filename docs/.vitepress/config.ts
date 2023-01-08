const sidebar = {
    '/': [
        { text: '快速开始', link: '/'},
        { 
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/'},
            ]
        },
        { text: '导航'},
        { text: '反馈'},
        { text: '数据录入'},
        { text: '数据展示'},
        { text: '布局'},
    ]
}

module.exports = {
    // 网站标题
    title: 'Flobby',
    // 网站描述
    description: 'Just For Study',
    // 主题配置
    themeConfig: {
        // 左侧导航栏
        sidebar,
        //丝滑滚动
        smoothScroll: true,
        // 启用时间线
        editLinks: true,
        //在git上编辑提示文字
        // editLinkText: '在 GitHub 上编辑此页',
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新'
    },
    // Markdown 拓展
    markdown: {
        config: (md) => {
            // 添加DemoBlock插槽
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}

