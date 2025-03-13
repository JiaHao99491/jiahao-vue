import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoBrowserMockup from '../JiaHaoBrowserMockup/JiaHaoBrowserMockup.vue'

describe('JiaHaoBrowserMockup.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoBrowserMockup, {
      props: { url: 'https:/xxx.com' },
      slots: {
        default: 'Hello!',
      },
    })
    expect(wrapper.text()).toContain('Hello!')
    expect(wrapper.find('.mockup-browser-toolbar .input').text()).toBe('https:/xxx.com')
  })

  it('renders with default slot content', () => {
    const wrapper = mount(JiaHaoBrowserMockup, {
      props: { url: 'https:/xxx.com' },
      slots: {
        default: 'Hello!',
      },
    })
    expect(wrapper.html()).toContain('Hello!')
  })

  it('renders toolbar with correct URL', () => {
    const wrapper = mount(JiaHaoBrowserMockup, {
      props: { url: 'https:/xxx.com' },
    })
    const toolbar = wrapper.find('.mockup-browser-toolbar .input')
    expect(toolbar.exists()).toBe(true)
    expect(toolbar.text()).toBe('https:/xxx.com')
  })
})
