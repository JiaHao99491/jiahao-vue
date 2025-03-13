// https://vitepress.dev/guide/custom-theme
import { h, defineComponent, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { initThemeSwitcher } from './theme-switcher-support'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(
      defineComponent({
        setup() {
          onMounted(() => {
            initThemeSwitcher()
          })
          return () =>
            h(DefaultTheme.Layout, null, {
              // https://vitepress.dev/guide/extending-default-theme#layout-slots
            })
        }
      })
    )
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
