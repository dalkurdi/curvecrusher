(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1522:function(module,exports,__webpack_require__){"use strict";function http(Prism){!function(Prism){Prism.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var options,langs=Prism.languages,httpLanguages={"application/javascript":langs.javascript,"application/json":langs.json||langs.javascript,"application/xml":langs.xml,"text/xml":langs.xml,"text/html":langs.html,"text/css":langs.css},suffixTypes={"application/json":!0,"application/xml":!0};function getSuffixPattern(contentType){var suffix=contentType.replace(/^[a-z]+\//,"");return"(?:"+contentType+"|"+("\\w+/(?:[\\w.-]+\\+)+"+suffix+"(?![+\\w.-])")+")"}for(var contentType in httpLanguages)if(httpLanguages[contentType]){options=options||{};var pattern=suffixTypes[contentType]?getSuffixPattern(contentType):contentType;options[contentType]={pattern:RegExp("(content-type:\\s*"+pattern+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}}}options&&Prism.languages.insertBefore("http","header-name",options)}(Prism)}module.exports=http,http.displayName="http",http.aliases=[]}}]);