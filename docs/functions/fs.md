# FS

File system helpers built on `node:fs/promises`.

## rm

Recursively remove a file or directory.

```ts
import { rm } from '@cc-heart/utils-service'

await rm('./dist')
```

## validateFilePathOrCreateMkdir

Ensure every directory along a file path exists — creates missing ones. Useful before writing a file into a nested path.

```ts
import { validateFilePathOrCreateMkdir } from '@cc-heart/utils-service'
import { writeFile } from 'node:fs/promises'

const target = './logs/2026/09/app.log'
await validateFilePathOrCreateMkdir(target) // creates logs/2026/09
await writeFile(target, 'hello') // safe to write now
```

## cpFile

Copy a file, creating the target directory when needed.

```ts
import { cpFile } from '@cc-heart/utils-service'

await cpFile('./assets/logo.png', './dist/static/logo.png')
```

## Example: safe build output

A typical build-script combo — clean, ensure, copy:

```ts
import { rm, validateFilePathOrCreateMkdir, cpFile } from '@cc-heart/utils-service'

await rm('./dist')
await validateFilePathOrCreateMkdir('./dist/assets/.gitkeep')
await cpFile('./public/favicon.ico', './dist/favicon.ico')
```
