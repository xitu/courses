(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-docs-javascript-runtime-浏览器中的-java-script-mdx"],{

/***/ "8TD5":
/*!**********************************************************!*\
  !*** ../src/docs/javascript/runtime/浏览器中的JavaScript.mdx ***!
  \**********************************************************/
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
      filename: "src/docs/javascript/runtime/\u6D4F\u89C8\u5668\u4E2D\u7684JavaScript.mdx"
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    "className": "hint error"
  }, "This document is a Work in Progress."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "10\u5E74\u524D\uFF0CJavaScript\u4E3B\u8981\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E0A\uFF0C\u5728\u6D4F\u89C8\u5668\u4E4B\u5916\u8FD8\u5F88\u5C11\u89C1\u5230\u3002\u800C\u4ECA\u5929\uFF0CJavaScript\u4E0D\u4EC5\u8FD0\u884C\u4E8E\u6D4F\u89C8\u5668\uFF0C\u7531\u4E8ENode.js\u7684\u6D41\u884C\uFF0C\u8FD8\u53EF\u4EE5\u8FD0\u884C\u4E8E\u8BB8\u591ALinux-based\u7684\u7CFB\u7EDF\u4E2D\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u867D\u7136JavaScript\u8FD0\u884C\u73AF\u5883\u5DF2\u7ECF\u5927\u5927\u8D85\u8D8A\u4E86\u6D4F\u89C8\u5668\u8303\u7574\uFF0C\u4F46\u662F\uFF0C\u6D4F\u89C8\u5668\u4ECD\u7136\u662FJavaScript\u6700\u91CD\u8981\u7684\u5BBF\u4E3B\u548C\u8FD0\u884C\u73AF\u5883\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u770B\u4E00\u770B\u6D4F\u89C8\u5668\u4E2D\u7684JavaScript\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "10\u5E74\u524D\uFF0CIE6\u3001IE7\u6D4F\u89C8\u5668\u8FD8\u5360\u6709\u8F83\u5927\u7684\u5E02\u573A\u4EFD\u989D\uFF0C\u5F88\u591A\u65B0\u7684\u8BED\u8A00\u7279\u6027\u548C\u5148\u8FDB\u7684API\u51FA\u4E8E\u517C\u5BB9\u6027\u8003\u8651\uFF0C\u5F00\u53D1\u8005\u65E0\u6CD5\u4F7F\u7528\u3002\u800C\u4ECA\u5929\uFF0CIE\u6D4F\u89C8\u5668\u5DF2\u7ECF\u4E0D\u662F\u5E02\u573A\u7684\u4E3B\u6D41\uFF0C\u622A\u81F3\u672C\u4E66\u7F16\u5199\u65F6\uFF0CChrome\u6D4F\u89C8\u5668\u7684\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u662F68\uFF0CFireFox\u7684\u7248\u672C\u662F61\uFF0C\u5FAE\u8F6FEdge\u7684\u7248\u672C\u662F42\uFF0CSafari\u7684\u7248\u672C\u662F11.0\uFF0C\u8FD9\u4E9B\u6D4F\u89C8\u5668\u90FD\u80FD\u53EF\u9760\u5730\u652F\u6301ES5\u548CES6+\u7684\u7EDD\u5927\u591A\u6570\u7279\u6027\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\u867D\u7136\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u53EF\u4EE5\u652F\u6301\u6700\u65B0JavaScript\u7684\u5927\u90E8\u5206\u7279\u6027\uFF0C\u4F46\u662F\u5B83\u4EEC\u529F\u80FD\u4E0A\u548C\u4E00\u4E9B\u7EC6\u8282\u4E0A\u8FD8\u662F\u6709\u4E00\u4E9B\u5DEE\u5F02\u3002\u4E3A\u4E86\u5B66\u4E60\u65B9\u4FBF\uFF0C\u5EFA\u8BAE\u8BFB\u8005\u4E0B\u8F7D\u5B89\u88C5\u548C\u4F7F\u7528\u6700\u65B0\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://www.google.com/chrome/"
  }, "Chrome\u6D4F\u89C8\u5668"), "\u3002\u672C\u4E66\u540E\u7EED\u6D4F\u89C8\u5668\u6709\u5173\u7684\u5185\u5BB9\uFF0C\u90FD\u9009\u62E9Chrome 68\u4EE5\u4E0A\u6D4F\u89C8\u5668\u4F5C\u4E3A\u57FA\u51C6\u73AF\u5883\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "121-在网页中嵌入js"
  }, "1.2.1 \u5728\u7F51\u9875\u4E2D\u5D4C\u5165JS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5728\u6D4F\u89C8\u5668\u7F51\u9875\u4E2D\u52A0\u8F7D\u548C\u8FD0\u884CJavaScript\u975E\u5E38\u7B80\u5355\uFF0C\u751A\u81F3\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\u4EFB\u4F55\u73AF\u5883\uFF0C\u76F4\u63A5\u7528\u4EFB\u610F\u6587\u672C\u7F16\u8F91\u5668\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u7F51\u9875\u5373\u53EF\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u4F8B 1.2.1")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript\u738B\u8005\u5F52\u6765</title>\n</head>\n<body>\n  <h1>\u6211\u7684\u7B2C\u4E00\u4E2A JavaScript \u7A0B\u5E8F!</h1>\n  <script type=\"text/javascript\">\n    console.log('Hello World!');\n  </script>\n</body>\n</html>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u4FDD\u5B58\u6210index.html\uFF0C\u7528\u4F7F\u7528Chrome\u6D4F\u89C8\u5668\u6253\u5F00\uFF0C\u5E76\u5F00\u542F\u5F00\u53D1\u8005\u63A7\u5236\u53F0\uFF0C\u63A7\u5236\u53F0\u5F00\u542F\u7684\u5FEB\u6377\u952E\u4E3Awindows\u7CFB\u7EDF\u7684F12\u6216ctrl+shift+I\uFF0CMac\u7CFB\u7EDF\u7684Opt+Cmd+I\u3002\u5982\u679C\u4E00\u5207\u6B63\u5E38\uFF0C\u4F60\u4F1A\u770B\u5230\u4E0B\u9762\u7684\u754C\u9762\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    alt: "image",
    src: __webpack_require__(/*! ./public/example1.2.1.jpg */ "sjQu")
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "console.log"), "\u65B9\u6CD5\u5728\u53F3\u8FB9\u7684\u7684\u5F00\u53D1\u8005\u63A7\u5236\u53F0\u4E0A\u663E\u793A\u4E86\u5B57\u7B26\u4E32", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Hello World!"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "-动手练习"
  }, "\uD83D\uDC49\uD83C\uDFFB \u52A8\u624B\u7EC3\u4E60"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_JCode__WEBPACK_IMPORTED_MODULE_5__["JCode"], {
    codeId: "7101205186751758367",
    mdxType: "JCode"
  }));
}

if (typeof MDXContent !== 'undefined' && MDXContent && MDXContent === Object(MDXContent) && Object.isExtensible(MDXContent) && !Object.prototype.hasOwnProperty.call(MDXContent, '__filemeta')) {
  Object.defineProperty(MDXContent, '__filemeta', {
    configurable: true,
    value: {
      name: "MDXContent",
      filename: "src/docs/javascript/runtime/\u6D4F\u89C8\u5668\u4E2D\u7684JavaScript.mdx"
    }
  });
}

;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "sjQu":
/*!**************************************************************!*\
  !*** ../src/docs/javascript/runtime/public/example1.2.1.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/example1.2.1-c176996b1df0e4b221f390c79dec45ac.jpg";

/***/ })

}]);