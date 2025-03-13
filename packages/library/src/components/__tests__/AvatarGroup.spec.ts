import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoAvatarGroup from '../JiaHaoAvatarGroup/JiaHaoAvatarGroup.vue'
import JiaHaoAvatar from '../JiaHaoAvatar/JiaHaoAvatar.vue'

describe('JiaHaoAvatarGroup.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoAvatarGroup, {
      slots: {
        default: `
          <JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>
          <JiaHaoAvatar placeholder="DK" class="bg-red-600"></JiaHaoAvatar>
          <JiaHaoAvatar src="https://i.pravatar.cc/300?u=3"></JiaHaoAvatar>
          <JiaHaoAvatar src="https://i.pravatar.cc/300?u=4"></JiaHaoAvatar>
          <JiaHaoAvatar placeholder="99+" class="bg-gray-500"></JiaHaoAvatar>
        `,
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAllComponents(JiaHaoAvatar).length).toBe(5)
  })

  it('applies the correct size class', () => {
    const wrapper = mount(JiaHaoAvatarGroup, {
      props: {
        size: 'md',
      },
      slots: {
        default: '<JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>',
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.classes()).toContain('-space-x-8')
  })

  it('applies the correct mask class to avatars', () => {
    const wrapper = mount(JiaHaoAvatarGroup, {
      props: {
        mask: 'circle',
      },
      slots: {
        default: '<JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>',
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    const avatar = wrapper.findComponent(JiaHaoAvatar)
    expect(avatar.classes()).toContain('mask-circle')
  })

  it('renders avatars with custom background color', () => {
    const wrapper = mount(JiaHaoAvatarGroup, {
      slots: {
        default: '<JiaHaoAvatar placeholder="DK" class="bg-red-600"></JiaHaoAvatar>',
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    const avatar = wrapper.findComponent(JiaHaoAvatar)
    expect(avatar.classes()).toContain('bg-red-600')
  })

  it('renders avatars with placeholder text', () => {
    const wrapper = mount(JiaHaoAvatarGroup, {
      slots: {
        default: '<JiaHaoAvatar placeholder="DK"></JiaHaoAvatar>',
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    const avatar = wrapper.findComponent(JiaHaoAvatar)
    expect(avatar.text()).toBe('DK')
  })
})
