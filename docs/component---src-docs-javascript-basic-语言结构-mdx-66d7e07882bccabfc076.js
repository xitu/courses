(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component---src-docs-javascript-basic-语言结构-mdx"],{

/***/ "TmfC":
/*!*********************************************!*\
  !*** ../src/docs/javascript/basic/语言结构.mdx ***!
  \*********************************************/
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
      filename: "src/docs/javascript/basic/\u8BED\u8A00\u7ED3\u6784.mdx"
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
    "id": "语言结构"
  }, "\u8BED\u8A00\u7ED3\u6784"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "字符集"
  }, "\u5B57\u7B26\u96C6"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7684\u4EE3\u7801\u652F\u6301", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://www.baike.com/wiki/Unicode%E7%A0%81/5048130?view_id=r4i0gymwee800"
  }, "Unicode"), "\u5B57\u7B26\u96C6\uFF08HTML\u548CCSS\u4EE3\u7801\u4E5F\u662F\uFF09\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528\u51E0\u4E4E\u6240\u6709\u7684\u62C9\u4E01\u6587\u3001\u4E9A\u6D32\u7B26\u53F7\u6587\u5B57\u548C\u6C49\u5B57\u6765\u7F16\u5199\u7A0B\u5E8F\u3002\u5F00\u53D1\u8005\u5E38\u7528\u7684Visual Studio Code\u7F16\u8F91\u5668\u5C31\u662F\u4E00\u6B3E\u652F\u6301Unicode\u5B57\u7B26\u96C6UTF-8\u7F16\u7801\u7684\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u80FD\u591F\u5F88\u597D\u5730\u652F\u6301\u4F7F\u7528Unicode\u7F16\u5199JavaScript\u4EE3\u7801\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const CARD_POINTS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];\n\nconst CARD_SUITS = ['\u2665\uFE0F', '\u2660\uFE0F', '\u2663\uFE0F', '\u2666\uFE0F'];\n\nfunction getRandomItem(list) {\n  return list[Math.floor(Math.random() * list.length)];\n} \n\nfunction getRandomCard() {\n  const point = getRandomItem(CARD_POINTS);\n  const suit = getRandomItem(CARD_SUITS);\n  return [point, suit];\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_JCode__WEBPACK_IMPORTED_MODULE_5__["JCode"], {
    codeId: "7103780443895365668",
    mdxType: "JCode"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Unicode\u662F\u8BA1\u7B97\u673A\u79D1\u5B66\u9886\u57DF\u5173\u4E8E\u6587\u672C\u8868\u793A\u7684\u4E00\u9879\u6807\u51C6\uFF0C\u7528\u4E8E\u5904\u7406\u4E16\u754C\u4E0A\u6240\u6709\u6587\u5B57\u548C\u7B26\u53F7\u3002Unicode\u5305\u62EC\u5B57\u7B26\u96C6\u548C\u7F16\u7801\u65B9\u6848\u3002Unicode\u5B57\u7B26\u96C6\u51E0\u4E4E\u56CA\u62EC\u6240\u6709\u7684\u62C9\u4E01\u6587\u3001\u6C49\u5B57\u548C\u5176\u4ED6\u5E38\u7528\u6587\u5B57\u7B26\u53F7\u4EE5\u53CA\u989C\u6587\u5B57\uFF08emoji\uFF09\u3002UTF-8\u662F\u4E00\u79CD\u5E38\u7528\u7684Unicode\u7F16\u7801\u65B9\u6848\uFF0C\u4EE5\u5C11\u81F32\u4E2A\u5B57\u8282\uFF0C\u591A\u81F36\u4E2A\u5B57\u8282\u6765\u8868\u793AUnicode\u5B57\u7B26\u3002UTF-8\u662F\u73B0\u5728\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u9ED8\u8BA4\u652F\u6301\u7684\u7F16\u7801\u65B9\u6848\uFF0C\u4E5F\u662FHTTP\u4F20\u8F93\u6587\u672C\u5185\u5BB9\u7684\u901A\u7528\u7F16\u7801\u3002\u6211\u4EEC\u5728HTML\u6587\u4EF6\u4E2D\u4F7F\u7528meta\u6807\u7B7E\u5B9A\u4E49", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<meta charset=\"UTF-8\">"), "\u5C31\u662F\u544A\u8BC9\u6D4F\u89C8\u5668\u7F51\u9875\u7684\u5185\u5BB9\u662F\u4F7F\u7528UTF-8\u7F16\u7801\u7684\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u82F1\u6587\u5B57\u7B26\u548C\u56DB\u4E2Aemoji\u5B57\u7B26", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'\u2665\uFE0F', '\u2660\uFE0F', '\u2663\uFE0F', '\u2666\uFE0F'"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u867D\u7136JavaScript\u652F\u6301unicode\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6765\u547D\u540D\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u4F46\u662F\u6211\u4EEC\u901A\u5E38\u4E0D\u63A8\u8350\u8FD9\u6837\u505A\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let \u6570\u636E = [0, 1, 2, 3, 4, 5];\nfunction \u6C42\u548C(\u6570\u636E){\n  return \u6570\u636E.reduce((\u6C47\u603B,\u6570) => \u6C47\u603B += \u6570);\n}\nconsole.log(\u6C42\u548C(\u6570\u636E)); // 15\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\u662F\u53EF\u4EE5\u8FD0\u884C\u7684\uFF0C\u4F46\u662F\u9664\u975E\u6709\u7279\u6B8A\u76EE\u7684\uFF0C\u5426\u5219\u6211\u4EEC\u5F88\u5C11\u8FD9\u4E48\u505A\u3002\u901A\u5E38\u8FD8\u662F\u5E94\u8BE5\u4F7F\u7528\u82F1\u6587\u6765\u7F16\u5199\u4EE3\u7801\uFF08\u5982\uFF1A\u4EE5\u4E0B\u4EE3\u7801\u6BB5\uFF09\uFF0C\u53EA\u6709\u5728\u5B57\u7B26\u4E32\u4E2D\u624D\u4F7F\u7528\u5176\u4ED6\u975E\u82F1\u6587\u5B57\u7B26\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "let data = [0, 1, 2, 3, 4, 5];\n\nfunction sum(data) {\n  return data.reduce((sum, num) => sum += num);\n}\nconsole.log(sum(data)); // 15\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "unicode字符编码"
  }, "Unicode\u5B57\u7B26\u7F16\u7801"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8003\u8651\u4E00\u4E9B\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u80FD\u652F\u6301Unicode\u5B57\u7B26\u96C6\u548Cutf8\u7F16\u7801\uFF0CJavaScript\u63D0\u4F9B\u4E86\u9488\u5BF9Unicode\u7684\u8F6C\u4E49\u7B26\uFF0C\u53EF\u4EE5\u5C06\u4EFB\u610FUnicode\u5B57\u7B26\u8F6C\u6362\u6210'\\u'\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u4E0A\u8FD9\u4E2A\u5B57\u7B26\u76844\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u5B57\u7F16\u7801\u7684\u5F62\u5F0F\u3002\u8FD9\u6837\u7684\u5199\u6CD5\u5BF9\u4E8EJavaScript\u5F15\u64CE\u6765\u8BF4\u4E0E\u76F4\u63A5\u5199Unicode\u5B57\u7B26\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u53EF\u4EE5\u4E92\u76F8\u66FF\u6362\u3002\u8FD9\u53EF\u4EE5\u8BA9JavaScript\u4EE3\u7801\u548C\u5B83\u5904\u7406\u7684\u6570\u636E\u80FD\u591F\u88AB\u4EC5\u652F\u6301ASCII\u5B57\u7B26\u96C6\u7684\u7CFB\u7EDF\u4F20\u8F93\u548C\u5904\u7406\uFF0C\u4E0D\u8FC7\u7531\u4E8E\u8981\u5C06\u4E00\u4E2AUnicode\u5B57\u7B26\u8F6C\u6362\u62106\u4E2A\u5B57\u8282\uFF08", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'\\u' + 4\u4E2A16\u8FDB\u5236\u5B57\u7B26\uFF0C\u6240\u4EE5\u662F6\u4E2A\u5B57\u8282"), "\uFF09\uFF0C\u56E0\u6B64\u8981\u6D88\u8017\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "// \\u7a00\\u571f\\u6398\\u91d1 \u5206\u522B\u8868\u793A\u201C\u7A00\u571F\u6398\u91D1\u201D\u8FD9\u56DB\u4E2A\u4E2D\u6587\n// \u56E0\u6B64\u4E0B\u9762\u7684console.log\u5728\u63A7\u5236\u53F0\u4E0A\u8F93\u51FA\u5B57\u7B26\u4E32\u201C\u7A00\u571F\u6398\u91D1\u201D\nconsole.log('\\u7a00\\u571f\\u6398\\u91d1');\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0D\u4EC5\u4EC5\u662F\u5B57\u7B26\u4E32\uFF0CJavaScript\u7684\u7B26\u53F7\u4E5F\u53EF\u4EE5\u7528Unicode\u7F16\u7801\u4F5C\u53D8\u91CF\u540D\uFF08\u4F46\u540C\u6837\u4E0D\u63A8\u8350\u4F7F\u7528\uD83D\uDC36\uFF09\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "// \\u6211\u4EE3\u8868'\u6211'\u8FD9\u4E2A\u4E2D\u6587\u6C49\u5B57\uFF0C\u6240\u4EE5\u5728JavaScript\u4EE3\u7801\u6587\u4EF6\u91CC\uFF0C\\u6211\u548C'\u6211'\u53EF\u4EE5\u4E92\u76F8\u66FF\u6362\nconst \\u6211 = '\u5F20\u4E09';\n\nconsole.log(\u6211); //\u5F20\u4E09\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "符号tokens"
  }, "\u7B26\u53F7\uFF08Tokens\uFF09"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7A0B\u5E8F\u6587\u672C\u7531\u4E00\u7CFB\u5217\u7B26\u53F7\uFF08tokens\uFF09\u3001\u884C\u7ED3\u675F\u7B26\uFF08line terminators\uFF09\u3001\u6CE8\u91CA\uFF08comments\uFF09\u548C\u7A7A\u767D\u7B26\uFF08white space\uFF09\u6784\u6210\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7B26\u53F7\u662F\u6784\u6210JavaScript\u57FA\u672C\u8BCD\u6C47\uFF08lexical\uFF09\u7684\u5143\u7D20\uFF0CJavaScript\u7684\u7B26\u53F7\u5305\u542B\u4EE5\u4E0B\u51E0\u7C7B\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u6807\u8BC6\u7B26\uFF08IdentifierName\uFF09\uFF1A\u7531Unicode\u7EC4\u6210\u7684\u7B26\u53F7\uFF0C\u5B83\u53EF\u4EE5\u662F\u53D8\u91CF\u540D\u3001\u51FD\u6570\u540D\u4EE5\u53CA\u4FDD\u7559\u5B57\uFF08Reserved Words\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u5B57\u9762\u91CF\uFF08Literals\uFF09\uFF1A\u76F4\u63A5\u8868\u793A\u7A0B\u5E8F\u4E2D\u7684\u67D0\u4E9B\u6570\u636E\u7684\u7B26\u53F7\uFF0C\u5305\u62ECNull\u5B57\u9762\u91CF\u3001Boolean\u5B57\u9762\u91CF\u3001Number\u5B57\u9762\u91CF\u3001String\u5B57\u9762\u91CF\u4EE5\u53CA\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08RegularExpression\uFF09\u5B57\u9762\u91CF\u7B49\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u6807\u70B9\u7B26\uFF08Punctuators\uFF09\uFF1AJavaScript\u8868\u8FBE\u5F0F\u4E2D\u8FDE\u63A5\u6807\u8BC6\u540D\u4E0E\u5B57\u9762\u91CF\u7684\u8FD0\u7B97\u7B26\u4EE5\u53CA\u8868\u793A\u7ED3\u6784\u7684\u82B1\u62EC\u53F7\u3001\u5C0F\u62EC\u53F7\u3001\u4E2D\u62EC\u53F7\u3001\u70B9\u3001\u5206\u53F7\u3001\u9017\u53F7\u3001\u5192\u53F7\u7B49\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "\u6A21\u677F(Templates)\uFF1A\u6A21\u677F\u5B57\u9762\u91CF\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5176\u4E2D\u6A21\u677F\u6BD4\u8F83\u590D\u6742\uFF0C\u540E\u7EED\u4F1A\u4E13\u95E8\u4ECB\u7ECD\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u5148\u770B\u4E00\u4E0B\u524D\u9762\u51E0\u7C7B\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function greeting(message = 'world') {\n  return 'Hello ' + message;\n}\nconst message = greeting('everyone');\nconsole.log(message);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "function, greeting, message, return"), " \u7B49\u90FD\u662F\u6807\u8BC6\u540D\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "(, ), {, }, +, = "), " \u7B49\u90FD\u662F\u6807\u70B9\u7B26\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'Hello ', 'world', 'everyone'"), " \u7B49\u90FD\u662F\u5B57\u9762\u91CF\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "标识符"
  }, "\u6807\u8BC6\u7B26"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6807\u8BC6\u7B26\u53C8\u5206\u4E3A\u540D\u5B57\uFF08Names\uFF09\u548C\u4FDD\u7559\u5B57\uFF08Reserved Words\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u89C4\u8303\u7684\u540D\u5B57\u662F\u4EE5", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u82F1\u6587\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "_"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "$"), "\u7B26\u53F7\u3001Unicode\u7F16\u7801\u53CD\u659C\u6760", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "\\"), "\u6216\u4E2D\u6587\u7B49\u5408\u6CD5\u7684Unicode\u5B57\u7B26\u7EC4\u6210\u7684\u5B57\u7B26\u4E32"), "\uFF0C\u6CE8\u610F\u540D\u5B57\u4E0D\u80FD\u4EE5\u963F\u62C9\u4F2F\u6570\u5B57\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "#"), "\u548C\u6807\u70B9\u7B26\u53F7\u5F00\u5934\uFF0C\u540D\u5B57\u4E2D\u4E5F\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u3001\u6362\u884C\u548C\u6807\u70B9\u7B26\u53F7\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4FDD\u7559\u5B57\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6807\u8BC6\u7B26\uFF0C\u672C\u8EAB\u5305\u542B\u7279\u6B8A\u542B\u4E49\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u540D\u5B57\u4F7F\u7528\u3002\u5982\u4E0A\u9762\u4F8B\u5B50\u4E2D\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "function"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "return"), "\u5C31\u662F\u4FDD\u7559\u5B57\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4FDD\u7559\u5B57\u53C8\u5206\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F\u5173\u952E\u5B57\uFF08keywords\uFF09\uFF0C\u5305\u542BJavaScript\u8BCD\u6CD5\u542B\u4E49\uFF0C\u4F8B\u5982", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "function"), "\u8868\u793A\u51FD\u6570\u58F0\u660E\uFF0C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "return"), "\u8868\u793A\u5C06\u5176\u540E\u7684\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u503C\u8FD4\u56DE\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7684\u5173\u952E\u5B57\u5305\u542B\u4EE5\u4E0B\u8FD9\u4E9B\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "await break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u53E6\u4E00\u79CD\u4FDD\u7559\u5B57\u53EB\u5C06\u6765\u4FDD\u7559\u5B57\uFF08Future Reserved Words\uFF09\uFF0C\u662F\u5F53\u524D\u4E0D\u4F5C\u4E3AJavaScript\u5173\u952E\u5B57\u4F46\u7559\u7ED9\u5C06\u6765\u4F7F\u7528\u7684\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5C06\u6765\u4FDD\u7559\u5B57\u5305\u62EC ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "enum")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4EE5\u53CA\u5728", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    parentName: "p",
    "href": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode"
  }, "\u4E25\u683C\u6A21\u5F0F\uFF08strict mode\uFF09"), "\u4E0B\u7684"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "implements\tpackage\tprotected\tinterface\tprivate\tpublic static")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "字面量"
  }, "\u5B57\u9762\u91CF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5B57\u9762\u91CF\u7528\u4E8E\u76F4\u63A5\u8868\u793A\u67D0\u4E9B\u6570\u636E\uFF0C\u4F8B\u5982\u4F8B\u5B50\u4E2D\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'world', 'Hello '"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'everyone"), "\u90FD\u662FString\u5B57\u9762\u91CF\uFF0C\u76F4\u63A5\u8868\u793A\u5B57\u7B26\u4E32", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "world, Hello, everyone"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5173\u4E8E\u5B57\u9762\u91CF\uFF0C\u5728\u4E0B\u4E00\u8282\u8BFE\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E2D\u4F1A\u6709\u8FDB\u4E00\u6B65\u8BE6\u7EC6\u4ECB\u7ECD\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u533A\u5206\u5927\u5C0F\u5199\u5B57\u6BCD\uFF0C\u6240\u4EE5\u4E0D\u7BA1\u5728\u53D8\u91CF\u547D\u540D\u3001\u5173\u952E\u5B57\u548C\u5B57\u7B26\u4E32\u6BD4\u8F83\u65F6\uFF0C\u90FD\u4F1A\u4E25\u683C\u533A\u5206\u5927\u5C0F\u5199\u5B57\u6BCD\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "if(a > 0) { // \u6B63\u786E\n  ...\n}\n\nIF(a <= 0) { // \u9519\u8BEF\uFF0C\u5173\u952E\u5B57\u662Fif\u4E0D\u662FIF\n\n}\n\nlet a = \"hello world\",\n    b = \"Hello World\";\n\nconsole.log(a === b); // false\uFF0C\u4E0D\u76F8\u7B49\uFF0C\u56E0\u4E3A\u5927\u5C0F\u5199\u4E0D\u540C\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "标点符"
  }, "\u6807\u70B9\u7B26"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6807\u70B9\u7B26\u5305\u62EC", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8FD0\u7B97\u7B26"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7ED3\u6784\u7B26\u53F7"), "\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD0\u7B97\u7B26\u548C\u6807\u8BC6\u7B26\u3001\u5B57\u9762\u91CF\u4E00\u8D77\u7EC4\u6210", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8868\u8FBE\u5F0F"), "\uFF0C\u5171\u540C\u5B8C\u6210\u6570\u636E\u7684\u8FD0\u7B97\u3002\u5728\u7B2C5\u8282\u4ECB\u7ECD\u8868\u8FBE\u5F0F\u8BED\u53E5\u65F6\uFF0C\u4F1A\u6709\u8FD0\u7B97\u7B26\u7684\u5927\u81F4\u4ECB\u7ECD\u3002JavaScript\u7684\u8FD0\u7B97\u7B26\u975E\u5E38\u4E30\u5BCC\uFF0C\u5728\u540E\u7EED\u7684\u8BFE\u7A0B\u4E2D\uFF0C\u8FD8\u4F1A\u6709\u66F4\u591A\u9010\u6B65\u6DF1\u5165\u7684\u4ECB\u7ECD\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7ED3\u6784\u7B26\u53F7\u6307\u6784\u6210\u8BED\u53E5\u7ED3\u5C3E\u7684\u5206\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ";"), "\u548C\u6784\u6210\u8BED\u53E5\u5757\u7684\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{, }"), "\uFF0C\u5728\u8FD9\u91CC\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E0B", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BED\u53E5"), "\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BED\u53E5\u5757"), "\u7684\u6982\u5FF5\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "语句和语句块"
  }, "\u8BED\u53E5\u548C\u8BED\u53E5\u5757"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8BED\u53E5\uFF08Statement\uFF09\u662FJavaScript\u7684", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u8BED\u6CD5"), "\u57FA\u672C\u5355\u4F4D\uFF0C\u4E00\u4E2A\u8BED\u53E5\u7531\u4E00\u4E2A\u6216\u591A\u4E2AToken\u6784\u6210\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u8BED\u53E5\u4EE5\u5206\u53F7\u7ED3\u5C3E\uFF0C\u5206\u53F7\u4EE3\u8868\u8BED\u53E5\u7684\u7EC8\u6B62\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u8BED\u53E5\u53EF\u4EE5\u7EC4\u5408\u6784\u6210\u8BED\u53E5\u5757\uFF08Block\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function sum(n) {\n  let ret = 0;\n  let i = 1;\n  while(i <= n) {\n    ret += i;\n    i++;\n  }\n  return ret;\n}\nconsole.log(sum(10));\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\u4EE3\u7801\uFF0C\u5305\u62EC\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u3001\u53D8\u91CF\u58F0\u660E\u548C\u521D\u59CB\u5316\u8BED\u53E5\u3001while\u5FAA\u73AF\u8BED\u53E5\u3001\u8868\u8FBE\u5F0F\u8BED\u53E5\uFF08\u5728\u5FAA\u73AF\u4F53\u8BED\u53E5\u5757\u5185\uFF09\u3001return\u8BED\u53E5\u3001\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u7B49\u8BED\u53E5\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u5176\u4E2D\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u548Cwhile\u5FAA\u73AF\u8BED\u53E5\u4E2D\u5305\u542B\u6709\u8BED\u53E5\u5757\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8BED\u53E5\u548C\u8BED\u53E5\u5757\u662F\u5D4C\u5957\u7684\uFF0C\u4E00\u4E9B\u8BED\u53E5\u4E2D\u53EF\u4EE5\u5305\u542B\u8BED\u53E5\u5757\uFF0C\u8BED\u53E5\u5757\u4E2D\u53C8\u53EF\u4EE5\u5305\u542B\u4E00\u6761\u6216\u591A\u6761\u8BED\u53E5\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre"
  }, "\u51FD\u6570\u58F0\u660E \"function sum(n) {...}\"\n\u251C\u2500\u2500 \u53D8\u91CF\u58F0\u660E\u53CA\u521D\u59CB\u5316 \"let ret = 0\"\n\u251C\u2500\u2500 \u53D8\u91CF\u58F0\u660E\u53CA\u521D\u59CB\u5316 \"let i = 1\"\n\u251C\u2500\u2500 while\u5FAA\u73AF \"while(i < n) {...}\"\n\u2502\xA0  \u251C\u2500\u2500 \u8868\u8FBE\u5F0F \"ret += i\"\n\u2502\xA0  \u2514\u2500\u2500 \u8868\u8FBE\u5F0F \"i++\"\n\u2514\u2500\u2500 return \"return ret\"\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u8BED\u53E5\u4EE5\u5206\u53F7\u7ED3\u675F\uFF0C\u8BED\u53E5\u5757\u4EE5\u82B1\u62EC\u53F7", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{...}"), "\u6807\u8BB0\u8D77\u59CB\u548C\u7ED3\u675F\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\u5BF9\u4E8EJavaScript\u4E66\u5199\u8005\u6765\u8BF4\uFF0C\u8BED\u53E5\u7ED3\u675F\u5206\u53F7\u53EF\u4EE5\u5199\uFF0C\u4E5F\u53EF\u4EE5\u7701\u7565\u4E0D\u5199\u3002\u5982\u679C\u7701\u7565\u5206\u53F7\uFF0CJavaScript\u89E3\u91CA\u5668\u4F1A\u81EA\u5DF1\u5224\u65AD\u8BED\u53E5\u5E94\u8BE5\u5728\u54EA\u91CC\u7EC8\u6B62\u3002\u8FD9\u79CD\u673A\u5236\u88AB\u79F0\u4E3A\u201C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u81EA\u52A8\u63D2\u5165\u5206\u53F7\uFF08Automatic Semicolon Insertion\uFF09"), "\u201D\u673A\u5236\u3002")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    "className": "hint tip"
  }, "\u4E66\u5199\u5206\u53F7\u548C\u4E0D\u4E66\u5199\u5206\u53F7\u662FJavaScript\u4E24\u79CD\u4E0D\u540C\u7684\u4EE3\u7801\u4E66\u5199\u98CE\u683C\uFF0C\u5F00\u53D1\u8005\u4EEC\u5404\u6709\u504F\u597D\u3002\u4E00\u4E9B\u5F00\u6E90\u5E93\u91C7\u7528\u4E66\u5199\u5206\u53F7\u7684\u4E60\u60EF\uFF0C\u800C\u53E6\u4E00\u4E9B\u5219\u7701\u7565\u5206\u53F7\uFF0C\u8FD9\u91CC\u6CA1\u6709\u7EDD\u5BF9\u7684\u597D\u574F\u3002\u4E00\u822C\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u540C\u4E00\u4E2A\u9879\u76EE\u9700\u8981\u91C7\u7528\u4E00\u81F4\u7684\u4E66\u5199\u98CE\u683C\uFF0C\u8FD9\u6709\u5229\u4E8E\u9879\u76EE\u7684\u7EF4\u62A4\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "空白符"
  }, "\u7A7A\u767D\u7B26"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7A7A\u767D\u7B26\u662F\u6307\u5728JavaScript\u7684\u4E24\u4E2A\u7B26\u53F7\uFF08Token\uFF09\u4E4B\u95F4\u7684\u80FD\u591F\u63D2\u5165\u7684\u5B57\u7B26\u3002JavaScript\u7684\u7B26\u53F7\u4E0E\u7B26\u53F7\u4E4B\u95F4\u80FD\u591F\u63D2\u5165\u4E00\u4E2A\u6216\u591A\u4E2AASCII\u7A7A\u683C\u7B26\u3001TAB\u7B26\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "换行"
  }, "\u6362\u884C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u901A\u5E38\u7B26\u53F7\u4E0E\u7B26\u53F7\u4E4B\u95F4\u4E5F\u80FD\u63D2\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u6362\u884C\u7B26\uFF0C\u4F46\u4E0B\u9762\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0D\u5141\u8BB8\u6362\u884C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "return \u548C\u8FD4\u56DE\u503C\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "break/continue \u548Clabel\u540D\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u53D8\u91CF\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "++"), "\u3001", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "--"), "\u540E\u7F00\u8FD0\u7B97\u7B26\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "throw \u548C\u5F02\u5E38\u5BF9\u8C61\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u548C\u7BAD\u5934", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "=>"), "\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "yield \u548C\u8FED\u4EE3\u503C\u4E4B\u95F4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "async \u548C\u5F02\u6B65\u51FD\u6570\u58F0\u660E\u3001\u51FD\u6570\u8868\u8FBE\u5F0F\u3001\u65B9\u6CD5\u540D\u4E4B\u95F4")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u770B\u51E0\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = 10, b = 20, c = 30;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u58F0\u660Ea\u3001b\u3001c\u4E09\u4E2A\u53D8\u91CF\uFF0C\u5199\u6210\u4E00\u884C\u6BD4\u8F83\u957F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6362\u884C\u5199\uFF0C\u8FD9\u6837\u6BD4\u8F83\u6E05\u6670\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "const a = 10,\n  b = 20,\n  c = 30;\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6211\u4EEC\u5728\u5199\u591A\u6761\u8BED\u53E5\u6216\u8BED\u53E5\u5757\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u6362\u884C\uFF0C\u4F46\u662F\u6362\u884C\u4F1A\u4F7F\u5F97\u4EE3\u7801\u770B\u8D77\u6765\u6BD4\u8F83\u6E05\u6670\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function isPositiveNumber(n) { return n > 0 }\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E00\u822C\u6211\u4EEC\u4E60\u60EF\u5728\u8BED\u53E5\u5757\u5DE6\u62EC\u53F7\u540E\u8FB9\u6362\u884C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function isPositiveNumber(n) {\n  return n > 0;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u53E6\u4E00\u79CD\u7F16\u7A0B\u98CE\u683C\u662F\u5728\u8BED\u53E5\u5757\u7684\u5DE6\u82B1\u62EC\u53F7\u4E4B\u524D\u6362\u884C\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function isPositiveNumber(n) \n{\n  return n > 0;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u662F\u4E24\u79CD\u4E0D\u540C\u7684\u4EE3\u7801\u4E66\u5199\u98CE\u683C\uFF0C\u4F46\u6211\u4EEC\u63A8\u8350\u91C7\u7528\u7B2C\u4E00\u79CD\u3002\u5176\u4E2D\u7684\u4E00\u4E2A\u539F\u56E0\u662F\u7B2C\u4E00\u79CD\u5199\u6CD5\u6BD4\u8F83\u7D27\u51D1\uFF0C\u53E6\u4E00\u4E2A\u539F\u56E0\u662FJavaScript\u7684\u5DE6\u82B1\u62EC\u53F7\u9664\u4E86\u8868\u793A\u4EE3\u7801\u5757\u8D77\u59CB\u4E4B\u5916\uFF0C\u8FD8\u6709\u5176\u4ED6\u610F\u4E49\uFF0C\u6BD4\u5982\u8868\u793A\u4E00\u4E2A\u5BF9\u8C61\uFF08Object\uFF09\u4E5F\u53EF\u4EE5\u7528\u82B1\u62EC\u53F7\uFF0C\u90A3\u4E48\u5F53\u6211\u4EEC\u5728\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function pointAdd(p1, p2) {\n  return {\n    x: p1.x + p2.x,\n    y: p1.y + p2.y,\n  };\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7531\u4E8E\u6211\u4EEC\u4E4B\u524D\u8BF4\u8FC7return\u548C\u8FD4\u56DE\u503C\u4E4B\u95F4\u4E0D\u80FD\u6709\u6362\u884C\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u80FD\u5199\u6210\u4E0B\u9762\u8FD9\u6837\uFF1A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "function pointAdd(p1, p2)\n{\n  return \n  {\n    x: p1.x + p2.x,\n    y: p1.y + p2.y,\n  };\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E0A\u9762\u7684\u7528\u6CD5return\u548C", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{"), "\u4E4B\u95F4\u4E0D\u80FD\u6709\u6362\u884C\u3002\u5426\u5219\u51FD\u6570\u5C06\u4E0D\u4F1A\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u800C\u662F\u4F1A\u5728return\u4E4B\u540E\u81EA\u52A8\u63D2\u5165\u5206\u53F7(ASI\u673A\u5236\uFF09\uFF0C\u8FD4\u56DEundefined\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E3A\u4E86\u4FDD\u6301\u89C4\u5219\u7684\u4E00\u81F4\u6027\uFF0C\u663E\u7136\u7B2C\u4E00\u79CD\u7528\u6CD5\u66F4\u52A0\u7EDF\u4E00\uFF08\u7EDF\u4E00\u5728", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{"), "\u4E4B\u540E\u518D\u6362\u884C\uFF09\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    "id": "缩进"
  }, "\u7F29\u8FDB"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u6CE8\u610F\u5230\u6211\u4EEC\u5728\u524D\u9762\u6240\u6709\u4F8B\u5B50\u91CC\uFF0C\u5BF9\u4E8E\u540C\u4E00\u5C42\u7EA7\u7684\u5185\u5BB9\uFF0C\u5728\u4E00\u884C\u4E4B\u524D\u4FDD\u6301\u76F8\u540C\u7684\u7A7A\u683C\u6216Tab\u6570\u91CF\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u8FD9\u4E2A\u89C4\u5219\u53EB\u505A", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u7F29\u8FDB"), "\uFF0C\u662F\u4E3A\u4E86\u589E\u52A0\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u8BA9\u4EE3\u7801\u4FBF\u4E8E\u88AB\u4EBA\u9605\u8BFB\u548C\u7406\u89E3\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u7F29\u8FDB\u4E00\u822C\u7528Tab\u6216\u7A7A\u683C\uFF08\u5982\u679C\u7528\u7A7A\u683C\u901A\u5E38\u662F2\u4E2A\u62164\u4E2A\u7A7A\u683C\u8868\u793A\u4E00\u7EA7\u7F29\u8FDB\uFF09\uFF0C\u4E0D\u540C\u9879\u76EE\u6216\u6709\u4E0D\u540C\uFF0C\u4E5F\u662F\u5C5E\u4E8E\u4E66\u5199\u98CE\u683C\u5DEE\u5F02\uFF0C\u4F46\u662F\u540C\u4E00\u4E2A\u9879\u76EE\u4E2D\u4F7F\u7528\u7A7A\u683C\u6216Tab\u4F5C\u7F29\u8FDB\u9700\u8981\u7EDF\u4E00\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    "id": "注释"
  }, "\u6CE8\u91CA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript\u91C7\u7528\u4E0EC\u548CJava\u8BED\u8A00\u4E00\u81F4\u7684\u6CE8\u91CA\u683C\u5F0F\uFF0C\u5206\u522B\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "//"), "\u8868\u793A\u5355\u884C\u6CE8\u91CA\uFF0C\u7528", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/*...*/"), "\u8868\u793A\u591A\u884C\u6CE8\u91CA\u3002"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    parentName: "pre",
    "className": "language-js"
  }, "/*\n  \u6211\u662F\n  \u591A\u884C\u6CE8\u91CA\n */\nconst foo = 'bar'; // \u6211\u662F\u5355\u884C\u6CE8\u91CA\nconsole.log(foo);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u4E66\u5199\u5FC5\u8981\u7684\u6CE8\u91CA\u662F\u8BA9\u4EE3\u7801\u5BB9\u6613\u88AB\u4EBA\u7406\u89E3\u7684\u597D\u4E60\u60EF\u3002\u5EFA\u8BAE\u5728\u9879\u76EE\u4E2D\uFF0C\u4EFB\u4F55\u4EE3\u7801\u6E90\u6587\u4EF6\u90FD\u5E94\u5F53\u5C3D\u91CF\u4E66\u5199\u5FC5\u8981\u7684\u6CE8\u91CA\u3002\u5728\u4EE3\u7801\u8FED\u4EE3\u5347\u7EA7\u65F6\uFF0C\u6CE8\u91CA\u5E94\u5F53\u53CA\u65F6\u66F4\u65B0\uFF0C\u5E76\u4E14\u4E0E\u6587\u6863\u5BF9\u5E94\uFF0C\u5185\u5BB9\u51C6\u786E\u7B80\u6D01\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u4ED6\u4EBA\u7406\u89E3\uFF0C\u80FD\u591F\u964D\u4F4E\u540E\u7EED\u7EF4\u62A4\u7684\u6210\u672C\u3002"));
}

if (typeof MDXContent !== 'undefined' && MDXContent && MDXContent === Object(MDXContent) && Object.isExtensible(MDXContent) && !Object.prototype.hasOwnProperty.call(MDXContent, '__filemeta')) {
  Object.defineProperty(MDXContent, '__filemeta', {
    configurable: true,
    value: {
      name: "MDXContent",
      filename: "src/docs/javascript/basic/\u8BED\u8A00\u7ED3\u6784.mdx"
    }
  });
}

;
MDXContent.isMDXComponent = true;

/***/ })

}]);