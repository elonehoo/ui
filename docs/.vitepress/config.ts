import { defineConfig } from 'vitepress'
import {version} from '../../package.json'

export default defineConfig({
  lang: 'en-US',
  title: '@elonehoo/ui',

  lastUpdated: true,
  cleanUrls: true,

  ignoreDeadLinks: [
    /^\/play/,
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/elonehoo/ui'},
    ],
    nav:[
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/elonehoo/ui/releases',
          },
        ],
      },
    ],
    sidebar: {
      "/":[
        {
          text: 'Guide',
          items:[
            {text: 'Getting Started', link: '/guide/'},
          ]
        },
        {
          text: 'Components',
          items:[
            {
              text: 'Actions',
              collapsed: false,
              items:[
                {text: 'Button', link: '/components/button'},
                {text: 'Dropdown', link: '/components/dropdown'},
                {text: 'Modal', link: '/components/modal'},
              ]
            },
            {
              text:'Data display',
              collapsed: false,
              items:[
                {text: 'Alert', link: '/components/alert'},
                {text: 'Avatar', link: '/components/avatar'},
                {text: 'Badge', link: '/components/badge'},
                {text: 'Card', link: '/components/card'},
                {text: 'Kbd', link: '/components/kbd'},
                {text: 'Table', link: '/components/table'},
                {text: 'Tooltip', link: '/components/tooltip'},
              ]
            },
            {
              text:'Data input',
              collapsed: false,
              items:[
                {text: 'Checkbox', link: '/components/checkbox'},
                {text: 'Radio', link: '/components/radio'},
                {text: 'Range', link: '/components/range'},
                {text: 'Select', link: '/components/select'},
                {text: 'Input', link: '/components/input'},
                {text: 'Textarea', link: '/components/textarea'},
                {text: 'Toggle', link: '/components/toggle'},
              ]
            },
            {
              text:'Layout',
              collapsed: false,
              items:[
                {text: 'Toast', link: '/components/toast'},
                {text: 'Content', link: '/components/content'},
              ]
            },
            {
              text:'Navigation',
              collapsed: false,
              items:[
                {text: 'Pagination', link: '/components/pagination'},
              ]
            },
            {
              text:'Mockup',
              collapsed: false,
              items:[
                {text: 'Code', link: '/components/code'},
              ]
            }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/elonehoo/ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Elone Hoo',
    },
  }
})
