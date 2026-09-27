# Package

`package.json` readers.

## getPackage

Read and parse a `package.json`. Defaults to the one in `process.cwd()`.

```ts
import { getPackage } from '@cc-heart/utils-service'

const pkg = await getPackage()
console.log(pkg.name, pkg.version)

// typed
interface Pkg { name: string; version: string }
const typed = await getPackage<Pkg>('./packages/core/package.json')
```

## getPackageManager

Detect the package manager that installed the project (via lock files / env).

```ts
import { getPackageManager } from '@cc-heart/utils-service'

getPackageManager() // 'pnpm' | 'npm' | 'yarn' | 'bun' | 'cnpm' | ...
```

## Example: install with the right package manager

```ts
import { getPackageManager } from '@cc-heart/utils-service'
import { execSync } from 'node:child_process'

const pm = getPackageManager()
execSync(`${pm} install`, { stdio: 'inherit' })
```
