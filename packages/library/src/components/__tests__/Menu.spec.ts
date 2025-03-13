import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import JiaHaoMenu from '../JiaHaoMenu/JiaHaoMenu.vue'

describe('JiaHaoMenu.vue', () => {
  const items = [
    {
      label: 'Item 1',
      action: vi.fn(),
    },
    {
      label: 'Item 2',
      action: vi.fn(),
      children: [
        {
          label: 'Item 2.1',
          action: vi.fn(),
        },
        {
          label: 'Item 2.2',
          action: vi.fn(),
        },
      ],
    },
    {
      label: 'Item 3',
      action: vi.fn(),
    },
  ]

  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoMenu, {
      props: { items },
      slots: {
        default: '<div>Right click me to see context menu</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Right click me to see context menu')
  })

  it('renders menu items correctly', async () => {
    const wrapper = mount(JiaHaoMenu, {
      props: { items },
      slots: {
        default: '<div>Right click me to see context menu</div>',
      },
    })

    await wrapper.find('div').trigger('contextmenu')
    await wrapper.vm.$nextTick() // 等待 DOM 更新

    const menuItems = document.body.querySelectorAll('[role="menu"] ul li')
    expect(menuItems.length).toBe(3)
    expect(menuItems[0].textContent).toContain('Item 1')
    expect(menuItems[1].textContent).toContain('Item 2')
    expect(menuItems[2].textContent).toContain('Item 3')
  })

  it('calls the correct action when a menu item is clicked', async () => {
    const wrapper = mount(JiaHaoMenu, {
      props: { items },
      slots: {
        default: '<div>Right click me to see context menu</div>',
      },
    })

    await wrapper.find('div').trigger('contextmenu')
    await wrapper.vm.$nextTick() // 等待 DOM 更新

    const menuItems = document.body.querySelectorAll('[role="menu"] ul li')

    await menuItems[0].querySelector('button')?.click()
    expect(items[0].action).toHaveBeenCalled()

    await menuItems[2].querySelector('button')?.click()
    expect(items[2].action).toHaveBeenCalled()
  })
})
