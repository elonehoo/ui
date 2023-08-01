import { defineConfig } from 'vitepress'

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
              ]
            },
            {
              text:'Data display',
              collapsed: false,
            },
            {
              text:'Data input',
              collapsed: false,
            },
            {
              text:'Layout',
              collapsed: false,
            },
            {
              text:'Navigation',
              collapsed: false,
            },
            {
              text:'Mockup',
              collapsed: false,
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
