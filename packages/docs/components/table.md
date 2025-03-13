<script setup lang="ts">
import {JiaHaoTable, JiaHaoAvatar} from 'jiahao-vue'
import { Sizes } from 'jiahao-vue/globals'
import {ref, reactive} from 'vue'
import { faker } from '@faker-js/faker'

interface User {
  id: number
  image: string
  firstName: string
  lastName: string
  age: number
}
const data = ref<User[]>([])
const selected = ref<User[]>([])

const state = reactive({
  selectable: false,
  size: 'md' as Sizes,
  striped: false,
})

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
</script>

# Table Component

## Without any props

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

```html
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
```
