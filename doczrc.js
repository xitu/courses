// doczrc.js
const fs = require('fs');
const path = require('path');
const themePath = path.join(__dirname, 'node_modules/gatsby-theme-docz/gatsby-config.js');
const fixThemeFile = path.join(__dirname, 'gatsby-config.fix.js');

if(fs.existsSync(themePath)) {
  const themeContent = fs.readFileSync(themePath, {encoding: 'utf-8'});
  if(!themeContent.startsWith('// need to fix')) {
    const fixContent = fs.readFileSync(fixThemeFile, {encoding: 'utf-8'});
    fs.writeFileSync(themePath, fixContent);
  }
}

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

  /* 设置菜单顺序 */
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