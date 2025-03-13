import { mount } from '@vue/test-utils'
import JiaHaoButton from '../JiaHaoButton/JiaHaoButton.vue'
import { describe, it, expect } from 'vitest'

describe('JiaHaoButton', () => {
  it('renders default button', () => {
    const wrapper = mount(JiaHaoButton)
    expect(wrapper.classes()).toContain('btn')
  })

  it('applies color classes', () => {
    const wrapper = mount(JiaHaoButton, {
      props: { color: 'primary' },
    })
    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('applies other classes based on props', () => {
    const wrapper = mount(JiaHaoButton, {
      props: { active: true, circle: true, outline: true },
    })
    expect(wrapper.classes()).toContain('btn-active')
    expect(wrapper.classes()).toContain('btn-circle')
    expect(wrapper.classes()).toContain('btn-outline')
  })

  it('renders slot content', () => {
    const wrapper = mount(JiaHaoButton, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.text()).toBe('Click me')
  })
})
