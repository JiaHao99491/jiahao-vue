import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import JiaHaoTabs from '../JiaHaoTabs/JiaHaoTabs.vue'
import JiaHaoTab from '../JiaHaoTab/JiaHaoTab.vue'
import { ref } from 'vue'

describe('JiaHaoTabs.vue', () => {
  it('renders with correct type class', () => {
    const wrapper = mount(JiaHaoTabs, {
      props: { type: 'bordered' },
    })
    expect(wrapper.find('.tabs').classes()).toContain('tabs-bordered')
  })

  it('sets the active tab correctly', async () => {
    const wrapper = mount(JiaHaoTabs, {
      props: { type: 'lifted' },
      slots: {
        default: `
          <JiaHaoTab name="Tab1">Content1</JiaHaoTab>
          <JiaHaoTab name="Tab2">Content2</JiaHaoTab>
        `,
      },
      global: {
        components: {
          JiaHaoTab,
        },
      },
    })

    // 等待 DOM 更新
    await wrapper.vm.$nextTick()

    await wrapper.find('button[aria-label="Tab1"]').trigger('click')
    expect(wrapper.find('button[aria-label="Tab1"]').classes()).toContain('tab-active')
    const tabComponent = wrapper.findComponent(JiaHaoTab).vm as any
    expect(tabComponent.isActive).toBe(true)
  })

  it('provides tabs data correctly', () => {
    const wrapper = mount(JiaHaoTabs, {
      props: { type: 'boxed' },
    })
    expect((wrapper.vm as any).tabsData.activeTab).toBeUndefined()
  })
})

describe('JiaHaoTab.vue', () => {
  it('registers tab correctly', () => {
    const registerTab = vi.fn()
    mount(JiaHaoTab, {
      props: { name: 'Tab1' },
      global: {
        provide: {
          JiaHaoVueTabsComponentRegisterTab: registerTab,
          JiaHaoVueTabsData: ref({ activeTab: 'Tab1' }),
        },
      },
    })
    expect(registerTab).toHaveBeenCalledWith('Tab1')
  })

  it('computes isActive correctly', () => {
    const wrapper = mount(JiaHaoTab, {
      props: { name: 'Tab1' },
      global: {
        provide: {
          JiaHaoVueTabsComponentRegisterTab: () => {},
          JiaHaoVueTabsData: ref({ activeTab: 'Tab1' }),
        },
      },
    })
    const tabComponent = wrapper.vm as unknown as { isActive: boolean }
    expect(tabComponent.isActive).toBe(true)
  })
})
