(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"./node_modules/refractor/lang/roboconf.js":function(module,exports,__webpack_require__){"use strict";function roboconf(Prism){Prism.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*)[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/}}module.exports=roboconf,roboconf.displayName="roboconf",roboconf.aliases=[]}}]);