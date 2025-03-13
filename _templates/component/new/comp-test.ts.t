---
to: packages/library/src/components/__tests__/<%= h.componentNameNoPrefix(name) %>.spec.ts
---
import { mount } from '@vue/test-utils'
import <%= h.componentNameWithPrefix(name) %> from '../<%= h.componentNameWithPrefix(name) %>/<%= h.componentNameWithPrefix(name) %>.vue'
import { describe, it, expect } from 'vitest'

describe('<%= h.componentNameWithPrefix(name) %>', () => {
  it('<%= h.componentNameWithPrefix(name) %>', () => {
    const wrapper = mount(<%= h.componentNameWithPrefix(name) %>)
  })
})
