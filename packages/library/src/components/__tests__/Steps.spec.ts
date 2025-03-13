import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoSteps from '../JiaHaoSteps/JiaHaoSteps.vue'

describe('JiaHaoSteps.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoSteps, {
      props: {
        steps: ['Step 1', 'Step 2', 'Step 3'],
        color: 'primary',
        layout: 'horizontal',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAll('.step').length).toBe(3)
  })

  it('applies the correct color class', () => {
    const wrapper = mount(JiaHaoSteps, {
      props: {
        steps: ['Step 1', 'Step 2', 'Step 3'],
        color: 'success',
      },
    })
    expect(wrapper.find('.step-success').exists()).toBe(true)
  })

  it('applies the correct layout class', () => {
    const wrapper = mount(JiaHaoSteps, {
      props: {
        steps: ['Step 1', 'Step 2', 'Step 3'],
        layout: 'vertical',
      },
    })
    expect(wrapper.find('.steps-vertical').exists()).toBe(true)
  })

  it('updates the active step on click', async () => {
    const wrapper = mount(JiaHaoSteps, {
      props: {
        steps: ['Step 1', 'Step 2', 'Step 3'],
        color: 'primary',
        layout: 'horizontal',
      },
    })
    const steps = wrapper.findAll('.step')
    await steps[1].trigger('click')
    expect((wrapper.vm as any).activeStep).toBe(2)
    expect(steps[1].classes()).toContain('step-primary')
  })
})
