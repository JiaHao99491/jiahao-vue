import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoAvatar from '../JiaHaoAvatar/JiaHaoAvatar.vue'
import JiaHaoBadge from '../JiaHaoBadge/JiaHaoBadge.vue'

describe('JiaHaoAvatar.vue', () => {
  it('renders the component correctly with image', () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        src: 'https://i.pravatar.cc/300?u=2',
        size: 'md',
      },
    })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://i.pravatar.cc/300?u=2')
  })

  it('renders the component correctly with placeholder', () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        placeholder: 'DK',
        size: 'md',
      },
    })
    expect(wrapper.find('.text-center').exists()).toBe(true)
    expect(wrapper.find('.text-center').text()).toBe('DK')
  })

  it('applies the correct size class', () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        size: 'lg',
      },
    })
    expect(wrapper.classes()).toContain('w-24')
    expect(wrapper.classes()).toContain('h-24')
  })

  it('applies the correct mask class', () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        mask: 'circle',
      },
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
    expect(wrapper.classes()).toContain('mask-circle')
  })

  it('renders with custom background color', () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        placeholder: 'DK',
        size: 'md',
      },
      attrs: {
        class: 'bg-green-500',
      },
    })
    expect(wrapper.classes()).toContain('bg-green-500')
  })

  it('renders with badge', () => {
    const wrapper = mount({
      template: `
        <div class="relative inline-block">
          <JiaHaoBadge class="absolute top-0 right-0 z-10" color="success" size="md"></JiaHaoBadge>
          <JiaHaoAvatar mask="circle" size="md" src="https://i.pravatar.cc/300?u=2" />
        </div>
      `,
      components: {
        JiaHaoAvatar,
        JiaHaoBadge,
      },
    })
    expect(wrapper.findComponent(JiaHaoBadge).exists()).toBe(true)
    expect(wrapper.findComponent(JiaHaoAvatar).exists()).toBe(true)
  })

  it('renders placeholder when image fails to load', async () => {
    const wrapper = mount(JiaHaoAvatar, {
      props: {
        src: 'invalid-url',
        placeholder: 'DK',
        size: 'md',
      },
    })
    await wrapper.find('img').trigger('error')
    expect(wrapper.find('.text-center').exists()).toBe(true)
    expect(wrapper.find('.text-center').text()).toBe('DK')
  })
})
