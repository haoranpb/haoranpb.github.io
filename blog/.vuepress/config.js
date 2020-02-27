module.exports = {
  title: 'Sun Haoran',
  description: 'Fan of @vuejs and FC Bayern ⚽️',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    nav: [],
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/post/',
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ludanxer',
        },
        {
          type: 'mail',
          link: 'mailto:ludanxer@icloud.com'
        }
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2020 ludanxer',
          link: 'https://github.com/ludanxer/ludanxer.github.io',
        },
      ],
    },
  },
}
