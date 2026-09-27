# Valid

Path type validators.

## isFile

Whether a path points to a file.

```ts
import { isFile } from '@cc-heart/utils-service'

await isFile('./package.json') // true
await isFile('./src') // false
```

## isDirectory

Whether a path points to a directory.

```ts
import { isDirectory } from '@cc-heart/utils-service'

await isDirectory('./src') // true
```

## Example: route by path type

```ts
import { isFile, isDirectory } from '@cc-heart/utils-service'

async function describe(path: string) {
  if (await isFile(path)) return 'file'
  if (await isDirectory(path)) return 'directory'
  return 'missing'
}
```
