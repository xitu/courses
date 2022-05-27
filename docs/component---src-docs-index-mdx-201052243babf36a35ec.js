(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4pSR":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return j})),t.d(n,"default",(function(){return T}));var a=t("Fcif"),b=t("+I+c"),o=(t("mXGw"),t("/FXl")),c=t("TjRS"),p=t("ZFoC"),i=t("1aoM"),r=t("gFLZ"),l=t("O7Kf"),d=t("DdmM"),m=t("3xM5"),u=(t("aD51"),["components"]),j={};void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!Object.prototype.hasOwnProperty.call(j,"__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/index.mdx"}});var s={_frontmatter:j},O=c.a;function T(e){var n,t,T,f,_,y=e.components,g=Object(b.a)(e,u);return Object(o.b)(O,Object(a.a)({},s,g,{components:y,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"简介"},"简介"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/xitu/courses"},"稀土教程")),"是由",Object(o.b)("a",{parentName:"p",href:"https://juejin.cn"},"稀土掘金社区"),"开源共建的面向职业开发者的学习资料。"),Object(o.b)("p",null,"如果你是来学习的，点开左侧菜单，选择你想学习的课程，就可以愉快地开启你的学习之旅！"),Object(o.b)("p",null,"如果你想加入到课程内容贡献者的行列，那你可以仔细往下阅读这篇文章。"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"创建文档"},"创建文档"),Object(o.b)("p",null,"稀土教程基于",Object(o.b)("a",{parentName:"p",href:"https://www.docz.site/"},"Docz"),"构建，并且在Github开源。你可以在",Object(o.b)("a",{parentName:"p",href:"https://github.com/xitu/courses"},"GitHub仓库"),"中添加内容，具体的方式是直接在",Object(o.b)("inlineCode",{parentName:"p"},"src/docs"),"目录下任意子目录中添加",Object(o.b)("inlineCode",{parentName:"p"},"mdx"),"文件。"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MDX"),"是Markdown语法扩展，你可以使用所有标准的Markdown语法，且能够引入",Object(o.b)("inlineCode",{parentName:"p"},"React Components"),"，你甚至可以根据实际需要，开发自己的组件。"),Object(o.b)("p",null,"只要你在添加的",Object(o.b)("inlineCode",{parentName:"p"},"MDX"),"文件的开头添加",Object(o.b)("inlineCode",{parentName:"p"},"name"),"、",Object(o.b)("inlineCode",{parentName:"p"},"route"),"、",Object(o.b)("inlineCode",{parentName:"p"},"menu"),"以及可选的",Object(o.b)("inlineCode",{parentName:"p"},"submenu"),"配置："),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx"},"---\nname: 文件名\nroute: /路径\nmenu: 目录\nsubmenu: 二级目录\n---\n")),Object(o.b)("p",null,"就可以在教程的左侧菜单中显示出来。"),Object(o.b)("h2",{id:"管理目录"},"管理目录"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Docz")," 支持配置目录顺序，你可以编辑",Object(o.b)("inlineCode",{parentName:"p"},"doczrc.js"),"，修改目录配置，例如："),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"  menu: [\n    { name: 'JavaScript', menu: [\n        '概览',\n        '浏览器中的JS',\n      ] \n    },\n    {\n      name: 'HTML', menu: [\n        '概览',\n      ]\n    },\n    {\n      name: 'CSS', menu: [\n        '概览',\n      ]\n    },\n  ]\n")),Object(o.b)("p",null,"如果不修改，默认会按照字符串顺序排列目录。"),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MDX"),"支持非常灵活的组件扩展能力，你可以在",Object(o.b)("inlineCode",{parentName:"p"},"src/components"),"目录下添加自定义组件，比如目前已有的",Object(o.b)("a",{parentName:"p",href:"https://github.com/xitu/courses/tree/main/src/components/JCode"},"码上掘金组件"),"。"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Docz"),"默认提供了",Object(o.b)("inlineCode",{parentName:"p"},"Playground"),"组件，它可以嵌入其他组件代码并支持实时编辑和运行，例如下面的代码演示了",Object(o.b)("inlineCode",{parentName:"p"},"码上掘金组件"),"，你可以更换",Object(o.b)("inlineCode",{parentName:"p"},"codeId"),"来替换不同的码上掘金代码块。"),Object(o.b)(p.c,{__position:0,__code:'<JCode codeId="7101205186751758367"></JCode>',__scope:(n={props:g,DefaultLayout:c.a,Playground:p.c,JCode:i.a,TopMenu:r.a,Tabs:l.a,Diagram:d.a,KaTeX:m.a},n.DefaultLayout=c.a,n._frontmatter=j,n),mdxType:"Playground"},Object(o.b)(i.a,{codeId:"7101205186751758367",mdxType:"JCode"})),Object(o.b)("p",null,"我默认扩展了一些常用组件，比如顶部菜单："),Object(o.b)(p.c,{__position:1,__code:'<TopMenu\n  code="//code.juejin.cn"\n  pins="//juejin.cn/pins/club/6824710202655244301"\n  docs="//juejin.cn"\n/>',__scope:(t={props:g,DefaultLayout:c.a,Playground:p.c,JCode:i.a,TopMenu:r.a,Tabs:l.a,Diagram:d.a,KaTeX:m.a},t.DefaultLayout=c.a,t._frontmatter=j,t),mdxType:"Playground"},Object(o.b)(r.a,{code:"//code.juejin.cn",pins:"//juejin.cn/pins/club/6824710202655244301",docs:"//juejin.cn",mdxType:"TopMenu"})),Object(o.b)("p",null,"Tabs:"),Object(o.b)(p.c,{__position:2,__code:'<Tabs activeId="1">\n  <Tabs.Tab id="1" title="Tab 1">\n    Tab content 1\n  </Tabs.Tab>\n  <Tabs.Tab id="2" title="Tab 2">\n    Tab content 2\n  </Tabs.Tab>\n  <Tabs.Tab id="3" title={<i>Tab 3</i>}>\n    Tab content 3\n  </Tabs.Tab>\n</Tabs>',__scope:(T={props:g,DefaultLayout:c.a,Playground:p.c,JCode:i.a,TopMenu:r.a,Tabs:l.a,Diagram:d.a,KaTeX:m.a},T.DefaultLayout=c.a,T._frontmatter=j,T),mdxType:"Playground"},Object(o.b)(l.a,{activeId:"1",mdxType:"Tabs"},Object(o.b)(l.a.Tab,{id:"1",title:"Tab 1"},"Tab content 1"),Object(o.b)(l.a.Tab,{id:"2",title:"Tab 2"},"Tab content 2"),Object(o.b)(l.a.Tab,{id:"3",title:Object(o.b)("i",null,"Tab 3")},"Tab content 3"))),Object(o.b)("p",null,"还可以基于",Object(o.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid"},"mermaid"),"绘制流程图："),Object(o.b)(p.c,{__position:3,__code:'<Diagram theme="dark">{`\n  graph TD\n  Start --\x3e Stop\n`}</Diagram>',__scope:(f={props:g,DefaultLayout:c.a,Playground:p.c,JCode:i.a,TopMenu:r.a,Tabs:l.a,Diagram:d.a,KaTeX:m.a},f.DefaultLayout=c.a,f._frontmatter=j,f),mdxType:"Playground"},Object(o.b)(d.a,{theme:"dark",mdxType:"Diagram"},"\n    graph TD\n    Start --\x3e Stop\n  ")),Object(o.b)("p",null,"基于",Object(o.b)("a",{parentName:"p",href:"https://katex.org/"},"KaTeX"),"书写公式："),Object(o.b)(p.c,{__position:4,__code:"<KaTeX macros=\"{'\\\\f': '#1f(#2)'}\">{`\n  \\\\f\\\\relax{x} = \\\\int_{-\\\\infty}^\\\\infty\n      \\\\f\\\\hat\\\\xi\\\\,e^{2 \\\\pi i \\\\xi x}\n      \\\\,d\\\\xi\n`}</KaTeX>",__scope:(_={props:g,DefaultLayout:c.a,Playground:p.c,JCode:i.a,TopMenu:r.a,Tabs:l.a,Diagram:d.a,KaTeX:m.a},_.DefaultLayout=c.a,_._frontmatter=j,_),mdxType:"Playground"},Object(o.b)(m.a,{macros:"{'\\\\f': '#1f(#2)'}",mdxType:"KaTeX"},"\n    \\f\\relax{x} = \\int_{-\\infty}^\\infty\n        \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n        \\,d\\xi\n  ")),Object(o.b)("h2",{id:"本地调试"},"本地调试"),Object(o.b)("p",null,"将Github仓库代码Clone到本地，安装依赖：",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),"，然后运行",Object(o.b)("inlineCode",{parentName:"p"},"npm start"),"即可运行。"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"注意")," 🐶，因为需要一些MDX插件来正确解析MD语法，但是docz的",Object(o.b)("a",{parentName:"p",href:"https://github.com/doczjs/docz/issues/1629"},"bug未修复"),"，所以要解析正确的格式，只能手动将项目根目录下的",Object(o.b)("inlineCode",{parentName:"p"},"gatsby-config.fix.js"),"内容替换",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/gatsby-theme-docz/gatsby-config.js"),"（不替换也不影响本地运行，只是有些MD语法扩展解析不了）。"),Object(o.b)("h2",{id:"生成和部署"},"生成和部署"),Object(o.b)("p",null,"运行",Object(o.b)("inlineCode",{parentName:"p"},"npm run docz:build"),"，将目录",Object(o.b)("inlineCode",{parentName:"p"},".docz/dist"),"下的文件部署到服务器即可。"),Object(o.b)("p",null,"如果要更新",Object(o.b)("inlineCode",{parentName:"p"},"github.io"),"的服务，运行",Object(o.b)("inlineCode",{parentName:"p"},"npm run prepublishOnly"),"然后提交PR到Github仓库，merge后网站内容就会更新。"))}void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&!Object.prototype.hasOwnProperty.call(T,"__filemeta")&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/index.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-index-mdx-201052243babf36a35ec.js.map