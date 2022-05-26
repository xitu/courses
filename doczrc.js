// doczrc.js
export default {
  title: '稀土教程',
  themeConfig: {
    initialColorMode: 'dark',
    styles: {
      p: {
        fontSize: 16,
      }
    }
  },
  base: '/courses/',
  files: 'src/**/*.{md,markdown,mdx}',
  editBranch: 'main',
  menu: [
    { name: 'JavaScript', menu: [
        '概览',
        '浏览器中的JS',
      ] 
    },
    {
      name: 'HTML', menu: [
        '概览',
      ]
    },
    {
      name: 'CSS', menu: [
        '概览',
      ]
    },
  ]
}