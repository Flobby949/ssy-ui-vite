import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import SSYUI from '../../../src/entry'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SSYUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}