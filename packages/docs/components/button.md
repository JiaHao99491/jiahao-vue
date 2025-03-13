<script setup lang="ts">
import {JiaHaoButton, JiaHaoTabs, JiaHaoTab} from 'jiahao-vue'
import {colorsBrand, colorsState, sizes} from 'jiahao-vue/globals'
const btnColorsNoState = [...colorsBrand, 'glass', 'link'];
</script>

# Button Component

## Button with Brand Colors

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in btnColorsNoState" :key="color" :color="color" class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}">{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Active Button

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in btnColorsNoState" :key="color" :color="color" active class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" active>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Button with State Colors

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in colorsState" :key="color" :color="color" class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" active>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Outline Buttons

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in btnColorsNoState" :key="color" :color="color" outline class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" outline>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Outline Buttons with State Colors

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in colorsState" :key="color" :color="color" outline class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" outline>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Button with State Colors

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in colorsState" :key="color" :color="color" class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" active>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Outline Buttons

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in btnColorsNoState" :key="color" :color="color" outline class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in btnColorsNoState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" outline>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Outline Buttons with State Colors

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="color in colorsState" :key="color" :color="color" outline class="m-1">{{color}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="color in colorsState" :key="color">

```vue-vue
<JiaHaoButton color="{{color}}" outline>{{color}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Button Sizes

<JiaHaoTabs>
    <JiaHaoTab name="Preview">
    <JiaHaoButton v-for="size in [...sizes].reverse()" :key="size" :size="size" class="m-1">{{size}}</JiaHaoButton>
    </JiaHaoTab>
<JiaHaoTab name="Code">

<template v-for="size in [...sizes].reverse()" :key="size">

```vue-vue
<JiaHaoButton size="{{size}}" outline>{{size}}</JiaHaoButton>

```

</template>
</JiaHaoTab>
</JiaHaoTabs>

## Wide Button Sizes

<JiaHaoTabs>
<JiaHaoTab name="Preview">
    <JiaHaoButton wide>Wide</JiaHaoButton>
</JiaHaoTab>
<JiaHaoTab name="Code">

```vue-vue
<JiaHaoButton wide>Wide</JiaHaoButton>
```

</JiaHaoTab>
</JiaHaoTabs>

## Loading

<JiaHaoTabs>
<JiaHaoTab name="Preview">
    <JiaHaoButton loading>Loading</JiaHaoButton>
</JiaHaoTab>
<JiaHaoTab name="Code">

```vue-vue
<JiaHaoButton loading>Loading</JiaHaoButton>
```

</JiaHaoTab>
</JiaHaoTabs>
