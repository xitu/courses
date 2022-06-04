(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-docs-webdev-geting-started-初识css-mdx"],{

/***/ "Qym3":
/*!***************************************************!*\
  !*** ../src/docs/webdev/geting_started/初识CSS.mdx ***!
  \***************************************************/
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
/* harmony import */ var _JCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/JCode */ "1aoM");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pagination */ "AUG3");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "aD51");


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
      filename: "src/docs/webdev/geting_started/\u521D\u8BC6CSS.mdx"
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
    "id": "初识css"
  }, "\u521D\u8BC6CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "什么是css"
  }, "\u4EC0\u4E48\u662FCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "CSS"), "\u662F\u5C42\u53E0\u6837\u5F0F\u8868 (Cascading Style Sheets\uFF09\u7684\u7F29\u5199\uFF0C\u5B83\u662F\u4E00\u79CD\u7528\u6765\u63CF\u8FF0 HTML\u6216XML\u6587\u6863\u5448\u73B0\u5F62\u5F0F\u7684\u8BED\u8A00\u3002CSS\u63CF\u8FF0\u4E86\u5728\u5C4F\u5E55\u3001\u7EB8\u8D28\u3001\u97F3\u9891\u7B49\u591A\u79CD\u5A92\u4F53\u4E0A\u7684\u5143\u7D20\u5E94\u8BE5\u5982\u4F55\u88AB\u6E32\u67D3\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "css的基本语法"
  }, "CSS\u7684\u57FA\u672C\u8BED\u6CD5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E00\u4E2A\u9875\u9762\u7684CSS\u7531\u82E5\u5E72\u6761", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u89C4\u5219"), "\u7EC4\u6210\uFF0C\u6BCF\u4E00\u6761\u89C4\u5219\u5305\u62EC", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u9009\u62E9\u5668"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u58F0\u660E\u5757"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "body {\n  background-color: black;\n  color: white;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u662F\u4E00\u6761CSS\u89C4\u5219\u3002\u5199\u5728\u82B1\u62EC\u53F7\u524D\u9762\u7684\u5185\u5BB9\uFF0C\u53EB\u9009\u62E9\u5668\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u9009\u62E9\u5668\u51B3\u5B9A\u8BE5\u89C4\u5219\u4F5C\u7528\u4E8E\u54EA\u4E9BHTML\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u91CC\u7684\u9009\u62E9\u5668\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "body"), "\uFF0C\u8868\u793A\u8BE5\u89C4\u5219\u4F5C\u7528\u4E8E\u7F51\u9875\u4E0A\u7684body\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u9009\u62E9\u5668\u540E\u9762\u662F\u4E00\u6BB5\u88AB\u4E00\u5BF9\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{}"), "\u5305\u88F9\u7684\u5185\u5BB9\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u7531\u82E5\u5E72\u6761\u88AB\u5192\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":"), "\u5206\u5272\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u58F0\u660E"), "\u6784\u6210\uFF0C\u6BCF\u6761\u58F0\u660E\u4EE5\u5206\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ";"), "\u7ED3\u5C3E\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u58F0\u660E\u91CC\u5192\u53F7\u524D\u9762\u7684\u90E8\u5206\u662F\u5C5E\u6027\uFF0C\u8868\u793A\u8981\u8BBE\u7F6E\u5143\u7D20\u7684\u54EA\u4E00\u4E2A\u5C5E\u6027\u3002CSS\u53EF\u4EE5\u8BBE\u7F6E\u7684\u5C5E\u6027\u5F88\u591A\uFF0C\u5305\u62EC\u5143\u7D20\u7684\u80CC\u666F\u3001\u5B57\u4F53\u3001\u5927\u5C0F\u3001\u4F4D\u7F6E\u3001\u8FB9\u6846\u4EE5\u53CA\u52A8\u753B\u6548\u679C\u7B49\u7B49\u3002\u5728\u4F8B\u5B50\u91CC\uFF0C\u5C5E\u6027", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "background-color"), "\u8868\u793A\u8BBE\u7F6E\u5143\u7D20\u7684\u80CC\u666F\u989C\u8272\uFF0C\u5C5E\u6027", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "color"), "\u8868\u793A\u8BBE\u7F6E\u5143\u7D20\u7684\u6587\u5B57\u989C\u8272\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u58F0\u660E\u91CC\u5192\u53F7\u540E\u9762\u7684\u90E8\u5206\u662F\u5C5E\u6027\u503C\uFF0C\u8868\u793A\u8BE5\u5C5E\u6027\u8981\u8BBE\u7F6E\u4E3A\u54EA\u4E2A\u503C\u3002\u5728\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u5C06\u5C5E\u6027", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "background-color"), "\u7684\u503C\u8BBE\u7F6E\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "black"), "\u8868\u793A\u9ED1\u8272\uFF0C\u5C06\u5C5E\u6027", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "color"), "\u7684\u503C\u8BBE\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "white"), "\u8868\u793A\u767D\u8272\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u6837\uFF0C\u6574\u6761CSS\u89C4\u5219\u7684\u610F\u601D\u662F\uFF1A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5C06\u9875\u9762\u4E0A\u7684body\u5143\u7D20\u7684\u80CC\u666F\u8272\u8BBE\u7F6E\u4E3A\u9ED1\u8272\uFF0C\u6587\u5B57\u989C\u8272\u8BBE\u7F6E\u4E3A\u767D\u8272\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "加载css"
  }, "\u52A0\u8F7DCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5199\u597D\u4E86CSS\u89C4\u5219\uFF0C\u6211\u4EEC\u8981\u5C06\u5B83\u52A0\u8F7D\u5230\u9875\u9762\u4E0A\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u7F51\u9875\u4E2D\uFF0C\u52A0\u8F7DCSS\u7684\u65B9\u5F0F\u67093\u79CD\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u7B2C\u4E00\u79CD\u662F\u5D4C\u5165\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u662F\u628A\u6837\u5F0F\u76F4\u63A5\u5199\u5728style\u6807\u7B7E\u91CC\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<html>\n  <head>\n    ...\n    <style>\n      body {\n        background-color: black;\n        color: white;\n      }    \n    </style>\n  </head>\n  <body>\n    ....\n  </body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u4EE5\u5D4C\u5165\u65B9\u5F0F\u5199CSS\u6837\u5F0F\uFF0C\u63A8\u8350\u5C06style\u6807\u7B7E\u5199\u5728\u6240\u6709\u53EF\u5448\u73B0\u5143\u7D20\u7684\u524D\u9762\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E00\u822C\u5199\u5728head\u91CC\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u7B2C\u4E8C\u79CD\u662F\u5916\u94FE\u3002\u8FD9\u79CD\u65B9\u5F0F \u662F\u628Acss\u5199\u5728\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7link\u6807\u7B7E\uFF0C\u628Acss\u6587\u4EF6\u52A0\u8F7D\u8FDB\u6765\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<html>\n  <head>\n    ...\n    <link rel=\"stylesheet\" href=\"/static/css/style.css\">\n  </head>\n  <body>\n    ....\n  </body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "link"), "\u6807\u7B7E\u8BA9\u6D4F\u89C8\u5668\u52A0\u8F7D\u5916\u90E8\u7684CSS\u6587\u4EF6\u3002\u540C\u6837\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "link"), "\u6807\u7B7E\u4E5F\u63A8\u8350\u5199\u5728head\u91CC\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u7B2C\u4E09\u79CD\u65B9\u6CD5\u662F\u5185\u8054\u3002\u5185\u8054\u662F\u76F4\u63A5\u628A\u6837\u5F0F\u58F0\u660E\u5199\u5728\u5143\u7D20\u7684style\u5C5E\u6027\u91CC\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<html>\n  <head>\n    ...\n  </head>\n  <body style=\"background-color: black; color: white\">\n    ....\n  </body>\n</html>\n")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u8FD9\u4E09\u79CD\u52A0\u8F7DCSS\u7684\u65B9\u5F0F\u91CC\uFF0C\u6700\u63A8\u8350\u7684\u662F\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u65B9\u5F0F\u5C06CSS\u548CHTML\u5B8C\u5168\u5206\u5F00\uFF0C\u6709\u5229\u4E8E\u4EE3\u7801\u7EF4\u62A4\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    "className": "hint tip"
  }, "\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u63A8\u8350\u4F7F\u7528\u7B2C\u4E09\u79CD\u65B9\u5F0F\u52A0\u8F7DCSS\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u65B9\u5F0F\u5C06HTML\u548CCSS\u5B8C\u5168\u6DF7\u5728\u4E00\u8D77\uFF0C\u7834\u574F\u4E86CSS\u7684\u72EC\u7ACB\u6027\uFF0C\u4E5F\u4E0D\u4FBF\u4E8E\u89C4\u5219\u7684\u590D\u7528\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3A\u4E86\u5B66\u4E60\u548C\u6F14\u793A\u65B9\u4FBF\uFF0C\u672C\u8BFE\u7A0B\u91C7\u7528\u7B2C\u4E00\u79CD\u65B9\u5F0F\u52A0\u8F7D\uFF0C\u4E5F\u5C31\u662F\u76F4\u63A5\u5C06CSS\u5D4C\u5165\u5728style\u6807\u7B7E\u91CC\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5C06\u524D\u9762\u5199\u7684CSS\u89C4\u5219\u901A\u8FC7\u5185\u5D4Cstyle\u6807\u7B7E\u7684\u65B9\u5F0F\u6DFB\u52A0\u5230\u7F51\u9875\u4EE3\u7801\u91CC\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>\u6211\u7684\u7B2C\u4E00\u4E2A\u7F51\u9875</title>\n    <style>\n    body {\n      background-color: black;\n      color: white;\n    }\n    </style>\n  </head>\n  <body>\n    <h1>\u7A00\u571F\u6559\u7A0B</h1>\n    <img src=\"https://s1.ssl.qhres2.com/static/14a7d288e11f8022.svg\" alt=\"\u7A00\u571F\u6398\u91D1\">\n    <p>\u6B22\u8FCE\u6765\u5230\u7A00\u571F\u6559\u7A0B\uFF0C\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4E3A\u4F60\u51C6\u5907\u4E86\u7531\u6D45\u5165\u6DF1\u7684<em>Web\u5F00\u53D1\u8BFE\u7A0B</em>\u3002</p>\n    <h2>\u7B2C3\u8BFE</h2>\n    <p>\u8981\u8FDB\u5165Web\u5F00\u53D1\u7684\u4E16\u754C\uFF0C\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u4E86\u89E3Web\u5F00\u53D1\u7684\u8BED\u8A00\u3002\u6211\u4EEC\u4ECE<a href=\"https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML\">HTML</a>\u5F00\u59CB\u5165\u624B\uFF0CHTML\u662F\u6D4F\u89C8\u5668\u80FD\u591F\u8BC6\u522B\u7684\u201C\u7B2C\u4E00\u8BED\u8A00\u201D\u3002</p>\n  </body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u901A\u8FC7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://code.juejin.cn"
  }, "\u7801\u4E0A\u6398\u91D1"), "\uFF0C\u53EF\u4EE5\u770B\u5230\u6574\u4E2A\u7F51\u9875\u4ECE\u4E4B\u524D\u7684\u767D\u5E95\u9ED1\u5B57\uFF0C\u53D8\u6210\u4E86\u9ED1\u5E95\u767D\u5B57\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_JCode__WEBPACK_IMPORTED_MODULE_5__["JCode"], {
    codeId: "7105205999430008840",
    mdxType: "JCode"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u770B\u5230\uFF0C\u6D4F\u89C8\u5668\u5BF9\u4E0D\u540C\u6807\u7B7E\u9ED8\u8BA4\u7684\u5448\u73B0\u65B9\u5F0F\u88AB\u6211\u4EEC\u5B9A\u4E49\u7684CSS\u8986\u76D6\uFF0C\u4F7F\u7F51\u9875\u6548\u679C\u6309\u7167\u6211\u4EEC\u7684\u9700\u6C42\uFF08\u5373\uFF1A\u767D\u5E95\u9ED1\u5B57\uFF09\u5C55\u73B0\u51FA\u6765\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "属性的继承"
  }, "\u5C5E\u6027\u7684\u7EE7\u627F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5143\u7D20\u7684\u4E00\u4E9BCSS\u5C5E\u6027\u662F\u6709\u7EE7\u627F\u5173\u7CFB\u7684\uFF0C\u6709\u7EE7\u627F\u5173\u7CFB\u7684\u5C5E\u6027\u88AB\u79F0\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u53EF\u7EE7\u627F\u5C5E\u6027"), "\u3002color\u5C5E\u6027\u5C31\u662F\u4E00\u4E2A\u53EF\u7EE7\u627F\u5C5E\u6027\u3002\u8FD8\u8BB0\u5F97\u524D\u9762\u7684\u8BFE\u7A0B\u91CC\u6211\u4EEC\u8BF4\u8FC7HTML\u6587\u6863\u7ED3\u6784\u662F\u6811\u72B6\u7ED3\u6784\uFF0C\u5143\u7D20\u4E4B\u95F4\u6709\u5D4C\u5957\u5173\u7CFB\u3002\u53EF\u7EE7\u627F\u5C5E\u6027\u662F\u6307\u5982\u679C\u6211\u4EEC\u5728\u5916\u5C42\u5143\u7D20\u4E0A\u8BBE\u7F6E\u4E86\u8FD9\u4E2A\u6837\u5F0F\u5C5E\u6027\uFF0C\u5185\u5C42\u6CA1\u6709\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5143\u7D20\u90FD\u4F1A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u81EA\u52A8\u7EE7\u627F"), "\u8BE5\u5C5E\u6027\u3002\u6BD4\u5982\u6211\u4EEC\u7ED9body\u8BBE\u7F6E\u4E86color\u4E3A\u767D\u8272\uFF0C\u5B83\u5185\u5C42\u7684h1\u3001h2\u3001p\u3001em\u7B49\u6807\u7B7E\u6211\u4EEC\u6CA1\u6709\u8BBE\u7F6Ecolor\uFF0C\u4F46\u662F\u5B83\u4EEC\u81EA\u52A8\u7EE7\u627F\u4E86body\u8BBE\u7F6E\u7684color\uFF0C\u4E8E\u662F\u4E5F\u6210\u4E3A\u4E86\u767D\u8272\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0E\u4E4B\u4E0D\u540C\u7684\u662F\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4E0D\u53EF\u7EE7\u627F\u5C5E\u6027"), "\u662F\u6307\u8BBE\u7F6E\u5728\u5916\u5C42\u5143\u7D20\u7684\u5C5E\u6027\u4E0D\u4F1A\u5F71\u54CD\u6CA1\u6709\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u5C42\u5143\u7D20\u7684\u663E\u793A\u6548\u679C\u3002\u6BD4\u5982backgroud-color\u5C31\u662F\u662F\u4E00\u4E2A\u4E0D\u53EF\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u7ED9body\u8BBE\u7F6E\u4E86background-color\u4E3A\u9ED1\u8272\uFF0C\u5E76\u4E0D\u4F1A\u5C06\u5B83\u5185\u5C42\u5143\u7D20\u7684background-color\u4E5F\u8BBE\u7F6E\u4E3A\u9ED1\u8272\u3002\u8FD9\u91CC\u6211\u4EEC\u770B\u5230\u6574\u4E2A\u9875\u9762\u90FD\u6210\u4E3A\u9ED1\u8272\uFF0C\u662F\u56E0\u4E3Abody\u521A\u597D\u5360\u636E\u6574\u4E2A\u9875\u9762\uFF0C\u800C\u5176\u4ED6\u6CA1\u6709\u8BBE\u7F6Ebackground-color\u7684\u5143\u7D20\u9ED8\u8BA4\u7684\u80CC\u666F\u662F\u900F\u660E\u8272\uFF0C\u6240\u4EE5\u770B\u8D77\u6765\u597D\u50CF\u662F\u5B83\u4EEC\u4E00\u8D77\u53D8\u9ED1\u4E86\u3002\u5728\u540E\u9762\uFF0C\u6211\u4EEC\u4F1A\u63A5\u89E6\u5230\u66F4\u591A\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u53EF\u7EE7\u627F\u5C5E\u6027\u548C\u4E0D\u53EF\u7EE7\u627F\u5C5E\u6027\u7684\u4E0D\u540C\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0B\u9762\u6211\u4EEC\u518D\u6765\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4FEE\u6539\uFF0C\u6211\u4EEC\u7ED9\u7B2C\u4E00\u6BB5\u6587\u5B57\u5355\u72EC\u8BBE\u7F6E\u4E00\u4E2Acolor\u4E3A\u7EA2\u8272\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>\u6211\u7684\u7B2C\u4E00\u4E2A\u7F51\u9875</title>\n    <style>\n    body {\n      background-color: black;\n      color: white;\n    }\n    p.first-para {\n      color: red;\n    }\n    </style>\n  </head>\n  <body>\n    <h1>\u7A00\u571F\u6559\u7A0B</h1>\n    <img src=\"https://s1.ssl.qhres2.com/static/14a7d288e11f8022.svg\" alt=\"\u7A00\u571F\u6398\u91D1\">\n    <p class=\"first-para\">\u6B22\u8FCE\u6765\u5230\u7A00\u571F\u6559\u7A0B\uFF0C\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4E3A\u4F60\u51C6\u5907\u4E86\u7531\u6D45\u5165\u6DF1\u7684<em>Web\u5F00\u53D1\u8BFE\u7A0B</em>\u3002</p>\n    <h2>\u7B2C3\u8BFE</h2>\n    <p>\u8981\u8FDB\u5165Web\u5F00\u53D1\u7684\u4E16\u754C\uFF0C\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u4E86\u89E3Web\u5F00\u53D1\u7684\u8BED\u8A00\u3002\u6211\u4EEC\u4ECE<a href=\"https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML\">HTML</a>\u5F00\u59CB\u5165\u624B\uFF0CHTML\u662F\u6D4F\u89C8\u5668\u80FD\u591F\u8BC6\u522B\u7684\u201C\u7B2C\u4E00\u8BED\u8A00\u201D\u3002</p>\n  </body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u505A\u4E86\u4E24\u4EF6\u4E8B\u60C5\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u9996\u5148\u6211\u4EEC\u7ED9", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<style>"), "\u6807\u7B7E\u91CC\u9762\u589E\u52A0\u4E86\u4E00\u6BB5\u65B0\u7684CSS\u89C4\u5219\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "p.first-para {\n  color: red;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u6CA1\u6709\u76F4\u63A5\u4F7F\u7528p\u4F5C\u4E3A\u9009\u62E9\u5668\uFF0C\u800C\u662F\u7ED9p\u540E\u9762\u589E\u52A0\u4E86\u4E00\u4E32", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".first-para"), "\uFF0C\u8FD9\u4E2A\u5728css\u4E2D\u53EB\u505A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7C7B\u9009\u62E9\u5668"), "\u3002\u6211\u4EEC\u4E4B\u6240\u4EE5\u8FD9\u4E48\u505A\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u7684\u9875\u9762\u4E0A\u6709\u4E24\u4E2Ap\u5143\u7D20\uFF0C\u800C\u6211\u4EEC\u53EA\u60F3\u8BA9\u8FD9\u4E2A\u65B0\u7684\u89C4\u5219", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u547D\u4E2D"), "\u5176\u4E2D\u7684\u4E00\u4E2Ap\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E8E\u662F\uFF0C\u5BF9\u5E94\u7684\uFF0C\u6211\u4EEC\u7ED9\u7B2C\u4E00\u4E2Ap\u5143\u7D20\u589E\u52A0\u4E86\u4E00\u4E2Aclass\u5C5E\u6027\uFF1A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "class=\"first-para\""), "\u3002\u8FD9\u4E2A\u9009\u62E9\u5668\u8868\u793A\u9009\u62E9class=first-para\u7684p\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u547D\u4E2D\u4E86\u9875\u9762\u4E0A\u7684\u7B2C\u4E00\u4E2Ap\u5143\u7D20\uFF0C\u4E8E\u662F\u6211\u4EEC\u770B\u5230\u7684\u7F51\u9875\u5185\u5BB9\u5C31\u53D8\u6210\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_JCode__WEBPACK_IMPORTED_MODULE_5__["JCode"], {
    codeId: "7105207307516477471",
    mdxType: "JCode"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6CE8\u610F\u5230\u4E0D\u4EC5p\u5143\u7D20\u7684\u6587\u5B57\u53D8\u6210\u7EA2\u8272\uFF0C\u5176\u4E2D\u7684\u5B50\u5143\u7D20em(", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<em>Web\u5F00\u53D1</em>"), ")\u4E5F\u53D8\u6210\u4E86\u7EA2\u8272\uFF0C\u8FD9\u518D\u4E00\u6B21\u5370\u8BC1\u4E86CSS\u5C5E\u6027color\u662F\u53EF\u7EE7\u627F\u5C5E\u6027\u8FD9\u4E00\u4E8B\u5B9E\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6700\u540E\uFF0C\u6211\u4EEC\u518D\u4E86\u89E3\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a>"), "\u5143\u7D20\u4E2D\u7684\u6587\u5B57\u6CA1\u6709\u968F\u7740body\u7684\u6587\u5B57\u989C\u8272\u53D8\u6210\u767D\u8272\u3002\u8FD9\u662F\u56E0\u4E3ACSS\u5C5E\u6027\u7EE7\u627F\u7684\u6761\u4EF6\u662F\u5B50\u5143\u7D20\u7684\u5C5E\u6027", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u6CA1\u6709"), "\u88AB\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C \u6D4F\u89C8\u5668\u5DF2\u7ECF\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a>"), "\u5143\u7D20\u7684color\u5C5E\u6027\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u7684\u503C\u3002\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u8986\u76D6\u4E86", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<body>"), "\u7684color\u5C5E\u6027\u8BBE\u7F6E\uFF0C \u6240\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a>"), "\u5143\u7D20\u5C31\u4E0D\u4F1A\u88AB", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<body>"), "\u7684color\u5C5E\u6027\u5F71\u54CD\u4E86\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "状态的选择器伪类"
  }, "\u72B6\u6001\u7684\u9009\u62E9\u5668\u2014\u2014\u4F2A\u7C7B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a>"), "\u6807\u7B7E\u8868\u793A\u94FE\u63A5\uFF0C\u5728\u7F51\u9875\u4E2D\uFF0C\u4E00\u4E2A\u94FE\u63A5\u4E2D\u7684\u6587\u5B57\u6709\u56DB\u79CD\u72B6\u6001\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u7B2C\u4E00\u79CD\u72B6\u6001\u662F\u9ED8\u8BA4\uFF08link\uFF09\u72B6\u6001\uFF0C\u5BF9\u5E94\u7528\u6237\u8BBF\u95EE\u7F51\u9875\u65F6\uFF0C\u8FD8\u672A\u70B9\u51FB\u8FC7\u8BE5\u94FE\u63A5\u6587\u5B57\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u7B2C\u4E8C\u79CD\u72B6\u6001\u662F\u60AC\u505C\uFF08hover\uFF09\u72B6\u6001\uFF0C\u5BF9\u5E94\u7528\u6237\u4F7F\u7528\u9F20\u6807\u60AC\u505C\u5728\u8BE5\u94FE\u63A5\u7684\u6587\u5B57\u4E0A\u65F6\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u7B2C\u4E09\u79CD\u72B6\u6001\u662F\u6FC0\u6D3B\uFF08active\uFF09\u72B6\u6001\uFF0C\u5BF9\u5E94\u7528\u6237\u6B63\u5728\u70B9\u51FB\u94FE\u63A5\u6587\u5B57\u7684\u4E00\u77AC\u95F4\uFF08\u6BD4\u5982\u9F20\u6807\u6309\u4E0B\u6216\u89E6\u5C4F\u4E2D\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u7B2C\u56DB\u79CD\u72B6\u6001\u662F\u5DF2\u8BBF\u95EE\u8FC7\uFF08visited\uFF09\u72B6\u6001\uFF0C\u5BF9\u5E94\u7528\u6237\u5DF2\u8BBF\u95EE\u8FC7\u8BE5\u94FE\u63A5\u6587\u5B57\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6D4F\u89C8\u5668\u9ED8\u8BA4\u5C06link\u72B6\u6001\u6587\u5B57\u989C\u8272\u9ED8\u8BA4\u8BBE\u4E3A\u84DD\u8272\uFF0C\u5C06hover\u72B6\u6001\u6587\u5B57\u989C\u8272\u9ED8\u8BA4\u8BBE\u4E3A\u4E0Elink\u72B6\u6001\u989C\u8272\u76F8\u540C\uFF0C\u5C06active\u72B6\u6001\u6587\u5B57\u989C\u8272\u9ED8\u8BA4\u8BBE\u4E3A\u7EA2\u8272\uFF0C\u5C06visited\u72B6\u6001\u6587\u5B57\u989C\u8272\u9ED8\u8BA4\u8BBE\u4E3A\u7D2B\u8272\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7CSS\u4FEE\u6539\u94FE\u63A5\u7684\u8FD9\u56DB\u79CD\u72B6\u6001\u7684\u9ED8\u8BA4\u989C\u8272\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "a:link {\n  color: white;\n}\na:hover {\n  color: green;\n}\na:active {\n  color: orange;\n}\na:visited {\n  color: yellow;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u91CC\u6211\u4EEC\u770B\u5230\u4E0E\u524D\u9762\u4E0D\u540C\u7684\u4E00\u79CD\u9009\u62E9\u5668\uFF0C\u5B83\u4EE5\u5192\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":"), "\u5F00\u5934\uFF0C\u8868\u793A\u5143\u7D20\u7684\u67D0\u79CD\u72B6\u6001\u3002\u8FD9\u6837\u7684\u9009\u62E9\u5668\u88AB\u79F0\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4F2A\u7C7B\u9009\u62E9\u5668"), "\uFF08pseudo-class\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_JCode__WEBPACK_IMPORTED_MODULE_5__["JCode"], {
    codeId: "7105208174008860708",
    mdxType: "JCode"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u597D\u4E86\uFF0C\u6211\u4EEC\u6765\u603B\u7ED3\u4E00\u4E0B\u8FD9\u8282\u8BFE\u91CC\u51FA\u73B0\u7684\u4E09\u79CD\u9009\u62E9\u5668\uFF0C\u6211\u4EEC\u5148\u56DE\u987E\u4E00\u4E0B\u521A\u624D\u6211\u4EEC\u5199\u8FC7\u7684\u6240\u6709\u7684CSS\u89C4\u5219\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "body {\n  background-color: black;\n  color: white;\n}\np.first-para {\n  color: red;\n}\na:link {\n  color: white;\n}\na:hover {\n  color: green;\n}\na:active {\n  color: orange;\n}\na:visited {\n  color: yellow;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\u91CC\u4E00\u5171\u67096\u4E2ACSS\u89C4\u5219\uFF0C\u6BCF\u4E2A\u89C4\u5219\u90FD\u6709\u9009\u62E9\u5668\uFF0C\u6309\u7167\u7C7B\u578B\u5212\u5206\u4E00\u5171\u6709\u4E09\u7C7B\u9009\u62E9\u5668\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7B2C\u4E00\u7C7B\u9009\u62E9\u5668\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "body"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "p"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a"), "\u8FD9\u6837\u7684\u9009\u62E9\u5668\uFF0C\u5B83\u4EEC\u53EB\u505A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5143\u7D20\u9009\u62E9\u5668"), "\uFF0C\u8868\u793A\u9009\u62E9\u67D0\u79CD\u7C7B\u578B\uFF08\u5373\u67D0\u79CD\u6807\u7B7E\uFF09\u7684\u5143\u7D20\u3002", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "body"), "\u9009\u62E9\u7F51\u9875\u91CC\u6240\u6709\u7684body\u5143\u7D20\uFF08\u4E00\u4E2A\u7F51\u9875\u53EA\u6709\u4E00\u4E2Abody\u5143\u7D20\uFF09\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "p"), "\u9009\u62E9\u7F51\u9875\u91CC\u6240\u6709\u7684p\u5143\u7D20\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a"), "\u9009\u62E9\u7F51\u9875\u91CC\u6240\u6709\u7684a\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7B2C\u4E8C\u7C7B\u9009\u62E9\u5668\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".first-para"), "\u8FD9\u6837\u7684\u9009\u62E9\u5668\uFF0C\u5B83\u53EB\u505A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7C7B\u9009\u62E9\u5668"), "\uFF0C\u8868\u793A\u9009\u62E9\u67D0\u4E2A\u62E5\u6709\u7279\u5B9A\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "class"), "\u5C5E\u6027\u7684\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7B2C\u4E09\u7C7B\u9009\u62E9\u5668\u662F", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":link"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":active"), "\u8FD9\u6837\u7684\u9009\u62E9\u5668\uFF0C\u5B83\u4EEC\u53EB\u505A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4F2A\u7C7B(pseudo-class)"), "\uFF0C\u8868\u793A\u9009\u62E9\u5143\u7D20\u7684\u67D0\u4E2A\u7279\u5B9A\u72B6\u6001\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6CE8\u610FCSS\u7684\u9009\u62E9\u5668\u662F\u53EF\u4EE5\u7EC4\u5408\u7684\uFF0C\u6BD4\u5982\u4E0A\u9762\u4EE3\u7801\u7684\u7B2C\u4E8C\u6761\u89C4\u5219\u91CC\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "p.first-para"), "\u2014\u2014\u7EC4\u5408\u4E86\u4E00\u4E2A\u5143\u7D20\u9009\u62E9\u5668\u548C\u4E00\u4E2A\u7C7B\u9009\u62E9\u5668\u3002\u8BE5\u9009\u62E9\u5668\u8868\u793A\u9009\u4E2D\u9875\u9762\u4E0A\u6240\u6709\u5E26\u6709", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "class"), "\u5C5E\u6027\u4E14", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "class"), "\u5C5E\u6027\u503C\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "first-para"), "\u7684P\u5143\u7D20\u3002\u540C\u6837\uFF0C\u5728\u89C4\u52193-6\u91CC\uFF0C\u6211\u4EEC\u7EC4\u5408\u4E86\u5143\u7D20\u9009\u62E9\u5668", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a"), "\u548C\u4F2A\u7C7B\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7EC4\u5408\u66F4\u591A\u7684\u9009\u62E9\u5668\u4EE5\u5339\u914D\u66F4\u590D\u6742\u7684\u89C4\u5219\uFF0C\u4F8B\u5982\uFF1A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a.myclass:visited"), "\u8868\u793A\u9009\u62E9\u9875\u9762\u4E0A\u6240\u6709", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "class=\"myclass\""), "\u4E14\u72B6\u6001\u4E3A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "visited"), "\u7684a\u5143\u7D20\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5143\u7D20\u9009\u62E9\u5668\u3001\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u7C7B\u662F\u4E09\u79CD\u5E38\u7528\u7684CSS\u9009\u62E9\u5668\uFF0C\u6B64\u5916\uFF0CCSS\u8FD8\u6709\u8BB8\u591A\u5176\u5B83\u7C7B\u578B\u7684\u9009\u62E9\u5668\uFF0C\u800C\u7EC4\u5408\u9009\u62E9\u5668\u7684\u89C4\u5219\u4E5F\u53EF\u4EE5\u66F4\u52A0\u590D\u6742\u3002\u5728\u672C\u8BFE\u7A0B\u91CC\uFF0C\u4E0D\u6253\u7B97\u5168\u9762\u4ECB\u7ECD\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u5728\u540E\u7EED\u7684\u8BFE\u7A0B\u91CC\uFF0C\u968F\u7740\u5B66\u4E60\u548C\u5B9E\u8DF5\u7684\u6DF1\u5165\uFF0C\u6211\u4EEC\u4F1A\u9010\u6B65\u8BB2\u89E3CSS\u66F4\u6DF1\u5165\u7684\u5185\u5BB9\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5148\u5BF9CSS\u6709\u66F4\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u53EF\u4EE5\u9605\u8BFB", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference"
  }, "MDN CSS"), "\u4EE5\u83B7\u5F97\u66F4\u4E30\u5BCC\u7684\u77E5\u8BC6\u5185\u5BB9\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "层叠与优先级"
  }, "\u201C\u5C42\u53E0\u201D\u4E0E\u4F18\u5148\u7EA7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "CSS\u89C4\u5219\u6839\u636E\u9009\u62E9\u5668\u5339\u914D\u8303\u56F4\u6765", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u547D\u4E2D"), "\u5143\u7D20\uFF0C\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u5143\u7D20\u5F88\u53EF\u80FD\u88AB\u591A\u4E2ACSS\u89C4\u5219\u6240\u547D\u4E2D\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u8FD9\u4E9B\u547D\u4E2D\u7684\u89C4\u5219\u6D89\u53CA\u7684\u5C5E\u6027\u4E0D\u91CD\u590D\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4F1A\u88AB", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u5C42\u5C42\u53E0\u52A0"), "\u8BBE\u7F6E\u5230\u8BE5\u5143\u7D20\u4E0A\u3002\u5982\u679C\u8FD9\u4E9B\u547D\u4E2D\u7684\u89C4\u5219\u6D89\u53CA\u7684\u5C5E\u6027\u91CD\u590D\uFF0C\u90A3\u4E48\u5176\u4E2D\u4E00\u6761", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4F18\u5148\u7EA7"), "\u6700\u9AD8\u7684\u89C4\u5219\u6240\u6D89\u53CA\u7684\u5C5E\u6027\u5C06\u88AB\u8BBE\u7F6E\u5230\u8BE5\u5143\u7D20\u4E0A\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    alt: "xxx",
    src: "http://res.junyux.com/images/course1/css1.jpg"
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "CSS\u7684\u4F18\u5148\u7EA7\u662F\u7531\u5C5E\u6027\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u91CD\u8981\u6027"), "\u3001\u9009\u62E9\u5668\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4E13\u7528\u6027"), "\u548C\u89C4\u5219\u4E66\u5199\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u6B21\u5E8F"), "\u4F9D\u6B21\u51B3\u5B9A\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u4E0D\u6253\u7B97\u5168\u9762\u4ECB\u7ECD\uFF0C\u53EA\u5148\u5927\u81F4\u4E86\u89E3\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u58F0\u660E\uFF08\u7279\u6B8A\u58F0\u660E\u5728\u540E\u7EED\u8BFE\u7A0B\u4E2D\u4ECB\u7ECD\uFF09\u6211\u4EEC\u8BBE\u7F6E\u7684\u666E\u901ACSS\u5C5E\u6027\u7684\u91CD\u8981\u6027\u4E00\u822C\u6765\u8BF4\u662F\u76F8\u540C\u7684\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "\u9009\u62E9\u5668\u7684\u4E13\u7528\u6027\u4E2D\uFF0C\u7C7B\u9009\u62E9\u5668\u548C\u4F2A\u7C7B\u7684\u4E13\u7528\u6027\u76F8\u540C\uFF0C\u5B83\u4EEC\u9AD8\u4E8E\u5143\u7D20\u9009\u62E9\u5668\u7684\u4E13\u7528\u6027\u3002\u5728CSS\u89C4\u5219\u7684\u7EC4\u5408\u9009\u62E9\u5668\u4E2D\uFF0C\u9009\u62E9\u5668\u7684\u4E13\u7528\u6027\u8D8A\u9AD8\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF1B\u5F53\u9009\u62E9\u5668\u7684\u4E13\u7528\u6027\u4E00\u6837\u65F6\uFF0C\u9009\u62E9\u5668\u6570\u91CF\u8D8A\u591A\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u56E0\u6B64\u4E0A\u56FE\u4E2D\u7684\u4F8B\u5B50\uFF0C\u9009\u62E9\u5668\u4F18\u5148\u7EA7\u6392\u5E8F\u4ECE\u9AD8\u5230\u4F4E\u4E3A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "a.friends:link"), "\uFF081\u4E2A\u4F2A\u7C7B+1\u4E2A\u7C7B\u9009\u62E9\u5668+1\u4E2A\u5143\u7D20\u9009\u62E9\u5668\uFF09"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "a.friends"), " (0\u4E2A\u4F2A\u7C7B+1\u4E2A\u7C7B\u9009\u62E9\u5668+1\u4E2A\u5143\u7D20\u9009\u62E9\u5668)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "a"), " (0\u4E2A\u4F2A\u7C7B+0\u4E2A\u7C7B\u9009\u62E9\u5668+1\u4E2A\u5143\u7D20\u9009\u62E9\u5668)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5982\u679C\u9009\u62E9\u5668\u7684\u91CD\u8981\u6027\u548C\u4E13\u7528\u6027\u76F8\u540C\uFF0C\u4EE3\u7801\u4E2D\u540E\u51FA\u73B0\u7684\u89C4\u5219\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u56E0\u6B64\u5982\u679C\u4EE5\u4E0B\u4E24\u6761\u89C4\u5219\u5E94\u7528\u4E8E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a class=\"friends\">Link</a>"), "\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "a:link {\n  color: red;\n}\na.friends {\n  color: green;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7531\u4E8E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a:link"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a.friends"), "\u524D\u8005\u7531\u4E00\u4E2A\u5143\u7D20\u9009\u62E9\u5668\u548C\u4E00\u4E2A\u4F2A\u7C7B\u7EC4\u6210\uFF0C\u540E\u8005\u7531\u4E00\u4E2A\u5143\u7D20\u9009\u62E9\u5668\u548C\u4E00\u4E2A\u7C7B\u9009\u62E9\u5668\u7EC4\u6210\uFF0C\u5B83\u4EEC\u7684\u4E13\u7528\u6027\u6BD4\u8F83\u7ED3\u679C\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u7531\u4E8E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a.friends"), "\u5728\u4EE3\u7801\u4E2D\u51FA\u73B0\u7684\u4F4D\u7F6E\u665A\u4E8E", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a:link"), "\uFF0C\u56E0\u6B64\u6700\u7EC8\u89C4\u5219\u5E94\u7528\u540E\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<a class=\"friends\">Link</a>"), "\u7684\u6587\u5B57\u989C\u8272\u662F\u7EFF\u8272\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "CSS\u9009\u62E9\u5668\u4F18\u5148\u7EA7\u662FCSS\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5728\u540E\u7EED\u8BFE\u7A0B\u91CC\u6211\u4EEC\u8FD8\u4F1A\u901A\u8FC7\u5B9E\u6218\u6DF1\u5165\u5B66\u4E60\u3002\u5982\u679C\u4F60\u60F3\u8981\u5148\u5BF9\u5B8C\u6574\u89C4\u5219\u6709\u4E00\u4E2A\u6BD4\u8F83\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u53EF\u4EE5\u9605\u8BFB", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance"
  }, "MDN CSS\u76F8\u5173\u5185\u5BB9"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "小结"
  }, "\u5C0F\u7ED3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u4E00\u8BB2\u4E3B\u8981\u4ECB\u7ECD\u4E86\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u4EC0\u4E48\u662FCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "CSS\u7684\u89C4\u5219\u7684\u57FA\u672C\u4E66\u5199\u8BED\u6CD5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u53EF\u7EE7\u627F\u548C\u975E\u53EF\u7EE7\u627F\u7684\u5C5E\u6027"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "CSS\u89C4\u5219\u7684\u53E0\u52A0\u548C\u4F18\u5148\u7EA7")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0B\u4E00\u8BB2\uFF0C\u6211\u5C06\u4ECB\u7ECDCSS\u53E6\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5-\u76D2\u6A21\u578B\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "-小练习"
  }, "\uD83D\uDC49\uD83C\uDFFB \u5C0F\u7EC3\u4E60"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u56DE\u5230\u6211\u4EEC\u7684\u4F8B\u5B50\u9875\u9762\uFF0C\u56DE\u7B54\u51E0\u4E2A\u95EE\u9898\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>\u6211\u7684\u7B2C\u4E00\u4E2A\u7F51\u9875</title>\n    <style>\n    body {\n      background-color: black;\n      color: white;\n    }\n    p.first-para {\n      color: red;\n    }\n    a:link {\n      color: white;\n    }\n    a:hover {\n      color: green;\n    }\n    a:active {\n      color: orange;\n    }\n    a:visited {\n      color: yellow;\n    }\n    </style>\n  </head>\n  <body>\n    <h1>\u7A00\u571F\u6559\u7A0B</h1>\n    <img src=\"https://s1.ssl.qhres2.com/static/14a7d288e11f8022.svg\" alt=\"\u7A00\u571F\u6398\u91D1\">\n    <p class=\"first-para\">\u6B22\u8FCE\u6765\u5230\u7A00\u571F\u6559\u7A0B\uFF0C\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u4E3A\u4F60\u51C6\u5907\u4E86\u7531\u6D45\u5165\u6DF1\u7684<em>Web\u5F00\u53D1\u8BFE\u7A0B</em>\u3002</p>\n    <h2>\u7B2C3\u8BFE</h2>\n    <p>\u8981\u8FDB\u5165Web\u5F00\u53D1\u7684\u4E16\u754C\uFF0C\u8981\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u4E86\u89E3Web\u5F00\u53D1\u7684\u8BED\u8A00\u3002\u6211\u4EEC\u4ECE<a href=\"https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML\">HTML</a>\u5F00\u59CB\u5165\u624B\uFF0CHTML\u662F\u6D4F\u89C8\u5668\u80FD\u591F\u8BC6\u522B\u7684\u201C\u7B2C\u4E00\u8BED\u8A00\u201D\u3002</p>\n  </body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679C\u6211\u4EEC\u8981\u5C06\u4E24\u4E2Ap\u5143\u7D20\u7684\u6587\u5B57\u989C\u8272\u90FD\u8BBE\u7F6E\u4E3A\u7EA2\u8272\uFF0C\u5E94\u8BE5\u600E\u4E48\u4FEE\u6539\u4E0A\u9762\u7684CSS\u89C4\u5219\uFF1F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5982\u679C\u6211\u4EEC\u6DFB\u52A0\u4EE5\u4E0BCSS\u89C4\u5219\uFF1A")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-css"
  }, "a {\n  color: orange;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6D4F\u89C8\u5668\u4F1A\u5C06\u94FE\u63A5\u7684\u989C\u8272\u53D8\u4E3A\u6854\u8272\u5417\uFF1F\u5982\u679C\u80FD\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u5982\u679C\u4E0D\u80FD\uFF0C\u5E94\u8BE5\u600E\u4E48\u505A\u624D\u80FD\uFF1F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    "start": 3
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u6211\u4EEC\u901A\u8FC7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, ".first-para"), "\u7684class\u6765\u7ED9\u7B2C\u4E00\u4E2A\u6BB5\u843Dp\u5143\u7D20\u6307\u5B9A\u6837\u5F0F\uFF0C\u8FD9\u662F\u6700\u7B80\u5355\u76F4\u63A5\u7684\u65B9\u5F0F\uFF0C\u4E5F\u662F\u5E38\u7528\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u4F46\u662F\uFF0C\u5728CSS\u9009\u62E9\u5668\u4E2D\u6709\u4E00\u7C7B\u8868\u793A\u4F4D\u7F6E\u7684\u4F2A\u7C7B\u9009\u62E9\u5668\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5B83\u4EEC\uFF0C\u5728\u4E0D\u7ED9p\u5143\u7D20\u6DFB\u52A0class\u7684\u60C5\u51B5\u4E0B\u5BF9\u7B2C\u4E00\u4E2A\u6BB5\u843Dp\u5143\u7D20\u5E94\u7528\u6837\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u9605\u8BFB\u6765\u81EAMDN\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type"
  }, "\u53C2\u8003\u6587\u7AE0"), "\uFF0C\u5B66\u4E60\u5982\u4F55\u4F7F\u7528\u4F2A\u7C7B\u9009\u62E9\u5668\uFF0C\u5728\u4E0D\u4F7F\u7528class\u7684\u60C5\u51B5\u4E0B\u5BF9\u7B2C\u4E00\u4E2A\u6BB5\u843Dp\u5143\u7D20\u6307\u5B9A\u6837\u5F0F\u3002CSS\u7ED3\u6784\u4F2A\u7C7B\u9009\u62E9\u5668\u670912\u79CD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9605\u8BFB\u8FD9\u7BC7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "li",
    "href": "https://juejin.cn/post/7001869576069873695"
  }, "\u6398\u91D1\u793E\u533A\u7684\u6587\u7AE0"), "\u6765\u7CFB\u7EDF\u5730\u4E86\u89E3\u5B83\u4EEC\u7684\u7528\u6CD5\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_pagination__WEBPACK_IMPORTED_MODULE_6__["Pagination"], {
    previous: {
      name: '上一节',
      src: 'html_and_blog'
    },
    next: {
      name: '下一节',
      src: 'element_box'
    },
    mdxType: "Pagination"
  }));
}

if (typeof MDXContent !== 'undefined' && MDXContent && MDXContent === Object(MDXContent) && Object.isExtensible(MDXContent) && !Object.prototype.hasOwnProperty.call(MDXContent, '__filemeta')) {
  Object.defineProperty(MDXContent, '__filemeta', {
    configurable: true,
    value: {
      name: "MDXContent",
      filename: "src/docs/webdev/geting_started/\u521D\u8BC6CSS.mdx"
    }
  });
}

;
MDXContent.isMDXComponent = true;

/***/ })

}]);
//# sourceMappingURL=component---src-docs-webdev-geting-started-初识css-mdx-5d96db71cba9439326aa.js.map