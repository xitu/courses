(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-docs-javascript-basic-基本语法和数据类型-mdx"],{

/***/ "1EJ8":
/*!**************************************************!*\
  !*** ../src/docs/javascript/basic/基本语法和数据类型.mdx ***!
  \**************************************************/
/*! exports provided: _frontmatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return _frontmatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "Fcif");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "+I+c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "/FXl");
/* harmony import */ var _Users_wuliang_WorkSpace_localized_courses_node_modules_gatsby_theme_docz_src_base_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/gatsby-theme-docz/src/base/Layout.js */ "TjRS");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Tabs */ "O7Kf");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "aD51");


var _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */




var _frontmatter = {};

if (typeof _frontmatter !== 'undefined' && _frontmatter && _frontmatter === Object(_frontmatter) && Object.isExtensible(_frontmatter) && !Object.prototype.hasOwnProperty.call(_frontmatter, '__filemeta')) {
  Object.defineProperty(_frontmatter, '__filemeta', {
    configurable: true,
    value: {
      name: "_frontmatter",
      filename: "src/docs/javascript/basic/\u57FA\u672C\u8BED\u6CD5\u548C\u6570\u636E\u7C7B\u578B.mdx"
    }
  });
}

var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = _Users_wuliang_WorkSpace_localized_courses_node_modules_gatsby_theme_docz_src_base_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    "id": "基本语法和数据类型"
  }, "\u57FA\u672C\u8BED\u6CD5\u548C\u6570\u636E\u7C7B\u578B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    activeId: "1",
    minHeight: "180px",
    mdxType: "Tabs"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"].Tab, {
    id: "1",
    title: "\u53C2\u8003\u8D44\u6599\uD83D\uDCD6"
  }, "\n    " + __list([['语法和数据类型', '本章讨论 JavaScript 的基本语法，变量声明，数据类型 和 字面量。', 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types', 'From MDN']]) + "\n    <div class=\"more\"><a href=\"https://juejin.cn/post/6985459853183434789\" target=\"_blank\">\uD83D\uDC49\uD83C\uDFFB \u66F4\u591A\u5185\u5BB9\uD83D\uDCDA</a></div>\n  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"].Tab, {
    id: "2",
    title: "\u7EC3\u4E60\u9898\uD83D\uDCDD"
  }, __list([['练习', '我们在码上掘金上试试看。', 'https://code.juejin.cn']])), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_Tabs__WEBPACK_IMPORTED_MODULE_5__["Tabs"].Tab, {
    id: "3",
    title: "\u4EA4\u6D41\u8BA8\u8BBA\uD83D\uDD25"
  }, __list([['交流讨论', '来沸点交流讨论吧💬', 'https://juejin.cn/pins/club/6824710202655244301']]))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "基础"
  }, "\u57FA\u7840"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript \u501F\u9274\u4E86 Java \u7684\u5927\u90E8\u5206\u8BED\u6CD5\uFF0C\u4F46\u540C\u65F6\u4E5F\u53D7\u5230 Awk\uFF0CPerl \u548C Python\u7684\u5F71\u54CD\u3002 "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u4EE3\u7801\u7531\u7B26\u53F7\uFF08Tokens\uFF09\u7EC4\u6210\u8BED\u53E5\uFF08Statements\uFF09\u548C\u8BED\u53E5\u5757\uFF08Blocks\uFF09\uFF0C\u7136\u540E\u7531\u8BED\u53E5\u548C\u8BED\u53E5\u5757\u7EC4\u6210\u7A0B\u5E8F\uFF08Program\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5BF9\u4E8EJavaScript\u8BED\u8A00\uFF0C\u7B26\u53F7\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BCD\u6CD5"), "\u57FA\u672C\u5355\u5143\uFF0C\u800C\u8BED\u53E5\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BED\u6CD5"), "\u57FA\u672C\u5355\u5143\u3002JavaScript\u901A\u8FC7\u4E00\u6761\u8BED\u53E5\u6765\u6267\u884C\u67D0\u4E2A\u6307\u4EE4\u6216\u8005\u8BA1\u7B97\u67D0\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "语句块block"
  }, "\u8BED\u53E5\u5757\uFF08Block\uFF09"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8BED\u53E5\u7531\u4E00\u4E2A\u6216\u591A\u4E2AToken\u6784\u6210\uFF0C\u901A\u5E38\u4EE5\u5206\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ";"), "\u7ED3\u5C3E\u3002\u8BED\u53E5\u5757\u7531\u4E00\u6761\u6216\u591A\u6761\u8BED\u53E5\u6784\u6210\uFF0C\u901A\u5E38\u4EE5\u53F3\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "}"), "\u7ED3\u5C3E\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5C3D\u7BA1\u5728JavaScript\u4E2D\uFF0C\u6211\u4EEC\u968F\u65F6\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u4E00\u5BF9\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "}"), "\u6784\u9020\u4E00\u5757\u8BED\u53E5\u5757\uFF0C\u4F46\u6211\u4EEC", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4E00\u822C\u5F88\u5C11\u8FD9\u6837\u505A"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    alt: "\\u72EC\\u7ACB\\u8BED\\u53E5\\u5757",
    src: __webpack_require__(/*! ./public/code-block.jpg */ "c7rx")
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u4F7F\u7528\u82B1\u62EC\u53F7\u6784\u5EFA\u4E86\u4E00\u4E2A\u8BED\u53E5\u5757\uFF0C\u5728JavaScript\u4E2D\uFF0C\u8BED\u53E5\u5757\u6784\u6210\u4E00\u4E2A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5757\u7EA7\u4F5C\u7528\u57DF"), "\uFF0C\u5173\u4E8E\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u6211\u4EEC\u5C06\u5728\u540E\u7EED\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u8BF4\u660E\u3002\u73B0\u5728\u6211\u4EEC\u53EA\u8981\u7B80\u5355\u7406\u89E3\uFF0C\u5728\u8BED\u53E5\u5757\u4E2D\u53EF\u4EE5\u518D\u6B21\u58F0\u660E\u4E00\u4E2A\u8BED\u53E5\u5757\u4E4B\u5916\u5B58\u5728\u7684\u53D8\u91CF\uFF0C\u5982\u679C\u6211\u4EEC\u8FD9\u4E48\u505A\u4E86\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8BED\u53E5\u5757\u4E2D\u8BBF\u95EE\u5230\u7684\u662F\u8BED\u53E5\u5757\u5185\u90E8\u7684\u53D8\u91CF\uFF0C\u5728\u8BED\u53E5\u5757\u5916\u8BBF\u95EE\u5230\u7684\u662F\u8BED\u53E5\u5757\u5916\u90E8\u7684\u53D8\u91CF\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u4E00\u822C\u4E0D\u523B\u610F\u5355\u72EC\u4F7F\u7528\u8BED\u53E5\u5757\uFF0C\u800C\u662F\u5728\u4E00\u4E9B", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u590D\u5408\u8BED\u53E5"), "\u4E2D\uFF0C\u8BED\u53E5\u5757\u4F5C\u4E3A\u5176\u4E2D\u7684\u90E8\u5206\u7ED3\u6784\u51FA\u73B0\uFF0C\u6211\u4EEC\u540E\u9762\u4F1A\u8BE6\u7EC6\u8BA8\u8BBA\uFF0C\u5148\u8BD5\u4E3E\u4E00\u4E8C\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "do {\n  if(subject.tagName === 'SECTION') {\n    break;\n  }\n  subject = subject.parentElement;\n} while(subject);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "do...while"), "\u662F\u4E00\u6761", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5FAA\u73AF\u8BED\u53E5"), "\uFF0C\u5176\u4E2D", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "do"), "\u6267\u884C\u7684\u90E8\u5206\u662F\u4E00\u4E2A\u8BED\u53E5\u5757\uFF0Cdo\u4E2D\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "if"), "\u8BED\u53E5\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u6761\u4EF6\u5206\u652F\u8BED\u53E5"), "\uFF0C\u5B83\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u6761\u4EF6\u8868\u8FBE\u5F0F"), "\u540E\u9762\u8DDF\u7740\u7684\u4E5F\u662F\u4E00\u4E2A\u8BED\u53E5\u5757\uFF0C\u5C3D\u7BA1\u5176\u4E2D\u53EA\u6709", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "break;"), "\u4E00\u6761\u8BED\u53E5\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const add = function(x, y) {\n  return x + y;\n};\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const add = function..."), "\u662F\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u548C\u521D\u59CB\u5316\u8BED\u53E5\uFF0C\u5B83\u5C06\u4E00\u4E2A\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u503C\u8D4B\u7ED9\u53D8\u91CFadd\uFF0C\u51FD\u6570\u8868\u8FBE\u5F0F\u672C\u8EAB\u7684\u51FD\u6570\u4F53\u90E8\u5206\u4E5F\u662F\u4E00\u4E2A\u8BED\u53E5\u5757\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u770B\u5230\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "JavaScript\u7684\u4E00\u4E9B\u8BED\u53E5\u53EF\u4EE5\u5305\u542B\u8BED\u53E5\u5757\uFF0C\u8BED\u53E5\u5757\u4E2D\u518D\u5305\u542B\u8BED\u53E5\uFF0C\u5C42\u5C42\u5D4C\u5957\uFF0C\u6784\u6210JavaScript\u7A0B\u5E8F\u7ED3\u6784"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3A\u4E86\u8868\u8FF0\u65B9\u4FBF\uFF0C\u4ECA\u540E\u6211\u4EEC\u5C06\u8BED\u53E5\u548C\u8BED\u53E5\u5757\u7EDF\u79F0\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BED\u53E5"), "\u3002\u6211\u4EEC\u5C06JavaScript\u7684\u8BED\u53E5\u5206\u4E3A\u7A7A\u8BED\u53E5\u3001\u53D8\u91CF\u8BED\u53E5\u3001\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u3001\u8868\u8FBE\u5F0F\u8BED\u53E5\u3001\u6761\u4EF6\u8BED\u53E5\u3001\u5FAA\u73AF\u8BED\u53E5\u3001\u8DF3\u8F6C\u8BED\u53E5\u3001\u5F02\u5E38\u5904\u7406\u8BED\u53E5\u548C\u5176\u4ED6\u8BED\u53E5\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u5C06\u4E00\u4E00\u4ECB\u7ECD\u5B83\u4EEC\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "空语句"
  }, "\u7A7A\u8BED\u53E5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u987E\u540D\u601D\u4E49\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7A7A\u8BED\u53E5"), "\u662F\u4E0D\u5305\u542B\u4EFB\u4F55\u6267\u884C\u52A8\u4F5C\u7684\u8BED\u53E5\uFF0C\u5B83\u53EA\u7531\u4E00\u4E2A\u5206\u53F7Token\u6784\u6210\u3002JavaScript\u89E3\u6790\u5668\u6267\u884C\u5230\u7A7A\u8BED\u53E5\u65F6\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u52A8\u4F5C\u3002", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7A7A\u8BED\u53E5"), "\u4E00\u822C\u4E0D\u5355\u72EC\u4F7F\u7528\uFF0C\u800C\u662F\u4E0E\u5176\u4ED6\u8BED\u53E5\u4E00\u540C\u6784\u6210\uFF0C\u6BD4\u5982\u5728if\u8BED\u53E5\u6216for\u8BED\u53E5\u4E2D\u8868\u793A\u7A7A\u7684\u52A8\u4F5C\u6216\u6761\u4EF6\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "if(a > 0 && b < 1.5);\nelse {\n  ...\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684if\u8BED\u53E5\uFF0C\u5F53\u6761\u4EF6\u6EE1\u8DB3", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a > 0"), "\u4E14", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "b < 1.5"), "\u7684\u65F6\u5019\uFF0C\u4E0D\u6267\u884C\u4EFB\u4F55\u52A8\u4F5C\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u6267\u884C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "else"), "\u6761\u4EF6\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u4F7F\u7528\u7A7A\u8BED\u53E5\u8868\u793A\u6EE1\u8DB3if\u6761\u4EF6\u65F6\u4E0D\u6267\u884C\u4EFB\u4F55\u52A8\u4F5C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u540C\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7701\u7565", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "for"), "\u5FAA\u73AF\u4F53\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const arr = new Array(5);\n\nfor(let i = 0; i < arr.length; arr[i] = ++i);\n\nconsole.log(arr); // [1, 2, 3, 4, 5]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5B9E\u9645\u4E0A\uFF0C\u4E0A\u9762\u4E24\u79CD\u60C5\u51B5\u4E0D\u662F\u5F88\u597D\u7684\u7528\u6CD5\uFF0C\u56E0\u4E3Aif\u548Cfor\u7684\u53F3\u62EC\u53F7\u540E\u9762\u7684\u5206\u53F7\u5F88\u4E0D\u8D77\u773C\uFF0C\u8FD9\u6837\u5BB9\u6613\u9020\u6210\u4E00\u4E9Bbug\u3002\u5982\u679C\u4E00\u5B9A\u8981\u8FD9\u4E48\u7528\uFF0C\u5EFA\u8BAE\u52A0\u4E0A\u6CE8\u91CA\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const arr = new Array(5);\n\nfor(let i = 0; i < arr.length; arr[i] = ++i) /*do nothing*/;\n\nconsole.log(arr); // [1, 2, 3, 4, 5]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5982\u679C\u4ECE\u4EE3\u7801\u6E05\u6670\u6613\u61C2\u7684\u89D2\u5EA6\u6765\u8BB2\uFF0C\u4E0A\u9762\u7684\u5199\u6CD5\u90FD\u4E0D\u5FC5\u8981\uFF0C\u53EF\u4EE5\u6539\u6210\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "if(a <= 0 || b >= 1.5){\n  ...\n}\n\nconst arr = new Array(5);\n\nfor(let i = 0; i < arr.length; ++i) {\n  arr[i] = i + 1;\n}\n\nconsole.log(arr); // [1, 2, 3, 4, 5]\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "声明语句"
  }, "\u58F0\u660E\u8BED\u53E5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0E\u5176\u4ED6\u5927\u591A\u6570\u7F16\u7A0B\u8BED\u8A00\u4E00\u6837\uFF0CJavaScript\u7684\u53D8\u91CF\u8981", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5148\u58F0\u660E\u518D\u4F7F\u7528"), "\u3002\u58F0\u660E\u53D8\u91CF\u7684\u8BED\u53E5\u662FJavaScript\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u58F0\u660E\u8BED\u53E5"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u6709\u4E09\u79CD\u58F0\u660E\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C\u5206\u522B\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), " \u548C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\uFF0C\u4E0B\u9762\u6211\u4EEC\u4E00\u4E00\u8BF4\u660E\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "let声明变量"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "h3"
  }, "let"), "\u58F0\u660E\u53D8\u91CF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u53D8\u91CF\u7684\u57FA\u672C\u683C\u5F0F\u4E3A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let \u53D8\u91CF\u540D;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u5728\u53D8\u91CF\u58F0\u660E\u7684\u540C\u65F6\u8FD8\u53EF\u4EE5\u8FDB\u884C\u521D\u59CB\u5316\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u53D8\u91CF\u58F0\u660E\u5E76\u521D\u59CB\u5316\u7684\u57FA\u672C\u683C\u5F0F\u4E3A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let \u53D8\u91CF\u540D = \u503C;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9017\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ","), "\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let a, b = 0, c, d = 1;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u53D8\u91CF\u5982\u679C\u53EA\u58F0\u660E\u4E0D\u521D\u59CB\u5316\uFF0C\u90A3\u4E48\u8BE5\u53D8\u91CF\u7684\u521D\u59CB\u503C\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "undefined"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let a, b = 0, c, d = 1;\n\nconsole.log(a, b, c, d); // undefined, 0, undefined, 1\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "作用域"
  }, "\u4F5C\u7528\u57DF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u201C\u4F5C\u7528\u57DF(scope)\u201D\u662F\u7A0B\u5E8F\u8BBE\u8BA1\u7684\u4E00\u4E2A\u91CD\u8981\u6982\u5FF5\uFF0C\u5B83\u662F\u6307\u53D8\u91CF\uFF08\u6216\u51FD\u6570\uFF09\u58F0\u660E\u540E\u53EF\u4EE5\u88AB\u8BBF\u95EE\u7684\u4EE3\u7801\u8303\u56F4\u3002\u5728\u5355\u4E00\u6587\u4EF6\u91CC\uFF0Clet\u58F0\u660E\u7684\u53D8\u91CF\u53EA\u5728\u5B83\u6240\u5728\u7684\u5757\uFF08blocks\uFF09\u4E2D\u6709\u6548\uFF0C\u5982\u679Clet\u58F0\u660E\u5728\u4EFB\u4F55block\u4E4B\u5916\uFF0C\u90A3\u4E48\u8BE5let\u58F0\u660E\u7684\u53D8\u91CF\u5728\u5B83\u58F0\u660E\u4E4B\u540E\u76F4\u5230\u6587\u4EF6\u672B\u5C3E\u90FD\u6709\u6548\u3002\u6211\u4EEC\u524D\u9762\u5DF2\u7ECF\u89C1\u8FC7\u8FD9\u6837\u7684\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let foo = 'foo';\nlet bar = 'outer bar';\n{\n  let bar = 'inner bar';\n  console.log(foo, bar);  // foo inner bar\n}\nconsole.log(foo, bar);  // foo outer bar\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0Cblock\u4E2D\u91CD\u65B0\u58F0\u660Ebar\u4F1A\u8986\u76D6\u5916\u5C42\u7684bar,\u56E0\u6B64\u5728block\u5185\u90E8\u8BBF\u95EE\u5230\u7684bar\u662F\u5185\u5C42\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "inner bar"), "\uFF0C\u5728block\u5916\u8BBF\u95EE\u5230\u7684\u5219\u662F\u5916\u5C42\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "outer bar"), "\u3002\u56E0\u4E3Afoo\u53EA\u58F0\u660E\u5728\u5916\u5C42\uFF0Cblock\u5185\u6CA1\u6709\u58F0\u660E\uFF0C\u6240\u4EE5\u5728\u5757\u5185\u5757\u5916\u8BBF\u95EEfoo\uFF0C\u5F97\u5230\u7684\u90FD\u662F\u5916\u5C42\u7684foo\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5982\u679C\u6211\u4EEC\u53EA\u5728block\u5185\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u800C\u5728block\u5916\u5C1D\u8BD5\u8BBF\u95EE\u5B83\uFF0C\u90A3\u4E48\u89E3\u91CA\u5668\u4F1A\u629B\u51FA\u53D8\u91CF\u4E0D\u5B58\u5728\u7684\u5F02\u5E38\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let foo = 'foo';\n{\n  let bar = 'inner bar';\n  console.log(foo, bar); // foo inner bar\n}\nconsole.log(foo, bar); // Uncaught ReferenceError: bar is not defined\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "block\u4F5C\u7528\u57DF\u9002\u7528\u4E8E\u4EFB\u4F55\u53EF\u4EE5\u51FA\u73B0\u5728\u8BED\u53E5\u5757\u7684\u5730\u65B9\uFF0C\u4F8B\u5982if\u8BED\u53E5\u3001while\u8BED\u53E5\u3001\u51FD\u6570\u4F53\u3001try...catch\u7B49\u7B49\uFF0C\u53E6\u5916for\u8BED\u53E5\u7684\u6761\u4EF6\u4E2D\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u53D8\u91CF\uFF0C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u4E5F\u88AB\u9650\u5236\u5728for\u8BED\u53E5\u7684\u8BED\u53E5\u5757\u4E2D\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let a = 10;\nif(a > 0) {\n  let a = 20;\n  console.log(a); // 20\n}\nconsole.log(a); // 10\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let i =  100;\nfor(let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4 \n}\nconsole.log(i); // 100\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u5FC5\u987B\u5728", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u4E4B\u540E\u624D\u80FD\u4F7F\u7528\u53D8\u91CF\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u58F0\u660E\u4E4B\u524D\u4F7F\u7528\u5B83\uFF0C\u89E3\u91CA\u5668\u4F1A\u629B\u51FA\u5F02\u5E38\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "console.log(a); // Uncaught ReferenceError: a is not defined\nlet a = 10;\nconsole.log(a);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u91CC\u8FD8\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u867D\u7136\u6211\u4EEC\u5728block\u5185\u90E8\u53EF\u4EE5\u8BBF\u95EEblock\u5916\u90E8\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4F46\u5F53\u6211\u4EEC\u5728block\u5185\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4E0D\u7BA1\u5B83\u51FA\u73B0\u5728\u4EC0\u4E48\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u5728\u6574\u4E2Ablock\u5185\u7684\u4EFB\u4F55\u4F4D\u7F6E\u90FD\u4E0D\u80FD\u518D\u8BBF\u95EE\u548C\u8FD9\u4E2A\u540C\u540D\u7684\u5916\u90E8\u53D8\u91CF\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let foo = 'foo';\nlet bar = 'outer bar';\n\n{\n  console.log(foo); // foo\n  console.log(bar); // Uncaught ReferenceError: bar is not defined\n  let bar = 'inner bar';\n  console.log(foo);\n  console.log(bar);\n}\nconsole.log(foo);\nconsole.log(bar);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u7A0B\u5E8F\u5728\u7B2C\u4E00\u4E2A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "console.log(bar)"), "\u90A3\u91CC\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u56E0\u4E3Ablock\u5185\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u65B9\u5F0F\u58F0\u660E\u4E86bar\uFF0C\u800C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "console.log(bar)"), "\u5728", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u4E4B\u524D\u5C31\u8BBF\u95EE\u4E86bar\u3002\u5C3D\u7BA1\u5916\u90E8\u8FD8\u6709\u58F0\u660Ebar\uFF0C\u4F46\u662F\u8FD9\u91CC\u4ECD\u7136\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u800C\u4E0D\u80FD\u8BBF\u95EE\u5230\u5916\u90E8\u7684bar\u7684\u503C\u3002\u8BBF\u95EE", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "console.log(foo)"), "\u5219\u6CA1\u6709\u95EE\u9898\uFF0C\u56E0\u4E3A\u5728block\u5185\u90E8\u6CA1\u6709\u58F0\u660Efoo\uFF0C\u5B83\u8BBF\u95EE\u5230\u7684\u662F\u6B63\u5E38\u7684\u5916\u90E8\u7684foo\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u79CD\u60C5\u51B5\uFF0C\u76F8\u5F53\u4E8E\u5728block\u5185\u90E8\u4ECE\u5DE6\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{"), "\u5F00\u59CB\u76F4\u5230", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let bar"), "\u8BED\u53E5\u8FD9\u6761\u8BED\u53E5\u4E4B\u95F4\u7684\u8FD9\u4E2A\u533A\u57DF\u90FD\u4E0D\u80FD\u8BBF\u95EEbar\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u533A\u95F4\u88AB\u79F0\u4E3A\u53D8\u91CFbar\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u6682\u65F6\u6B7B\u533A"), "(Temporal Dead Zone\u7B80\u79F0", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TDZ"), ")\u3002\u7528let\u58F0\u660E\u53D8\u91CF\u603B\u4F1A\u5BFC\u81F4TDZ\uFF0C\u8303\u56F4\u4ECE\u4F5C\u7528\u57DF\u5F00\u59CB\u4F4D\u7F6E\u5230let\u58F0\u660E\u4F4D\u7F6E\u4E4B\u95F4\uFF0C\u5728\u8FD9\u4E2A\u4F4D\u7F6E\u4E2D\u95F4\u65E0\u8BBA\u5916\u5C42\u6709\u6CA1\u6709\u58F0\u660E\u540C\u540D\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u90FD\u4E0D\u80FD\u88AB\u8BBF\u95EE\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "var声明变量"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "h3"
  }, "var"), "\u58F0\u660E\u53D8\u91CF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u53D8\u91CF\u7684\u57FA\u672C\u683C\u5F0F\u4E3A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var \u53D8\u91CF\u540D;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u4E00\u6837\uFF0C\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u7684\u540C\u65F6\u8FDB\u884C\u521D\u59CB\u5316\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var \u53D8\u91CF\u540D = \u503C;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u4E5F\u4E00\u6837\u53EF\u4EE5\u901A\u8FC7\u9017\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ","), "\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\uFF0C\u672A\u521D\u59CB\u5316\u53D8\u91CF\u7684\u503C\u4E5F\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "undefined"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var a, b = 1, c = 2, d;\n\nconsole.log(a, b, c, d); // undefined 1 2 undefined\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u662FJavaScript\u65E9\u671F\u7684\u53D8\u91CF\u58F0\u660E\u65B9\u5F0F\uFF0C\u5728ES5\u4E4B\u524D\uFF0C\u6211\u4EEC\u53EA\u80FD\u4F7F\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u53D8\u91CF\u3002", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u4E0E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u58F0\u660E\u6709\u8BB8\u591A\u4E0D\u540C\u4E4B\u5904\u3002\u9996\u5148", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u540C\u65F6\u5728\u5757\u5185\u548C\u5916\u5C42\u58F0\u660E\u540C\u540D\u7684\u53D8\u91CF\uFF0C\u5B9E\u9645\u4E0A\u53D8\u91CF\u53EA\u4F1A\u88AB\u58F0\u660E\u4E00\u6B21\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = 'foo',\n  bar = 'outer bar';\n{\n  var bar = 'inner bar';\n  console.log(foo, bar); // foo inner bar\n}\nconsole.log(foo, bar); // foo inner bar\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u5B9E\u9645\u4E0A\u76F8\u5F53\u4E8E\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = 'foo',\n  bar = 'outer bar';\n{\n  bar = 'inner bar';\n  console.log(foo, bar);\n}\nconsole.log(foo, bar);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u540C\u6837\uFF0C\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4F5C\u7528\u57DF\u4F1A\u8986\u76D6\u5230\u5FAA\u73AF\u8BED\u53E5\u5916\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "for(var i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\nconsole.log(i); // 5\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var i;\nfor(i = 0; i < 5; i++) {\n  console.log(i);\n}\nconsole.log(i);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u7684\u53D8\u91CF\u867D\u7136\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4F46\u662FJavaScript\u51FD\u6570\u4F53\u6709\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7ACB\u5373\u8C03\u7528\u51FD\u6570(IIFE)\u6765\u4E3Avar\u58F0\u660E\u7684\u53D8\u91CF\u6784\u9020\u4F5C\u7528\u57DF\u3002\u5173\u4E8E\u7ACB\u5373\u8C03\u7528\u51FD\u6570(IIFE)\u5728\u8FD9\u91CC\u53EF\u4EE5\u4E0D\u5FC5\u6DF1\u7A76\uFF0C\u5728\u540E\u7EED\u8BFE\u7A0B\u4E2D\u6211\u4EEC\u8FD8\u4F1A\u6709\u8FDB\u4E00\u6B65\u7684\u4ECB\u7ECD\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = 'foo',\n  bar = 'outer bar';\n(function() {\n  var bar = 'inner bar';\n  console.log(foo, bar); // foo inner bar\n}());\nconsole.log(foo, bar); // foo outer bar\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u4F1A\u9020\u6210TDZ\u4E0D\u540C\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u8BBA\u5728\u4EC0\u4E48\u4F4D\u7F6E\uFF0C\u58F0\u660E\u90FD\u4F1A\u88AB\u63D0\u5347\uFF08hoist\uFF09\u5230\u51FD\u6570\u4F5C\u7528\u57DF\u7684\u6700\u5F00\u59CB\u5904\uFF0C\u5982\u679C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u4E0D\u5728\u4EFB\u4F55\u51FD\u6570\u5185\u90E8\u800C\u5728\u6700\u5916\u5C42\uFF0C\u90A3\u4E48\u58F0\u660E\u4F1A\u88AB\u63D0\u5347\u5230\u6587\u4EF6\u5F00\u5934\u3002\u56E0\u6B64\uFF0C\u5728\u521D\u59CB\u5316\u4E4B\u524D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u8C03\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u90FD\u4E0D\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u800C\u662F\u8FD4\u56DE\u53D8\u91CF\u521D\u59CB\u503Cundefined\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = 'foo';\nvar bar = 'outer bar';\n\n(function(){\n  console.log(foo); // foo\n  console.log(bar); // undefined\n  var bar = 'inner bar';\n  console.log(foo); // foo\n  console.log(bar); // inner bar\n}());\nconsole.log(foo); // foo\nconsole.log(bar); // outer bar\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u5728IIFE\u51FD\u6570\u4E2D\u7B2C\u4E00\u6B21\u8BBF\u95EE\u53D8\u91CFbar\u65F6\uFF0C\u56E0\u4E3A\u5B83\u8FD8\u672A\u521D\u59CB\u5316\uFF0C\u6240\u4EE5bar\u7684\u503C\u662Fundefined\u3002\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\b\u5185\u5C42\u7684bar\u58F0\u660E\u88AB\u63D0\u5347\u5230\u51FD\u6570\u4F5C\u7528\u57DF\u7684\u6700\u5F00\u59CB\u5904\uFF0C\u76F8\u5F53\u4E8E\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var foo = 'foo';\nvar bar = 'outer bar';\n\n(function(){\n  var bar;\n  console.log(foo); // foo\n  console.log(bar); // undefined\n  bar = 'inner bar';\n  console.log(foo); // foo\n  console.log(bar); // inner bar\n}());\nconsole.log(foo); // foo\nconsole.log(bar); // outer bar\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u53E6\u5916\uFF0C\u6D4F\u89C8\u5668\u7684JavaScript\u91CC\uFF0C\u5F53", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u51FA\u73B0\u5728\u6700\u5916\u5C42\u65F6\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u7684\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668window\u5BF9\u8C61\u7684\u5C5E\u6027\u8BBF\u95EE\uFF0C\u800Clet\u58F0\u660E\u7684\u53D8\u91CF\u5219\u4E0D\u53EF\u4EE5\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var a = 10;\nconsole.log(a, window.a); // 10 10\n\nlet b = 20;\nconsole.log(b, window.b); // 20 undefined\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u800C\u6CE8\u610F\uFF0C\u5728Node.js\u91CC\uFF0C\u4E0D\u8BBA\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u8FD8\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "var"), "\u58F0\u660E\u7684\u6700\u5916\u5C42\u53D8\u91CF\uFF0C\u90FD\u4E0D\u80FD\u901A\u8FC7global\u5BF9\u8C61\u7684\u5C5E\u6027\u8BBF\u95EE\u5230\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "var a = 10;\nconsole.log(a, global.a); // 10 undefined\n\nlet b = 20;\nconsole.log(b, global.b); // 20 undefined\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "不声明直接使用变量"
  }, "\u4E0D\u58F0\u660E\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u524D\u9762\u6211\u4EEC\u8BF4\u8FC7\uFF0C\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u4E0D\u58F0\u660E\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF\uFF0C\u90A3\u4E48\u53D8\u91CF\u4F1A\u88AB\u89C6\u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u5728\u6D4F\u89C8\u5668\u4E0B\u53EF\u4EE5\u901A\u8FC7window\u5C5E\u6027\u8BBF\u95EE\u5230\uFF0C\u5728Node.js\u4E0B\u53EF\u4EE5\u901A\u8FC7global\u8BBF\u95EE\u5230\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "a = 10;\nconsole.log(window.a); // 10\uFF0C\u5728Node.js\u4E0Bglobal.a\u4E5F\u662F10\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u58F0\u660E\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF\u4F1A\u629B\u51FA\u5F02\u5E38\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "'use strict';\na = 10;\nconsole.log(window.a); // Uncaught ReferenceError: a is not defined\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u867D\u7136\u8BF4\u975E\u4E25\u683C\u6A21\u5F0F\u5E76\u4E0D\u7981\u6B62\u4E0D\u58F0\u660E\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF\uFF0C\u4F46\u8FD9\u662F\u4E00\u79CD\u975E\u5E38\u4E0D\u597D\u7684\u4E60\u60EF\uFF0C\u5E94\u5F53\u8981\u7981\u6B62\u3002\u65E0\u8BBA\u4EFB\u4F55\u65F6\u5019\uFF0C\u6211\u4EEC\u4F7F\u7528\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u90FD\u5E94\u8BE5\u8981\u5148\u58F0\u660E\u518D\u4F7F\u7528\u3002\u5F53\u6211\u4EEC\u914D\u7F6E\u4E86eslint\u65F6\uFF0C\u53EA\u8981\u6211\u4EEC\u65E0\u610F\u4E2D\u5FD8\u8BB0\u58F0\u660E\u800C\u76F4\u63A5\u4F7F\u7528\u4E86\u53D8\u91CF\uFF0Ceslint\u5C31\u4F1A\u7ED9\u51FA\u63D0\u793A\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "for(i = 0; i < 5; i++) { // \u8FD9\u91CC\u5FD8\u8BB0\u4E86\u5BF9i\u8FDB\u884C\u58F0\u660E\uFF0Ceslint\u4F1A\u7ED9\u51FA\u9519\u8BEF\u4FE1\u606F\u63D0\u793A\n\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "const声明变量"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "h3"
  }, "const"), "\u58F0\u660E\u53D8\u91CF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\u662F\u82F1\u6587\u5355\u8BCDconstant\u7684\u7B80\u79F0\uFF0C\u8868\u793A\u201C\u5E38\u91CF\u201D\u7684\u610F\u601D\u3002", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\u7684\u4F7F\u7528\u65B9\u5F0F\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u51E0\u4E4E\u5B8C\u5168\u4E00\u6837\u3002\u533A\u522B\u5728\u4E8E\uFF0C\u4F7F\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u80FD\u53EA\u58F0\u660E\u4E0D\u521D\u59CB\u5316\uFF0C\u800C\u5FC5\u987B\u5728\u58F0\u660E\u7684\u65F6\u5019\u521D\u59CB\u5316\uFF0C\u800C\u4E14\u4E00\u65E6\u521D\u59CB\u5316\u4E86\uFF0C\u5728\u4E4B\u540E\u7684\u4EE3\u7801\u4E2D\u4E0D\u80FD\u5BF9\u5B83\u91CD\u65B0\u8D4B\u503C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const foo = 'foo';\nfoo = 'bar'; // Uncaught TypeError: Assignment to constant variable.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u5BF9foo\u91CD\u65B0\u8D4B\u503C\uFF0C\u89E3\u91CA\u5668\u4F1A\u629B\u51FA\u5F02\u5E38\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u867D\u7136", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\u58F0\u660E\u7981\u6B62\u5BF9\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C\uFF0C\u4F46\u662F\u5B83\u5E76\u4E0D\u7981\u6B62\u4FEE\u6539\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53D8\u91CF\u7684\u5C5E\u6027\u503C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const foo = {x: 1};\nfoo.x = 2;\nconsole.log(foo); // {x: 2}\nfoo = 'bar'; // Uncaught TypeError: Assignment to constant variable.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const foo"), "\u58F0\u660E\u5141\u8BB8\u4FEE\u6539foo\u7684\u5C5E\u6027\u503C\uFF0C\u56E0\u6B64", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "foo.x = 2"), "\u662F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u7684\uFF0C\u4F46\u662F\u4E0D\u80FD\u5BF9", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "foo"), "\u672C\u8EAB\u8FDB\u884C\u8D4B\u503C\uFF0C\u6240\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "foo = 'bar'"), "\u662F\u88AB\u7981\u6B62\u7684\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "let"), "\u4E00\u6837\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "const"), "\u4E5F\u540C\u6837\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TDZ"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "数据类型"
  }, "\u6570\u636E\u7C7B\u578B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6700\u65B0\u7684 ECMAScript \u6807\u51C6\u5B9A\u4E49\u4E86 8 \u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5206\u522B\u662F\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u4E03\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08Primitive Types\uFF09"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "undefined - \u53D8\u91CF\u672A\u8D4B\u503C\u65F6\u7684\u9ED8\u8BA4\u503C\uFF0C\u8868\u793A\u4E00\u4E2A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "\u672A\u5B9A\u4E49"), "\u7684\u6570\u636E\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "null - \u8868\u793A\u53D8\u91CF\u672A\u7ED1\u5B9A\u5177\u4F53\u53D8\u91CF\u7684\u4E00\u4E2A\u7279\u6B8A\u503C\uFF0C\u901A\u5E38\u7528\u6765\u4F5C\u4E3A\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u636E\u672A\u88AB\u6307\u5B9A\u5177\u4F53\u503C\u65F6\u7684\u521D\u59CB\u503C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u5E03\u5C14\u503C\uFF08Boolean) - \u5305\u542B", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "true"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "false"), "\u4E24\u4E2A\u5B57\u9762\u91CF\uFF0C\u8868\u793A\u903B\u8F91", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "\u771F"), "\u4E0E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "\u5047"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "/courses/js/basic/number"
  }, "\u6570\u503C\uFF08Number\uFF09"), " - \u8868\u793A\u6574\u6570\u6216\u6D6E\u70B9\u6570\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "/courses/js/basic/bigint"
  }, "\u5927\u6574\u6570\uFF08BigInt\uFF09"), " - \u8868\u793A\u4EFB\u610F\u7CBE\u5EA6\u7684\u6574\u6570\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "js/basic/string"
  }, "\u5B57\u7B26\u4E32\uFF08String\uFF09"), " - \u8868\u793A\u6587\u672C\u7684\u6570\u636E\u7C7B\u578B\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "js/basic/symbol"
  }, "Symbol"), " - \u4E00\u79CD\u5B9E\u4F8B\u662F\u552F\u4E00\u4E14\u4E0D\u53EF\u6539\u53D8\u7684\u6570\u636E\u7C7B\u578B\u3002"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u5BF9\u8C61\u7C7B\u578B\uFF08Object)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u5BF9\u8C61\u5206\u4E3A\u666E\u901A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "/courses/js/basic/object"
  }, "\u5BF9\u8C61\uFF08Object\uFF09"), "\u548C\u53EF\u8C03\u7528\u5BF9\u8C61\uFF08Callable Object)\uFF0C\u53EF\u8C03\u7528\u5BF9\u8C61\u5373", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "/courses/js/basic/function"
  }, "\u51FD\u6570\uFF08function)"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u5BF9\u8C61\uFF08Objects\uFF09\u548C\u51FD\u6570\uFF08functions\uFF09\u662FJavaScript\u7684\u57FA\u672C\u5143\u7D20\u3002\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7528\u6765\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u503C\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u770B\u505A\u5B58\u653E\u503C\u7684\u4E00\u4E2A\u547D\u540D\u5BB9\u5668\uFF0C\u51FD\u6570\u662F\u4F60\u7684\u7A0B\u5E8F\u80FD\u591F\u6267\u884C\u7684\u6B65\u9AA4\u3002"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "类型检查"
  }, "\u7C7B\u578B\u68C0\u67E5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u662F\u4E00\u79CD\u52A8\u6001\u7C7B\u578B\u7684\u8BED\u8A00\uFF0C\u8FD0\u884C\u65F6\u4EFB\u610F\u6807\u8BC6\u7B26\u53EF\u4EE5\u8D4B\u503C\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4E5F\u80FD\u591F\u968F\u65F6\u6539\u53D8\u7ED1\u5B9A\u7684\u6570\u636E\u7C7B\u578B\u3002JavaScript\u63D0\u4F9B\u4E86\u5728\u8FD0\u884C\u65F6\u5224\u65AD\u7C7B\u578B\u7684\u8FD0\u7B97\u7B26", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "typeof"), "\uFF0C\u5B83\u80FD\u591F\u8FD4\u56DE\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\u7684\u5B57\u7B26\u4E32\u63CF\u8FF0\u3002\u5BF9\u4E8E\u9664\u4E86", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "null"), "\u4EE5\u5916\u76846\u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "typeof"), "\u5206\u522B\u8FD4\u56DE", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'undefined','boolean','number','bigint','string'"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'symbol'"), "\uFF0C\u800C\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "typeof null"), "\u8FD4\u56DE", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'object'"), "\u3002\u5BF9\u4E8E\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Object"), "\u7C7B\u578B\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "typeof"), "\u7ED3\u679C\u4E5F\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'object'"), "\uFF0CFunction\u7C7B\u578B\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "typeof"), "\u7ED3\u679C\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'function'"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "console.log(\n  typeof null,        // object\n  typeof undefined,   // undefined\n  typeof true,        // boolean\n  typeof 123,         // number\n  typeof 123n,        // bigint\n  typeof 'abc',       // string\n  typeof Symbol(),    // symbol\n    typeof Object(),    // object\n  typeof (()=>{}),      // function\n); \n\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "类型转换"
  }, "\u7C7B\u578B\u8F6C\u6362"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u662F\u5F31\u7C7B\u578B\u8BED\u8A00\uFF0C\u5B83\u5BB9\u5FCD\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF0C\u6BD4\u5982\u524D\u9762\u8BF4\u8FC7\u7684\u5728\u5E03\u5C14\u5224\u65AD\u65F6\u53EF\u4EE5\u5C06\u5176\u4ED6\u503C\u8F6C\u4E3ABoolean\u7C7B\u578B\u3002\u540C\u6837\u7684\uFF0C\u5176\u4ED6\u7684\u6570\u636E\u7C7B\u578B\u5728\u4E00\u4E9B\u6761\u4EF6\u4E0B\u4E5F\u53EF\u4EE5\u81EA\u52A8\u8F6C\u6362\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "运算的隐式类型转换规则"
  }, "\u8FD0\u7B97\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u89C4\u5219"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7684\u9690\u5F0F\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6807\u51C6\u6BD4\u8F83\u590D\u6742\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u4EC5\u4ECB\u7ECD\u51E0\u4E2A\u6700\u5E38\u89C1\u7684\u9690\u5F0F\u8F6C\u6362\u3002\u5B8C\u6574\u7684\u89C4\u5219\u53C2\u8003", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://www.ecma-international.org/ecma-262/#sec-type-conversion"
  }, "ECMA-262"), "\u6807\u51C6\u6587\u6863\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5B57\u7B26\u4E32\u4E0E\u6570\u503C\u8FDB\u884C\u76F8\u52A0\u65F6\uFF0C\u6570\u503C\u88AB\u8F6C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = 10, b = 'abc', c = 1;\n\nconsole.log(a + b + c); // 10abc1\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5B57\u7B26\u4E32\u53C2\u4E0E\u975E\u52A0\u6CD5\u6570\u5B66\u8FD0\u7B97\u65F6\uFF0C\u5B57\u7B26\u4E32\u88AB\u8F6C\u6362\u4E3A\u6570\u503C\u518D\u8FDB\u884C\u8FD0\u7B97\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = 123, b = '456', c = 1\n\nconsole.log(a + b - c); //123455\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u662F\u5408\u6CD5\u7684\u6570\u503C\u683C\u5F0F\uFF08\u5408\u6CD5\u7684\u6570\u503C\u683C\u5F0F\u5305\u62EC\u5341\u8FDB\u5236\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u4E8C\u8FDB\u5236\u3001\u516B\u8FDB\u5236\u3001\u5341\u516D\u8FDB\u5236\u6570\u548C\u79D1\u5B66\u8BB0\u6570\u6CD5\u4EE5\u53CA+Infinity\u3001-Infinity\uFF09\uFF0C\u90A3\u4E48\u8FD0\u7B97\u7684\u7ED3\u679C\u4E3ANaN\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = 123, b = 'abc', c = 1;\n\nconsole.log(a + b - c); // NaN\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5E03\u5C14\u503C\u4E0E\u6570\u503C\u8FDB\u884C\u8FD0\u7B97\u65F6\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "true"), "\u89C6\u4E3A1\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "false"), "\u89C6\u4E3A0\uFF0C\u7ED3\u679C\u4E3A\u6570\u503C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = true, b = false;\n\nconsole.log(a + 1, b * 3); // 2 0\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5E03\u5C14\u503C\u4E0E\u5B57\u7B26\u4E32\u8FDB\u884C\u76F8\u52A0\u65F6\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "true"), "\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32'true'\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "false"), "\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32'false'\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = true, b = false;\n\nconsole.log(a + '', b + 'foobar') // 'true' 'falsefoobar'\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    "id": "与"
  }, "==\u4E0E==="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u5728\u5BF9\u4E24\u4E2A\u6570\u8FDB\u884C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "=="), "\u6BD4\u8F83\u65F6\uFF0C\u4F1A\u5BF9\u4E24\u4E2A\u6570\u8FDB\u884C\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF0C\u89C4\u5219\u5982\u4E0B\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5BF9", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "x==y"), "\uFF0C\u5982\u679C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679Cx\u548Cy\u662F\u7C7B\u578B\u76F8\u540C\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u5BF9\u5B83\u4EEC\u7684\u503C\u8FDB\u884C\u6BD4\u8F83"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679Cx\u548Cy\u662FObject\u7C7B\u578B\uFF0C\u5982\u679C\u5B83\u4EEC\u5F15\u7528\u540C\u6837\u7684\u5BF9\u8C61\uFF0C\u8FD4\u56DEtrue"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679Cx\u662Fnull\u6216undefined\uFF0Cy\u4E5F\u662Fnull\u6216undefined\uFF0C\u8FD4\u56DEtrue"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "x\u7684\u7C7B\u578B\u662FNumber\uFF0Cy\u7684\u7C7B\u578B\u662FString\uFF0C\u90A3\u4E48\u5C06y\u8F6C\u6362\u4E3ANumber\u8FDB\u884C\u6BD4\u8F83"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "x\u7684\u7C7B\u578B\u662FString\uFF0Cy\u7684\u7C7B\u578B\u662FNumber\uFF0C\u90A3\u4E48\u5C06x\u8F6C\u6362\u4E3ANumber\u8FDB\u884C\u6BD4\u8F83"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "x\u7684\u7C7B\u578B\u662FBoolean\uFF0C\u90A3\u4E48\u5148\u5C06x\u8F6C\u4E3ANumber\uFF0C\u518D\u7167\u89C4\u52194\u30015\u8FDB\u884C\u6BD4\u8F83"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "y\u7684\u7C7B\u578B\u662FBoolean\uFF0C\u90A3\u4E48\u5148\u5C06y\u8F6C\u4E3ANumber\uFF0C\u518D\u7167\u89C4\u52194\u30015\u8FDB\u884C\u6BD4\u8F83"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679Cx\u7684\u7C7B\u578B\u662FString\u3001Number\u6216Symbol\uFF0Cy\u7684\u7C7B\u578B\u662F\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u90A3\u4E48\u5148\u5C06y\u8F6C\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E4B\u540E\u518D\u6BD4\u8F83\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679Cy\u7684\u7C7B\u578B\u662FString\u3001Number\u6216Symbol\uFF0Cx\u7684\u7C7B\u578B\u662F\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u90A3\u4E48\u5148\u5C06x\u8F6C\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E4B\u540E\u518D\u6BD4\u8F83\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5176\u4ED6\u60C5\u51B5\u8FD4\u56DE false")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3E\u51E0\u4E2A\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "console.log(100 == '1e2'); // true\nconsole.log(true == '1', false == 0); // true true\n\nlet foo, bar = null;\nconsole.log(foo == null, bar == null,\n    foo == undefined, bar == undefined); // true true true true \n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7531\u4E8E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "=="), "\u4F1A\u505A\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF0C\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u9020\u6210\u4E0D\u53EF\u9884\u6599\u7684\u7ED3\u679C\uFF0C\u6240\u4EE5\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u63A8\u8350\u5C3D\u91CF\u4F7F\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "==="), "\u6765\u8FDB\u884C\u6BD4\u8F83\uFF0C\u540E\u8005\u4E0D\u4F1A\u505A\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF0C\u66F4\u52A0\u5B89\u5168\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "console.log(true == 1, true === 1); // true false\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4F46\u662F\u6211\u4EEC\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\u4E0D\u533A\u5206null\u8FD8\u662Fundefined\uFF0C\u56E0\u6B64\u5728\u5224\u65ADnull\u7684\u65F6\u5019\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "=="), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "显式类型转换"
  }, "\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5F53\u6211\u4EEC\u4F7F\u7528\u4E86", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "==="), "\u8FDB\u884C\u6BD4\u8F83\u4E4B\u540E\uFF0C\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u6BD4\u8F83\u7684\u7ED3\u679C\u603B\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "false"), "\u3002\u6709\u65F6\u5019\u6211\u4EEC\u786E\u5B9E\u8981\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u518D\u6BD4\u8F83\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u901A\u8FC7\u8C03\u7528\u65B9\u6CD5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Number"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "String"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Boolean"), "\u53EF\u4EE5\u5C06\u503C\u663E\u5F0F\u8F6C\u6362\u7C7B\u578B\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4F8B\u5982\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "console.log(Number('123') === 123); // true\nconsole.log(String(0xf) === '15'); // true\nconsole.log(Boolean(null) === false); // true\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "值和引用"
  }, "\u503C\u548C\u5F15\u7528"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548CObject\u7684\u4E00\u4E2A\u91CD\u8981\u533A\u522B\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u503C\u7C7B\u578B"), "\uFF0C\u800CObject\u7C7B\u578B\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5F15\u7528\u7C7B\u578B"), "\u3002\u5177\u4F53\u800C\u8A00\uFF0C\u5C31\u662F\u5F53\u7ED9\u4E00\u4E2A\u6807\u8BC6\u7B26\u8D4B\u4E88\u503C\u7C7B\u578B\u7684\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4E2A\u6807\u8BC6\u7B26\u7ED1\u5B9A\u7684\u5185\u5BB9\u662F\u8BE5\u6570\u636E\u7C7B\u578B\u7684\u4E00\u4E2A\u201C\u503C\u201C\uFF0C\u800C\u5F53\u7ED9\u4E00\u4E2A\u6807\u8BC6\u7B26\u8D4B\u4E88\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u65F6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u7B26\u7ED1\u5B9A\u7684\u5185\u5BB9\u662F\u6307\u5411\u8BE5\u6570\u636E\u7C7B\u578B\u771F\u5B9E\u503C\u7684\u201C\u5F15\u7528\u201D\uFF0C\uFF08\u5373\uFF1A\u5185\u5B58\u5730\u5740\uFF09\u3002\u6211\u4EEC\u4E3E\u4F8B\u770B\u4E8C\u8005\u533A\u522B\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let a = 10;\nlet b = a;\n\na = a + 1;\nconsole.log(a, b); // 11, 10\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0Ca\u7ED1\u5B9A\u201C\u503C\u201C10\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "b = a"), "\u8BA9b\u7684\u503C\u7ED1\u5B9A\u548Ca\u540C\u6837\u7684\u503C\uFF0C\u5373b\u7684\u503C\u4E5F\u662F10\u3002\u5F53\u6211\u4EEC\u8BA9", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a = a + 1"), "\u65F6\uFF0Ca\u7684\u503C\u53D8\u621011\uFF0C\u800Cb\u7684\u503C\u4ECD\u7136\u662F10\uFF0C\u8FD9\u662F\u56E0\u4E3Aa\u3001b\u4E24\u4E2A\u53D8\u91CF\u7ED1\u5B9A\u7684\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u867D\u7136\u5B83\u4EEC\u4E00\u5F00\u59CB\u7684\u503C\u76F8\u7B49\uFF0C\u4F46\u662F\u6211\u4EEC\u6539\u53D8\u4E00\u4E2A\uFF0C\u53E6\u4E00\u4E2A\u4E0D\u4F1A\u8DDF\u7740\u6539\u53D8\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u518D\u770B\u5F15\u7528\u7684\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let a = { x: 10 };\nlet b = a;\n\na.x = a.x + 1;\n\nconsole.log(a.x, b.x); // 11, 11\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0Ca\u7ED1\u5B9A\u5BF9\u8C61", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{x: 10}"), "\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "b = a"), "\u8BA9b\u7ED1\u5B9A\u548Ca\u540C\u6837\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6B64\u65F6a\u3001b\u5B9E\u9645\u4E0A\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0Ca.x\u4E5F\u662Fb.x\uFF0C\u6240\u4EE5\u5F53a.x\u7684\u503C\u6539\u53D8\u7684\u65F6\u5019\uFF0Cb.x\u7684\u503C\u4E5F\u968F\u4E4B\u6539\u53D8\u3002JavaScript\u7684\u89C4\u8303\u8FD9\u6837\u89C4\u5B9A\uFF1A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7ED1\u5B9A\u539F\u59CB\u5BF9\u8C61\u7684\u503C\uFF0C\u7ED1\u5B9A\u975E\u539F\u59CB\u5BF9\u8C61\u7684\u5F15\u7528"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u540C\u6837\uFF0C\u6211\u4EEC\u518D\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function inc(x) {\n    return x + 1;\n}\n\nfunction incKey(obj, key) {\n    obj[key] += 1;\n}\n\nconst a = 1, b = {x: 1};\n\nconst c = inc(a);\n\nconsole.log(a, b, c); // 1 {x: 1} 2\n\nincKey(b, 'x');\n\nconsole.log(b.x); // 2\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u4F20\u7ED9", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "inc(x)"), "\u7684\u662F\u6570\u503C\uFF0C\u662F\u503C\u7C7B\u578B\uFF0C\u6240\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "inc(a)"), "\u7684\u64CD\u4F5C\u5E76\u4E0D\u4F1A\u6539\u53D8\u5B9E\u9645\u7684a\u7684\u503C\uFF0C\u800C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "incKey(b)"), "\u4F20\u7684\u662F\u5F15\u7528\uFF0C\u6240\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "obj[key] += 1"), "\u6539\u53D8\u4E86b.x\u7684\u503C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6839\u636E\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\uFF0C\u503C\u548C\u5F15\u7528\u5728\u5B9E\u9645\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u6709\u660E\u663E\u7684\u533A\u522B\uFF0C\u5B66\u4E60JavaScript\u5E94\u5F53\u7406\u89E3\u5B83\u4EEC\u7684\u5DEE\u5F02\u3002"));
}

if (typeof MDXContent !== 'undefined' && MDXContent && MDXContent === Object(MDXContent) && Object.isExtensible(MDXContent) && !Object.prototype.hasOwnProperty.call(MDXContent, '__filemeta')) {
  Object.defineProperty(MDXContent, '__filemeta', {
    configurable: true,
    value: {
      name: "MDXContent",
      filename: "src/docs/javascript/basic/\u57FA\u672C\u8BED\u6CD5\u548C\u6570\u636E\u7C7B\u578B.mdx"
    }
  });
}

;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "c7rx":
/*!**********************************************************!*\
  !*** ../src/docs/javascript/basic/public/code-block.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/code-block-98d223247a4a1850cebb190820db7f84.jpg";

/***/ })

}]);