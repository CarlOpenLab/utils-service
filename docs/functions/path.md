# Path

Path helpers for ESM scripts and monorepos.

## resolveCurrentPath

Get the directory of the current ES module — the ESM replacement for `__dirname`.

```ts
import { resolveCurrentPath } from '@cc-heart/utils-service'

const here = resolveCurrentPath(import.meta.url)
// '/abs/path/to/dist'
```

## cwdJoin

Join path segments onto `process.cwd()`.

```ts
import { cwdJoin } from '@cc-heart/utils-service'

cwdJoin('dist', 'index.js')
// '<cwd>/dist/index.js'
```

## findFilePath

Walk up from a path to find the nearest directory containing a file.

```ts
import { findFilePath } from '@cc-heart/utils-service'

await findFilePath('./src/deep/nested', 'tsconfig.json')
// '/abs/path/to/project' (or null)
```

## findPackagePath

Walk up to the nearest `package.json`.

```ts
import { findPackagePath } from '@cc-heart/utils-service'

await findPackagePath(import.meta.url)
// '/abs/path/to/package.json' (or null)
```

## Example: locate the project root

Handy in CLI tools and scripts that run from unknown depths:

```ts
import { findPackagePath, getPackage } from '@cc-heart/utils-service'

const pkgPath = await findPackagePath(process.cwd())
if (pkgPath) {
  const pkg = await getPackage(pkgPath)
  console.log(`running inside ${pkg.name}@${pkg.version}`)
}
```
