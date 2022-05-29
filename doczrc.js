// doczrc.js
const fs = require('fs');
const path = require('path');

function fix(dest, src) {
  if(fs.existsSync(dest)) {
    const themeContent = fs.readFileSync(dest, {encoding: 'utf-8'});
    if(!themeContent.startsWith('// need to fix')) {
      const fixContent = fs.readFileSync(src, {encoding: 'utf-8'});
      fs.writeFileSync(dest, fixContent);
    }
  }
}

function loadMenu() {
  try {
    return require('./src/docs/menurc.js');
  } catch(ex) {
    return require('../src/docs/menurc.js');
  }
}

const themePath = path.join(__dirname, 'node_modules/gatsby-theme-docz/gatsby-config.js');
const fixThemeFile = path.join(__dirname, 'gatsby-config.fix.js');

fix(themePath, fixThemeFile);


const doczCorePath = path.join(__dirname, 'node_modules/docz-core/dist/index.js');
const fixDoczCoreFile = path.join(__dirname, 'docz-core.fix.js');

fix(doczCorePath, fixDoczCoreFile);


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
  src: 'src',
  editBranch: 'main',

  /* 设置菜单顺序 */
  menu: loadMenu(),
}