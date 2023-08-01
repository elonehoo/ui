# Getting Started

The UI provides a set of [UnoCss](https://unocss.dev/) presets, which can create a set of components in a more semantic way.

## Install

::: code-group

```sh [pnpm]
$ pnpm install unocss @unocss/reset @elonehoo/ui
```

```sh [npm]
$ npm install unocss @unocss/reset @elonehoo/ui
```

```sh [yarn]
$ yarn add unocss @unocss/reset @elonehoo/ui
```

:::

## Config
For example, you can use the UI by providing a preset in a local [config file](https://unocss.dev/guide/config-file).


```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import {presetUno} from 'unocss'
import UI from '@elonehoo/ui'

export default defineConfig({
  presets: [
    UI(),
    presetUno()
  ]
})
```
