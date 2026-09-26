# Getting Started

`@cc-heart/utils-service` is a collection of tools for the Node.js runtime.

## Install

```shell
npm install @cc-heart/utils-service
# or
pnpm add @cc-heart/utils-service
```

## Find files / packages upwards

```ts
import { findFilePath, findPackagePath } from '@cc-heart/utils-service'

// Find the nearest package.json from a directory upwards
const pkgPath = await findPackagePath(process.cwd())

// Find any file upwards
const configPath = await findFilePath(process.cwd(), '.eslintrc.js')
```

## Read package.json & detect package manager

```ts
import { getPackage, getPackageManager } from '@cc-heart/utils-service'

interface Pkg {
  name: string
  version: string
}

const pkg = await getPackage<Pkg>() // nearest package.json
const pm = getPackageManager() // 'npm' | 'pnpm' | 'yarn' ...
```

## File system helpers

```ts
import { rm, cpFile, validateFilePathOrCreateMkdir } from '@cc-heart/utils-service'

await rm('./dist') // recursive remove, safe when missing
await cpFile('./a.txt', './backup/a.txt')
await validateFilePathOrCreateMkdir('./logs/app.log') // ensure parent dir exists
```

## Path & validation

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

## API Reference

See the auto-generated [API documentation](/api/).
