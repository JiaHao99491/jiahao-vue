<script setup lang="ts">
import {JiaHaoMenu} from 'jiahao-vue'
</script>

# Menu Component

## Without any props

<JiaHaoMenu
        :items="[
          {
            label: 'Item 1',
            action: () => {
              console.log('Item 1 clicked')
            },
          },
          {
            label: 'Item 2',
            action: () => {
              console.log('Item 2 clicked')
            },
            children: [
              {
                label: 'Item 2.1',
                action: () => {
                  console.log('Item 2.1 clicked')
                },
              },
              {
                label: 'Item 2.2',
                action: () => {
                  console.log('Item 2.2 clicked')
                },
              },
            ],
          },
          {
            label: 'Item 3',
            action: () => {
              console.log('Item 3 clicked')
            },
          },
        ]"
      >
<div>Some stuff going on here that needs a custom context menu.</div>
<div>Right click me to see context menu</div>
</JiaHaoMenu>

```html
<JiaHaoMenu
  :items="[
          {
            label: 'Item 1',
            action: () => {
              console.log('Item 1 clicked')
            },
          },
          {
            label: 'Item 2',
            action: () => {
              console.log('Item 2 clicked')
            },
            children: [
              {
                label: 'Item 2.1',
                action: () => {
                  console.log('Item 2.1 clicked')
                },
              },
              {
                label: 'Item 2.2',
                action: () => {
                  console.log('Item 2.2 clicked')
                },
              },
            ],
          },
          {
            label: 'Item 3',
            action: () => {
              console.log('Item 3 clicked')
            },
          },
        ]"
>
  <div>Some stuff going on here that needs a custom context menu.</div>
  <div>Right click me to see context menu</div>
</JiaHaoMenu>
```
