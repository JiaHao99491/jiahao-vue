import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoAccordian from '../JiaHaoAccordian/JiaHaoAccordian.vue'
import JiaHaoAccordianPanel from '../JiaHaoAccordianPanel/JiaHaoAccordianPanel.vue'

describe('JiaHaoAccordian.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoAccordian, {
      slots: {
        default: '<JiaHaoAccordianPanel title="Panel 1">Content 1</JiaHaoAccordianPanel>',
      },
      global: {
        components: {
          JiaHaoAccordianPanel,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findComponent(JiaHaoAccordianPanel).exists()).toBe(true)
  })

  it('provides accordianId to panels', () => {
    const wrapper = mount(JiaHaoAccordian, {
      slots: {
        default: '<JiaHaoAccordianPanel title="Panel 1">Content 1</JiaHaoAccordianPanel>',
      },
      global: {
        components: {
          JiaHaoAccordianPanel,
        },
      },
    })
    const panel = wrapper.findComponent(JiaHaoAccordianPanel)
    expect(panel.props('title')).toBe('Panel 1')
    expect(panel.find('input[type="radio"]').attributes('name')).toBeTruthy()
  })

  it('throws error if used outside of JiaHaoAccordian', () => {
    expect(() => {
      mount(JiaHaoAccordianPanel, {
        props: { title: 'Panel 1' },
      })
    }).toThrow('JiaHaoAccodianPanel must be used inside a JiaHaoAccordian')
  })
})

describe('JiaHaoAccordianPanel.vue', () => {
  it('renders the panel correctly', () => {
    const wrapper = mount(JiaHaoAccordianPanel, {
      props: { title: 'Panel 1' },
      global: {
        provide: {
          accordianId: 'test-id',
        },
      },
      slots: {
        default: 'Content 1',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.collapse-title').text()).toBe('Panel 1')
    expect(wrapper.find('.collapse-content').text()).toBe('Content 1')
  })

  it('applies the correct id to the input', () => {
    const wrapper = mount(JiaHaoAccordianPanel, {
      props: { title: 'Panel 1' },
      global: {
        provide: {
          accordianId: 'test-id',
        },
      },
    })
    expect(wrapper.find('input[type="radio"]').attributes('name')).toBe('test-id')
  })
})
