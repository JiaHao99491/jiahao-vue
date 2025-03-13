import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoAlert from '../JiaHaoAlert/JiaHaoAlert.vue'

describe('JiaHaoAlert.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoAlert, {
      props: { type: 'info' },
      slots: {
        default: 'This is an info alert',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('This is an info alert')
  })

  it('applies the correct type class', () => {
    const wrapper = mount(JiaHaoAlert, {
      props: { type: 'success' },
    })
    expect(wrapper.find('.alert').classes()).toContain('alert-success')
  })

  it('renders with dismissible button when dismissible prop is true', () => {
    const wrapper = mount(JiaHaoAlert, {
      props: { dismissible: true },
    })
    expect(wrapper.find('button.close').exists()).toBe(true)
  })

  it('emits dismiss event when dismiss button is clicked', async () => {
    const wrapper = mount(JiaHaoAlert, {
      props: { dismissible: true },
    })
    await wrapper.find('button.close').trigger('click')
    expect(wrapper.emitted().dismiss).toEqual(undefined)
  })

  it('shows the alert when dismissed prop is false', async () => {
    const wrapper = mount(JiaHaoAlert, {
      props: { dismissed: false },
    })
    expect(wrapper.find('.alert').isVisible()).toBe(true)
  })
})
