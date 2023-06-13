# 🤝 Conventions

When there are more than one developer on a project, it is always a good idea to set a few code conventions so the code actually became the Company/App code. With a few agreements, it is possible to a team to code 'as one'. The concern with the architecture will already be handy in this regard. But what about the actual code within the files? Well, that is why code conventions are for - consistency, previsibility, maintainability and lastly but no least, performance.

Here are some code conventions that I usually use on my own project and actually try to sell to my teamates when possible:

## Vue API

We have Vue 3.3 now. I use the composition API. ❤️

## Dependencies imports

To keep consistency, I will always make effort to enforce this sequence:

- imports from 'vue'
- other imports from node_modules
- internal dependencies in ASC order
  - @Composables
  - @Helpers
  - Types
- Ui is ASC order
  - @AppUi
  - @BaseUi
  - @ComposedUi
  - @NestedUi
  - @UniqueUi
- Modules in ASC order
- internal dependencies from the current domain
  - './styles'
  - './components'
  - './providers'

Here is a example:

👎🏼 **BAD**

```vue
<script setup>
import { AuthForm } from '@Auth';
import { defineStore } from 'pinia';
import { hidePrompt, showPrompt } from '@Helpers';
import InternalComponent from '../../components';
import { computed, useAttrs } from 'vue';
import { BaseButton } from '@BaseButton';
</script>
```

👍🏼 **GOOD**

```vue
<script setup>
import { computed, useAttrs } from 'vue';
import { defineStore } from 'pinia';
import { hidePrompt, showPrompt } from '@Helpers';
import { BaseButton } from '@BaseButton';
import { AuthForm } from '@Auth';
import InternalComponent from '../../components';
</script>
```

## Feature implementation

Quoting the [Vue official docs](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs):

> Some users moving from Options API found their Composition API code less organized, and concluded that Composition API is "worse" in terms of code organization. We recommend users with such opinions to look at that problem from a different perspective.

> It is true that Composition API no longer provides the "guard rails" that guide you to put your code into respective buckets. In return, you get to author component code like how you would write normal JavaScript. This means you can and should apply any code organization best practices to your Composition API code as you would when writing normal JavaScript. If you can write well-organized JavaScript, you should also be able to write well-organized Composition API code.

With that in mind, here are some conventions that I've set when implementing features, especially in views. Theses conventions try to mimic the [Options API best practices](https://vuejs.org/style-guide/rules-recommended.html#component-instance-options-order). When I say mimic, [this is the reason](https://vuejs.org/style-guide/#style-guide):

> The style guide is currently a bit outdated. Most examples are in Options API only, and there are no rules regarding `<script setup>` and Composition API. We are planning to improve it in the future.

After the dependency imports, here is how I am implementing features; the way that I am grouping it:

### 1 - `Directives`

- Shouve be name just like this: `vMyDirectiveName`
- Make sure that this is [actually a directive](https://vuejs.org/guide/reusability/custom-directives.html#introduction) and not a composable or a helper

> Components are the main building blocks, while composables are focused on reusing stateful logic. Custom directives, on the other hand, are mainly intended for **reusing logic that involves low-level DOM access on plain elements.**

### 2 - `Macros`

- ASC
- defineEmits, defineProps etc
- use TS
- [use a separate interface](https://vuejs.org/guide/typescript/composition-api.html#using-script-setup)

### 3 - `Helpers`

### 4 - `Composables`

### 5 - `Stores`

### 6 - `Reactivity`

- `ref`
- `readonly`
- `reactive`
- `computed`
- `injected`

### 7 - `Provide`

### 8 - `Watchers`

### 9 - `Lifecycle`

### 10 - `Methods`

In orde to improve code legibility, do not use ES6+ when declaring your functions since the syntax between the functions and other variables (ref, reactive, props, emits, etc) would have no difference.

Have in mind that even Evan You - the original maker - [is not using ES6+ at vue core](https://github.com/vuejs/docs/blob/main/.vitepress/theme/components/PreferenceSwitch.vue) and it's also [suggested on the official docs](https://vuejs.org/api/sfc-script-setup.html#top-level-bindings-are-exposed-to-template). Let's follow his example! :)

👎🏼 **BAD**

```vue
<script setup>
// using ES6+
const emits = defineEmits([]);
const props = defineProps({});

const myRef = ref(1);
const myComputedProperty = () => myRef.value * -1;

const myMethod = (param) => {};

// No syntax difference from emits, props,
// myRef, myComputedProperty to myMethod :/
</script>
```

👍🏼 **GOOD**

```vue
<script setup>
const emits = defineEmits([]);
const props = defineProps({});

const myRef = ref(1);
const myComputedProperty = () => myRef.value * -1;

function myMethod(param) {
  console.log(param);
}

// Oh yeah
</script>
```

And that is pretty much the summary of the conventions used in this project!
