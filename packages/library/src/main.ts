import type { App } from 'vue'
import './assets/tailwind.css'
export * from './components/components'
export * from './globals'
import * as components from './components/components'

type Components = typeof components
declare module 'vue' {
  interface GlobalComponents {
    components: Components
  }
}

export function createJiaHaoVue() {
  const plugin = {
    install(app: App) {
      for (const key in components) {
        app.component(key, components[key as keyof Components])
      }
    },
  }

  return plugin
}
