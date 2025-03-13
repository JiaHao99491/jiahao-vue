<script setup lang="ts">
import {JiaHaoSteps} from 'jiahao-vue'
const steps = ['Go to store', 'Get Milk', 'Get Bread', 'Checkout at Register']
</script>

# Steps Component

## Without any props

<JiaHaoSteps
:steps="steps"
:layout="'horizontal'"
:color="'primary'"

> </JiaHaoSteps>

```vue
<JiaHaoSteps :steps="steps" :layout="'horizontal'" :color="'primary'"></JiaHaoSteps>
```
