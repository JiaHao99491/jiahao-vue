<script setup lang="ts">
import {JiaHaoAvatarGroup, JiaHaoAvatar} from 'jiahao-vue'
</script>

# AvatarGroup Component

## Without any props

<JiaHaoAvatarGroup :mask="'circle'" :size="'md'">
    <JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>
    <JiaHaoAvatar placeholder="DK" class="bg-red-600"></JiaHaoAvatar>
    <JiaHaoAvatar src="https://i.pravatar.cc/300?u=3"></JiaHaoAvatar>
    <JiaHaoAvatar src="https://i.pravatar.cc/300?u=4"></JiaHaoAvatar>
    <JiaHaoAvatar placeholder="99+" class="bg-gray-500"></JiaHaoAvatar>
</JiaHaoAvatarGroup>

```html
<JiaHaoAvatarGroup :mask="'circle'" :size="'md'">
  <JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>
  <JiaHaoAvatar placeholder="DK" class="bg-red-600"></JiaHaoAvatar>
  <JiaHaoAvatar src="https://i.pravatar.cc/300?u=3"></JiaHaoAvatar>
  <JiaHaoAvatar src="https://i.pravatar.cc/300?u=4"></JiaHaoAvatar>
  <JiaHaoAvatar placeholder="99+" class="bg-gray-500"></JiaHaoAvatar>
</JiaHaoAvatarGroup>
```
