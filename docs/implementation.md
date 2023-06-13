# 💻 Implementation

## General structure

The general folder structure relies on a DDD approach - where everything related to that feature remains in the same folder (domain). Additionally, the src itself is considered as a root domain, containing all the global components for the app.

## I/O

To maintain consistency across all domains and improve dependency injection, all folders have a `barrel file` to manage the export of their content. This approach actually mimics how Vue uses the `Event Bus` within its `SFCs` components. When a child component needs to send data to a parent component, it will `emit` the data. The same happens with this project's domains - each domain "emits" all relevant features to the parent via a `barrel file`.

Also I set up `aliases` to increase dependency injection managment. Right now, here are the aliases for this project:

```javascript
//representation of vite.config.ts
{
  // Root domain
  '@': './src',
  '@Assets': './src/assets/',
  '@Composables': './src/composables',
  '@Helpers': './src/helpers',
  '@Layouts': './src/layouts',
  '@Libraries': './src/libraries',
  '@Plugins': './src/plugins',
  '@Styles': './src/styles/',
  '@Types': './src/types',
  '@Views': './src/views',

  // UI
  '@AppUi': './src/components/app',
  '@BaseUi': './src/components/base',
  '@ComposedUi': './src/components/composed'

  // Modules
  '@AuthModule': './src/modules/Auth'
  '@OfferModule': './src/modules/Offer'
}
```

## Components

The components relies heavily in the CDD approach borrwing the classification from the Atomic Design. We start from the smaller piece of the ui possible and them we group it up to created more intricated ui sections. They were named in a ASC order to improve DevX. Here it is:

`base -> composed -> nested`

- `base`: Can import only assets or other base level components (BaseButton, BaseImage)

- `composed`: Can import several BaseUi components, assets or other composed level componetns (ComposedForm)

- `nested`: Can import BaseUi and ComposedUi components, assets or other NestedUi level components. They are very rare and usually this kind of components became modules components. (NestedStepper)

There is also some special components:

- `app`: Usually BaseUi components that are going to be used globally. They will be registered as plugins. (AppText, AppButton, AppToast).

- `unique`: Folowing Vue best practive, these kind of components will appear only once in each view. (TheTopNav, TheFooter, TheAside, TheModal)

- `layouts`: These components will use several UniqueUi components to keep everthing DRY in the views. They usually have a slot to be more dynamic. (TheDefaultLayout, TheAuthLayout)

A important feature of this architecture is that there are levels to be respected when composing the UI. A component will only import a component from the same level or from a inferior level. Also, to avoid cyclic redundancy, when using a same level component the the barrel file of the domain must not be used. That component will be imported using the default approach. Here is a example:

👎🏼 **BAD**

```vue
// BaseButton
<script setup lang>
import { BaseText } from './index';
</script>
```

👍🏼 **GOOD**

```vue
// BaseButton
<script setup lang>
import BaseText from '../BaseText/BaseText.vue';
</script>
```

Another key feature of this approach is that all UI components are by definitino **dummy components** meaning that they do not make any kind of requests to APIS or stores. They have a single responsability: render the template. So they will only receive data by props and that data should already be properly sanitized. This will increase the reusability of the UI and also ease up the test process. 🚀

## Folder structure

Here you will find a folder by folder explanation. This structure is highly inspired on DDD, Modular Architecture and also the work done by NuxtJs and AstroJs.

```javascript
/
  // file settings will live outside of src
  /.vscode
    // ide settings
  /.histoire
    // storybook
  /docs
    // this doccumentation that you are reading right now
  /public
    // vue standard
  /src
    /assets
    /components
    /composables
    /helpers
    /layouts
    /libraries
    /modules
    /plugins
    /styles
    /types
    /views
    App.vue
    main.ts
```

`/assets`

- images
- fonts
- local svgs
- mock data files

`/components`

- app
- base
- composed
- nested
- unique

`composables`

- global vue composables

`helpers`

- global helpers (formatters etc)

`layouts`

- top level layouts

`libraries`

Here you will find the settings for all the libraries that were used in the project. Instead of randomly settings things up on `main.ts`, I've created a folder for each library used and set it up there. Then there is an array of libraries settings being exported by this domain. The `main.ts` imports that array and with a simple forEach loop all libraries are smoothly injected into the app. Nice huh?

`modules`

These are the actual domains of the app (Auth, Offer etc). Here are the keypoints of these kinds of components; They:

- can have pretty much anything that the root level domain has (components, assets, composables etc).

- follow the same pattern of the root domain (dummy and atomic components, barrel files etc).

- will also have the providers - requests files - and the services (graphql, rest etc).

- will be used in views to actually compose the features

`plguins`

Same approach of libraries. Again, a single line to register all plugins. Such a beautiful thing!

`styles`

- global styles and css variables

`types`

- global TS types and a shortcut for modules and ui types. This alias will be heavly used on views and modules

`views`

These are acessible via Router and they are responsible for:

- composing the pages
- requesting data from APIs
- sanitizing data from APIs
- provide data for inner modules or components
- handle user events and interactions

This approach centers the request and data handling in a single file. Zero look up for the source of your component calls - it will be always on the views :)
