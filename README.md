<p align="center">
  <img src="https://raw.githubusercontent.com/CarlOpenLab/utils-service/main/assets/logo.png?v=2" width="160" alt="@cc-heart/utils-service logo" />
</p>

<h1 align="center">@cc-heart/utils-service</h1>

<p align="center">☁️ A collection of tools for the Node.js runtime — fs, path, package & validation helpers</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@cc-heart/utils-service"><img src="https://img.shields.io/npm/v/@cc-heart/utils-service.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@cc-heart/utils-service"><img src="https://img.shields.io/npm/dm/@cc-heart/utils-service.svg" alt="npm downloads" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@cc-heart/utils-service.svg" alt="license" /></a>
</p>

<p align="center">
  <a href="https://carlopenlab.github.io/utils-service/">📖 Docs</a>
</p>

> **The utils family** · core: [`@cc-heart/utils`](https://github.com/CarlOpenLab/utils) · Node.js runtime: [`@cc-heart/utils-service`](https://github.com/CarlOpenLab/utils-service) · browser: [`@cc-heart/utils-client`](https://github.com/CarlOpenLab/utils-client)

## Features

- 📁 **fs** — `rm`, `cpFile`, `validateFilePathOrCreateMkdir`
- 🛤️ **path** — `cwdJoin`, `findFilePath`, `findPackagePath`, `resolveCurrentPath`
- 📦 **pkg** — `getPackage`, `getPackageManager`
- ✅ **valid** — `isFile`, `isDirectory`
- 🌳 ESM + CJS dual builds with full TypeScript types

## Install

```shell
npm install @cc-heart/utils-service
# or
pnpm add @cc-heart/utils-service
```

## Usage

### Find files / packages upwards

```ts
import { findFilePath, findPackagePath } from '@cc-heart/utils-service'

// Find the nearest package.json from a directory upwards
const pkgPath = await findPackagePath(process.cwd())

// Find any file upwards
const configPath = await findFilePath(process.cwd(), '.eslintrc.js')
```

### Read package.json & detect package manager

```ts
import { getPackage, getPackageManager } from '@cc-heart/utils-service'

interface Pkg {
  name: string
  version: string
}

const pkg = await getPackage<Pkg>() // nearest package.json
const pm = getPackageManager() // 'npm' | 'pnpm' | 'yarn' ...
```

### File system helpers

```ts
import { rm, cpFile, validateFilePathOrCreateMkdir } from '@cc-heart/utils-service'

await rm('./dist') // recursive remove, safe when missing
await cpFile('./a.txt', './backup/a.txt')
await validateFilePathOrCreateMkdir('./logs/app.log') // ensure parent dir exists
```

### Path & validation

```ts
import { cwdJoin, isFile, isDirectory } from '@cc-heart/utils-service'

const outDir = cwdJoin('dist', 'esm')

if (await isFile(outDir)) {
  // ...
}
if (await isDirectory(outDir)) {
  // ...
}
```

## LICENSE

`@cc-heart/utils-service` is licensed under the [MIT License](./LICENSE).
