# World Groccer

## Important links

- [Live Preview](https://world-groccer.vercel.app/)

- [Storybook](https://world-groccer-stories.vercel.app/)

- [Doccumentation](https://world-groccer-docs.vercel.app//)

- [About me](https://world-groccer-docs/about-me)

- [Architecture](https://world-groccer-docs/architecture)

- [How to use](https://world-groccer-docs/features)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Hot-Reload development

### Development

```sh
npm run dev
```

### Storybook with [Histoire](https://histoire.dev/)

```sh
npm run story:dev
```

### Docs with [VitePress](https://vitepress.dev/)

```sh
npm run docs:dev
```

### Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit --watch
```

## Linters

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## For production

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Compile stories for productions

```sh
npm run story:build
```

### Compile docs for production

```sh
npm run docs:build
```

See [`package.json`](https://github.com/battoni/world-groccer/blob/main/package.json) scripts section for more.
