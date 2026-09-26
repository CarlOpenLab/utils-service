import { defineConfig } from '@rspress/core'
import { pluginTypeDoc } from '@rspress/plugin-typedoc'

export default defineConfig({
  root: 'docs',
  base: '/utils-service/',
  title: 'utils-service',
  description:
    'A collection of tools for the Node.js runtime — fs, path, package & validation helpers',
  icon: '/logo.png',
  logo: '/logo.png',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/CarlOpenLab/utils-service',
      },
    ],
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: ['index.ts'],
    }),
  ],
})
