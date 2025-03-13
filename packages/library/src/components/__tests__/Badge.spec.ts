import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoBadge from '../JiaHaoBadge/JiaHaoBadge.vue'

describe('JiaHaoBadge.vue', () => {
  it('renders the component correctly with size prop', () => {
    const wrapper = mount(JiaHaoBadge, {
      props: { size: 'md' },
      slots: {
        default: '24',
      },
    })
    expect(wrapper.text()).toContain('24')
    expect(wrapper.classes()).toContain('badge-md')
  })

  it('renders the component correctly with color prop', () => {
    const wrapper = mount(JiaHaoBadge, {
      props: { color: 'primary' },
      slots: {
        default: '24',
      },
    })
    expect(wrapper.text()).toContain('24')
    expect(wrapper.classes()).toContain('badge-primary')
  })

  it('renders the component correctly with outline prop', () => {
    const wrapper = mount(JiaHaoBadge, {
      props: { outline: true },
      slots: {
        default: '24',
      },
    })
    expect(wrapper.text()).toContain('24')
    expect(wrapper.classes()).toContain('badge-outline')
  })
})
