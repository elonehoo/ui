import {defineConfig} from 'vitepress'
import { description, discord, font, github, name, releases, twitter,} from './meta'
import { version } from '../../package.json'

export default defineConfig({
  // site-level options
  lang: 'en-US',
  title: name,
  description: description,
  lastUpdated:true,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  themeConfig: {
    // theme-level options
    logo:'/logo.svg',
    outlineTitle: 'On this page',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'MIT License © 2023 Elone Hoo',
    },
    nav: [
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: releases,
          },
        ],
      },
    ],
    sidebar: {
      '/':[

      ]
    }
  }
})
