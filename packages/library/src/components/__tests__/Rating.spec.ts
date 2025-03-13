import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoRating from '../JiaHaoRating/JiaHaoRating.vue'

describe('JiaHaoRating.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoRating, {
      props: { size: 'md' },
      slots: {
        default: 'Rating',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('applies the correct size class', () => {
    const wrapper = mount(JiaHaoRating, {
      props: { size: 'lg' },
    })
    expect(wrapper.find('.rating').classes()).toContain('rating-lg')
  })

  it('applies the correct mask class', async () => {
    const wrapper = mount(JiaHaoRating, {
      props: { mask: 'heart', size: 'md' },
      global: {
        directives: {
          mask: {
            mounted(el, binding) {
              el.classList.add(`mask-${binding.value}`)
            },
          },
        },
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.mask-heart').exists()).toBe(true)
  })

  it('renders with allowHalf prop correctly', () => {
    const wrapper = mount(JiaHaoRating, {
      props: { allowHalf: true, size: 'md' },
    })
    expect(wrapper.find('.rating-half').exists()).toBe(true)
  })

  it('renders with custom outOf prop correctly', () => {
    const wrapper = mount(JiaHaoRating, {
      props: { outOf: 10, size: 'md' },
    })
    expect(wrapper.findAll('input[type="radio"]').length).toBe(11)
  })

  it('renders with custom color class', () => {
    const wrapper = mount(JiaHaoRating, {
      props: { size: 'md' },
      attrs: { class: 'bg-orange-400' },
    })
    expect(wrapper.find('.bg-orange-400').exists()).toBe(true)
  })
})
