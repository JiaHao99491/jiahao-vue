import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'JiaHaoVue',
  description: 'A Vue Component Library based on the Daisy UI CSS Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Playground', link: 'https://daisy-vue-stories.netlify.app/' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Loading', link: '/components/loading' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'BrowserMockup', link: '/components/browsermockup' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'Accordian', link: '/components/accordian' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Steps', link: '/components/steps' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'AvatarGroup', link: '/components/avatargroup' },
          { text: 'Table', link: '/components/table' },
          { text: 'Menu', link: '/components/menu' }
          // do not remove - used by hygen
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
