<script setup lang="ts">
import { reactive, ref } from 'vue'
import JiaHaoTable from './JiaHaoTable.vue'
import JiaHaoAvatar from '../JiaHaoAvatar/JiaHaoAvatar.vue'
import { faker } from '@faker-js/faker'
import { sizes, Sizes } from '../../globals'

interface User {
  id: number
  image: string
  firstName: string
  lastName: string
  age: number
}
const data = ref<User[]>([])
const selected = ref<User[]>([])

function generateData() {
  data.value = []
  for (let i = 0; i < 50; i++) {
    data.value.push({
      id: i + 1,
      image: faker.image.avatar(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 10, max: 100 }),
    })
  }
}

generateData()

const state = reactive({
  selectable: false,
  size: 'md' as Sizes,
  striped: false,
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <JiaHaoTable
        v-model="data"
        v-model:select="selected"
        v-bind="state"
        :columns="[
          { key: 'id', label: 'ID', sortable: true },
          { key: 'image', label: '' },
          { key: 'firstName', label: 'First Name', sortable: true },
          { key: 'lastName', label: 'Last Name', sortable: true },
          { key: 'age', label: 'Age', sortable: true },
        ]"
      >
        <template #item-image="{ item }">
          <JiaHaoAvatar
            :src="item.image"
            size="xs"
            :placeholder="`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`"
            class="bg-gray-500"
          />
        </template>
      </JiaHaoTable>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="sizes" />
      <HstCheckbox v-model="state.selectable" title="Selectable" />
      <HstCheckbox v-model="state.striped" title="Striped" />
    </template>
  </Story>
</template>
