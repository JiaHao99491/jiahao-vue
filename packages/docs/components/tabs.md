<script setup lang="ts">
import {JiaHaoTabs, JiaHaoTab} from 'jiahao-vue'

const types = ['Bordered', 'Boxed', 'Lifted'] as const
</script>

# Tabs

### Lifted

<JiaHaoTabs type="lifted">
    <JiaHaoTab name="Preview">
        <JiaHaoTabs type="lifted">
        <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
    </JiaHaoTabs>
    </JiaHaoTab>
<JiaHaoTab name="Code">

```html
<JiaHaoTabs type="lifted">
  <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
</JiaHaoTabs>
```

</JiaHaoTab>

</JiaHaoTabs>

### Bordered

<JiaHaoTabs type="lifted">
    <JiaHaoTab name="Preview">
        <JiaHaoTabs type="bordered">
        <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
    </JiaHaoTabs>
    </JiaHaoTab>
<JiaHaoTab name="Code">

```html
<JiaHaoTabs type="bordered">
  <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
</JiaHaoTabs>
```

</JiaHaoTab>

</JiaHaoTabs>

### Boxed

<JiaHaoTabs type="lifted">
    <JiaHaoTab name="Preview">
        <JiaHaoTabs type="boxed">
        <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
        <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
    </JiaHaoTabs>
    </JiaHaoTab>
<JiaHaoTab name="Code">

```html
<JiaHaoTabs type="boxed">
  <JiaHaoTab name="Tab 1">Tab 1 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 2">Tab 2 Content</JiaHaoTab>
  <JiaHaoTab name="Tab 3">Tab 3 Content</JiaHaoTab>
</JiaHaoTabs>
```

</JiaHaoTab>

</JiaHaoTabs>
