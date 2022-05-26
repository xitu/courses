(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7A3R":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return O}));var a=t("Fcif"),o=t("+I+c"),c=(t("mXGw"),t("/FXl")),b=t("TjRS"),p=t("ZFoC"),r=t("1aoM"),i=t("gFLZ"),m=t("DdmM"),u=t("3xM5"),d=(t("aD51"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/index.mdx"}});var j={_frontmatter:l},s=b.a;function O(e){var n,t,O,f,_=e.components,y=Object(o.a)(e,d);return Object(c.b)(s,Object(a.a)({},j,y,{components:_,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"简介"},"简介"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"https://github.com/xitu/courses"},"稀土教程")),"是由",Object(c.b)("a",{parentName:"p",href:"https://juejin.cn"},"稀土掘金社区"),"开源共建的面向职业开发者的学习资料。"),Object(c.b)("p",null,"如果你是来学习的，点开左侧菜单，选择你想学习的课程，就可以愉快地开启你的学习之旅！"),Object(c.b)("p",null,"如果你想加入到课程内容贡献者的行列，那你可以仔细往下阅读这篇文章。"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"创建文档"},"创建文档"),Object(c.b)("p",null,"稀土教程基于",Object(c.b)("a",{parentName:"p",href:"https://www.docz.site/"},"Docz"),"构建，并且在Github开源。你可以在",Object(c.b)("a",{parentName:"p",href:"https://github.com/xitu/courses"},"GitHub仓库"),"中添加内容，具体的方式是直接在src目录下任意子目录中添加",Object(c.b)("inlineCode",{parentName:"p"},"mdx"),"文件。"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"MDX"),"是Markdown语法扩展，你可以使用所有标准的Markdown语法，且能够引入",Object(c.b)("inlineCode",{parentName:"p"},"React Components"),"，你甚至可以根据实际需要，开发自己的组件。"),Object(c.b)("p",null,"只要你在添加的",Object(c.b)("inlineCode",{parentName:"p"},"MDX"),"文件的开头添加",Object(c.b)("inlineCode",{parentName:"p"},"name"),"、",Object(c.b)("inlineCode",{parentName:"p"},"route"),"、",Object(c.b)("inlineCode",{parentName:"p"},"menu"),"以及可选的",Object(c.b)("inlineCode",{parentName:"p"},"submenu"),"配置："),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-mdx"},"---\nname: 文件名\nroute: /路径\nmenu: 目录\nsubmenu: 二级目录\n---\n")),Object(c.b)("p",null,"就可以在教程的左侧菜单中显示出来。"),Object(c.b)("h2",{id:"管理目录"},"管理目录"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Docz")," 支持配置目录顺序，你可以编辑",Object(c.b)("inlineCode",{parentName:"p"},"doczrc.js"),"，修改目录配置，例如："),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"  menu: [\n    { name: 'JavaScript', menu: [\n        '概览',\n        '浏览器中的JS',\n      ] \n    },\n    {\n      name: 'HTML', menu: [\n        '概览',\n      ]\n    },\n    {\n      name: 'CSS', menu: [\n        '概览',\n      ]\n    },\n  ]\n")),Object(c.b)("p",null,"如果不修改，默认会按照字符串顺序排列目录。"),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"MDX"),"支持非常灵活的组件扩展能力，你可以在",Object(c.b)("inlineCode",{parentName:"p"},"src/components"),"目录下添加自定义组件，比如目前已有的",Object(c.b)("a",{parentName:"p",href:"https://github.com/xitu/courses/tree/main/src/components/JCode"},"码上掘金组件"),"。"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Docz"),"默认提供了",Object(c.b)("inlineCode",{parentName:"p"},"Playground"),"组件，它可以嵌入其他组件代码并支持实时编辑和运行，例如下面的代码演示了",Object(c.b)("inlineCode",{parentName:"p"},"码上掘金组件"),"，你可以更换",Object(c.b)("inlineCode",{parentName:"p"},"codeId"),"来替换不同的码上掘金代码块。"),Object(c.b)(p.c,{__position:0,__code:'<JCode codeId="7101205186751758367"></JCode>',__scope:(n={props:y,DefaultLayout:b.a,Playground:p.c,JCode:r.a,TopMenu:i.a,Diagram:m.a,KaTeX:u.a},n.DefaultLayout=b.a,n._frontmatter=l,n),mdxType:"Playground"},Object(c.b)(r.a,{codeId:"7101205186751758367",mdxType:"JCode"})),Object(c.b)("p",null,"我默认扩展了一些常用组件，比如顶部菜单："),Object(c.b)(p.c,{__position:1,__code:'<TopMenu\n  code="//code.juejin.cn"\n  pins="//juejin.cn/pins/club/6824710202655244301"\n  docs="//juejin.cn"\n/>',__scope:(t={props:y,DefaultLayout:b.a,Playground:p.c,JCode:r.a,TopMenu:i.a,Diagram:m.a,KaTeX:u.a},t.DefaultLayout=b.a,t._frontmatter=l,t),mdxType:"Playground"},Object(c.b)(i.a,{code:"//code.juejin.cn",pins:"//juejin.cn/pins/club/6824710202655244301",docs:"//juejin.cn",mdxType:"TopMenu"})),Object(c.b)("p",null,"还可以基于",Object(c.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid"},"mermaid"),"绘制流程图："),Object(c.b)(p.c,{__position:2,__code:'<Diagram theme="dark">{`\n  graph TD\n  Start --\x3e Stop\n`}</Diagram>',__scope:(O={props:y,DefaultLayout:b.a,Playground:p.c,JCode:r.a,TopMenu:i.a,Diagram:m.a,KaTeX:u.a},O.DefaultLayout=b.a,O._frontmatter=l,O),mdxType:"Playground"},Object(c.b)(m.a,{theme:"dark",mdxType:"Diagram"},"\n    graph TD\n    Start --\x3e Stop\n  ")),Object(c.b)("p",null,"基于",Object(c.b)("a",{parentName:"p",href:"https://katex.org/"},"KaTeX"),"书写公式："),Object(c.b)(p.c,{__position:3,__code:"<KaTeX macros=\"{'\\\\f': '#1f(#2)'}\">{`\n  \\\\f\\\\relax{x} = \\\\int_{-\\\\infty}^\\\\infty\n      \\\\f\\\\hat\\\\xi\\\\,e^{2 \\\\pi i \\\\xi x}\n      \\\\,d\\\\xi\n`}</KaTeX>",__scope:(f={props:y,DefaultLayout:b.a,Playground:p.c,JCode:r.a,TopMenu:i.a,Diagram:m.a,KaTeX:u.a},f.DefaultLayout=b.a,f._frontmatter=l,f),mdxType:"Playground"},Object(c.b)(u.a,{macros:"{'\\\\f': '#1f(#2)'}",mdxType:"KaTeX"},"\n    \\f\\relax{x} = \\int_{-\\infty}^\\infty\n        \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n        \\,d\\xi\n  ")),Object(c.b)("h2",{id:"本地调试"},"本地调试"),Object(c.b)("h2",{id:"生成和部署"},"生成和部署"))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!Object.prototype.hasOwnProperty.call(O,"__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-index-mdx-6cfb3a5920a15657c7b9.js.map