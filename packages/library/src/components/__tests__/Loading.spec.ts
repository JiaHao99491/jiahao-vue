import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoLoading from '../JiaHaoLoading/JiaHaoLoading.vue'

describe('JiaHaoLoading.vue', () => {
  it('renders with correct type class', () => {
    const wrapper = mount(JiaHaoLoading, {
      props: { type: 'dots' },
    })
    expect(wrapper.classes()).toContain('loading-dots')
  })

  it('renders with correct size class', () => {
    const wrapper = mount(JiaHaoLoading, {
      props: { size: 'sm' },
    })
    expect(wrapper.classes()).toContain('loading-sm')
  })

  it('renders with correct color class', () => {
    const wrapper = mount(JiaHaoLoading, {
      props: { color: 'primary' },
    })
    expect(wrapper.classes()).toContain('text-primary')
  })

  it('renders with default type class when type is not provided', () => {
    const wrapper = mount(JiaHaoLoading)
    expect(wrapper.classes()).toContain('loading-spinner')
  })

  it('renders with default size class when size is not provided', () => {
    const wrapper = mount(JiaHaoLoading)
    expect(wrapper.classes()).toContain('loading-md')
  })
})
