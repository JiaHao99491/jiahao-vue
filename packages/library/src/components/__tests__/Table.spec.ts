import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JiaHaoTable from '../JiaHaoTable/JiaHaoTable.vue'
import JiaHaoAvatar from '../JiaHaoAvatar/JiaHaoAvatar.vue'
import { faker } from '@faker-js/faker'

describe('JiaHaoTable.vue', () => {
  const generateData = () => {
    const data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i + 1,
        image: faker.image.avatar(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 10, max: 100 }),
      })
    }
    return data
  }

  it('renders the component correctly', () => {
    const wrapper = mount(JiaHaoTable, {
      props: {
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ],
        size: 'md',
        selectable: true,
        striped: false,
        modelValue: generateData(),
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.findAll('tbody tr').length).toBe(10)
  })

  it('applies the correct size class', () => {
    const wrapper = mount(JiaHaoTable, {
      props: {
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ],
        size: 'lg',
        selectable: true,
        striped: false,
        modelValue: generateData(),
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.find('table').classes()).toContain('table-lg')
  })

  it('applies the striped class when striped prop is true', () => {
    const wrapper = mount(JiaHaoTable, {
      props: {
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ],
        size: 'md',
        selectable: true,
        striped: true,
        modelValue: generateData(),
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.find('table').classes()).toContain('table-zebra')
  })

  it('sorts the data correctly when a sortable column header is clicked', async () => {
    const wrapper = mount(JiaHaoTable, {
      props: {
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ],
        size: 'md',
        selectable: true,
        striped: false,
        modelValue: generateData(),
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })

    const firstNameHeader = wrapper.findAll('.flex.items-center')[0]
    const firstRowFirstName = wrapper.findAll('tbody tr')[0].html()
    await firstNameHeader.trigger('click')
    await firstNameHeader.trigger('click')
    const lastRowFirstName = wrapper.findAll('tbody tr')[9].html()
    expect(firstRowFirstName == lastRowFirstName).toBe(true)
  })

  it('renders custom slot content correctly', () => {
    const wrapper = mount(JiaHaoTable, {
      props: {
        columns: [
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ],
        size: 'md',
        selectable: true,
        striped: false,
        modelValue: generateData(),
      },
      slots: {
        'item-image':
          '<JiaHaoAvatar :src="item.image" size="xs" :placeholder="`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`" class="bg-gray-500" />',
      },
      global: {
        components: {
          JiaHaoAvatar,
        },
      },
    })
    expect(wrapper.findComponent(JiaHaoAvatar).exists()).toBe(true)
  })
})
