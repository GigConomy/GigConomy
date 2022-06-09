(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{3390:function(e){var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}n.exports=t,n.exports.default=t;var i=n.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const o=e=>!!e.kind;class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every((e=>"string"===typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class u extends l{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"===typeof e?e:e.source:null}function d(e){return b("(?=",e,")")}function h(e){return b("(?:",e,")*")}function f(e){return b("(?:",e,")?")}function b(...e){return e.map((e=>g(e))).join("")}function p(...e){const n=function(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(n.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}function m(e){return new RegExp(e.toString()+"|").exec("").length-1}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let i=g(e),r="";for(;i.length>0;){const e=E.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+n):(r+=e[0],"("===e[0]&&t++)}return r})).map((e=>`(${e})`)).join(n)}const w="[a-zA-Z]\\w*",_="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",A="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},S={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},O=function(e,n,t={}){const i=s({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:b(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},R=O("//","$"),M=O("/\\*","\\*/"),I=O("#","$"),T={scope:"number",begin:x,relevance:0},j={scope:"number",begin:N,relevance:0},B={scope:"number",begin:A,relevance:0},L={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},C={scope:"title",begin:w,relevance:0},D={scope:"title",begin:_,relevance:0},$={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var P=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:w,UNDERSCORE_IDENT_RE:_,NUMBER_RE:x,C_NUMBER_RE:N,BINARY_NUMBER_RE:A,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=b(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:k,QUOTE_STRING_MODE:S,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:O,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:M,HASH_COMMENT_MODE:I,NUMBER_MODE:T,C_NUMBER_MODE:j,BINARY_NUMBER_MODE:B,REGEXP_MODE:L,TITLE_MODE:C,UNDERSCORE_TITLE_MODE:D,METHOD_GUARD:$,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function U(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function H(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function z(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=U,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function Z(e,n){Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function K(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function F(e,n){void 0===e.relevance&&(e.relevance=1)}const G=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=b(t.beforeMatch,d(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},W=["of","and","for","in","not","or","if","then","parent","list","value"];function X(e,n,t="keyword"){const i=Object.create(null);return"string"===typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(i,X(e[t],n,t))})),i;function r(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");i[t[0]]=[e,J(t[0],t[1])]}))}}function J(e,n){return n?Number(n):function(e){return W.includes(e.toLowerCase())}(e)?0:1}const V={},q=e=>{console.error(e)},Q=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Y=(e,n)=>{V[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),V[`${e}/${n}`]=!0)},ee=new Error;function ne(e,n,{key:t}){let i=0;const r=e[t],a={},s={};for(let o=1;o<=n.length;o++)s[o+i]=r[o],a[o+i]=!0,i+=m(n[o-1]);e[t]=s,e[t]._emit=a,e[t]._multi=!0}function te(e){!function(e){e.scope&&"object"===typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"===typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"===typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ee;if("object"!==typeof e.beginScope||null===e.beginScope)throw q("beginScope must be object"),ee;ne(e,e.begin,{key:"beginScope"}),e.begin=y(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ee;if("object"!==typeof e.endScope||null===e.endScope)throw q("endScope must be object"),ee;ne(e,e.end,{key:"endScope"}),e.end=y(e.end,{joinWith:""})}}(e)}function ie(e){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=m(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(y(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,a){const o=r;if(r.isCompiled)return o;[H,K,te,G].forEach((e=>e(r,a))),e.compilerExtensions.forEach((e=>e(r,a))),r.__beforeBegin=null,[z,Z,F].forEach((e=>e(r,a))),r.isCompiled=!0;let c=null;return"object"===typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=X(r.keywords,e.case_insensitive)),o.keywordPatternRe=n(c,!0),a&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(o.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(o.end)),o.terminatorEnd=g(o.end)||"",r.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return s(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(re(e))return s(e,{starts:e.starts?s(e.starts):null});if(Object.isFrozen(e))return s(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,o)})),r.starts&&t(r.starts,a),o.matcher=function(e){const n=new i;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o),o}(e)}function re(e){return!!e&&(e.endsWithParent||re(e.starts))}class ae extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const se=a,oe=s,ce=Symbol("nomatch");var le=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function g(e){return l.noHighlightRe.test(e)}function m(e,n,t){let i="",r="";"object"===typeof n?(i=e,t=n.ignoreIllegals,r=n.language):(Y("10.7.0","highlight(lang, code, ...args) has been deprecated."),Y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,i=n),void 0===t&&(t=!0);const a={code:i,language:r};k("before:highlight",a);const s=a.result?a.result:E(a.language,a.code,t);return s.code=a.code,k("after:highlight",s),s}function E(e,t,i,a){const c=Object.create(null);function u(){if(!v.keywords)return void S.addText(O);let e=0;v.keywordPatternRe.lastIndex=0;let n=v.keywordPatternRe.exec(O),t="";for(;n;){t+=O.substring(e,n.index);const r=_.case_insensitive?n[0].toLowerCase():n[0],a=(i=r,v.keywords[i]);if(a){const[e,i]=a;if(S.addText(t),t="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))t+=n[0];else{const t=_.classNameAliases[e]||e;S.addKeyword(n[0],t)}}else t+=n[0];e=v.keywordPatternRe.lastIndex,n=v.keywordPatternRe.exec(O)}var i;t+=O.substr(e),S.addText(t)}function g(){null!=v.subLanguage?function(){if(""===O)return;let e=null;if("string"===typeof v.subLanguage){if(!n[v.subLanguage])return void S.addText(O);e=E(v.subLanguage,O,!0,k[v.subLanguage]),k[v.subLanguage]=e._top}else e=y(O,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(R+=e.relevance),S.addSublanguage(e._emitter,e.language)}():u(),O=""}function d(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const i=_.classNameAliases[e[t]]||e[t],r=n[t];i?S.addKeyword(r,i):(O=r,u(),O=""),t++}}function h(e,n){return e.scope&&"string"===typeof e.scope&&S.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(S.addKeyword(O,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),O=""):e.beginScope._multi&&(d(e.beginScope,n),O="")),v=Object.create(e,{parent:{value:v}}),v}function f(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return f(e.parent,n,t)}function b(e){return 0===v.matcher.regexIndex?(O+=e[0],1):(T=!0,0)}function p(e){const n=e[0],i=t.substr(e.index),r=f(v,e,i);if(!r)return ce;const a=v;v.endScope&&v.endScope._wrap?(g(),S.addKeyword(n,v.endScope._wrap)):v.endScope&&v.endScope._multi?(g(),d(v.endScope,e)):a.skip?O+=n:(a.returnEnd||a.excludeEnd||(O+=n),g(),a.excludeEnd&&(O=n));do{v.scope&&S.closeNode(),v.skip||v.subLanguage||(R+=v.relevance),v=v.parent}while(v!==r.parent);return r.starts&&h(r.starts,e),a.returnEnd?0:n.length}let m={};function w(n,a){const o=a&&a[0];if(O+=n,null==o)return g(),0;if("begin"===m.type&&"end"===a.type&&m.index===a.index&&""===o){if(O+=t.slice(a.index,a.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,i=new r(t),a=[t.__beforeBegin,t["on:begin"]];for(const r of a)if(r&&(r(e,i),i.isMatchIgnored))return b(n);return t.skip?O+=n:(t.excludeBegin&&(O+=n),g(),t.returnBegin||t.excludeBegin||(O=n)),h(t,e),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!i){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(v.scope||"<unnamed>")+'"');throw e.mode=v,e}if("end"===a.type){const e=p(a);if(e!==ce)return e}if("illegal"===a.type&&""===o)return 1;if(I>1e5&&I>3*a.index){throw new Error("potential infinite loop, way more iterations than matches")}return O+=o,o.length}const _=N(e);if(!_)throw q(o.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=ie(_);let A="",v=a||x;const k={},S=new l.__emitter(l);!function(){const e=[];for(let n=v;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>S.openNode(e)))}();let O="",R=0,M=0,I=0,T=!1;try{for(v.matcher.considerAll();;){I++,T?T=!1:v.matcher.considerAll(),v.matcher.lastIndex=M;const e=v.matcher.exec(t);if(!e)break;const n=w(t.substring(M,e.index),e);M=e.index+n}return w(t.substr(M)),S.closeAllNodes(),S.finalize(),A=S.toHTML(),{language:e,value:A,relevance:R,illegal:!1,_emitter:S,_top:v}}catch(j){if(j.message&&j.message.includes("Illegal"))return{language:e,value:se(t),illegal:!0,relevance:0,_illegalBy:{message:j.message,index:M,context:t.slice(M-100,M+100),mode:j.mode,resultSoFar:A},_emitter:S};if(s)return{language:e,value:se(t),illegal:!1,relevance:0,errorRaised:j,_emitter:S,_top:v};throw j}}function y(e,t){t=t||l.languages||Object.keys(n);const i=function(e){const n={value:se(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),r=t.filter(N).filter(v).map((n=>E(n,e,!1)));r.unshift(i);const a=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(N(e.language).supersetOf===n.language)return 1;if(N(n.language).supersetOf===e.language)return-1}return 0})),[s,o]=a,u=s;return u.secondBest=o,u}function w(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=N(t[1]);return n||(Q(o.replace("{}",t[1])),Q("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>g(e)||N(e)))}(e);if(g(i))return;if(k("before:highlightElement",{el:e,language:i}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML)){throw new ae("One of your code blocks includes unescaped HTML.",e.innerHTML)}n=e;const r=n.textContent,a=i?m(r,{language:i,ignoreIllegals:!0}):y(r);e.innerHTML=a.value,function(e,n,i){const r=n&&t[n]||i;e.classList.add("hljs"),e.classList.add(`language-${r}`)}(e,i,a.language),e.result={language:a.language,re:a.relevance,relevance:a.relevance},a.secondBest&&(e.secondBest={language:a.secondBest.language,relevance:a.secondBest.relevance}),k("after:highlightElement",{el:e,result:a,text:r})}let _=!1;function x(){if("loading"===document.readyState)return void(_=!0);document.querySelectorAll(l.cssSelector).forEach(w)}function N(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function A(e,{languageName:n}){"string"===typeof e&&(e=[e]),e.forEach((e=>{t[e.toLowerCase()]=n}))}function v(e){const n=N(e);return n&&!n.disableAutodetect}function k(e,n){const t=e;a.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){_&&x()}),!1),Object.assign(e,{highlight:m,highlightAuto:y,highlightAll:x,highlightElement:w,highlightBlock:function(e){return Y("10.7.0","highlightBlock will be removed entirely in v12.0"),Y("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){l=oe(l,e)},initHighlighting:()=>{x(),Y("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){x(),Y("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let r=null;try{r=i(e)}catch(a){if(q("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw a;q(a),r=c}r.name||(r.name=t),n[t]=r,r.rawDefinition=i.bind(null,e),r.aliases&&A(r.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:N,registerAliases:A,autoDetection:v,inherit:oe,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),a.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.4.0",e.regex={concat:b,lookahead:d,either:p,optional:f,anyNumberOfTimes:h};for(const r in P)"object"===typeof P[r]&&i(P[r]);return Object.assign(e,P),e}({});e.exports=le,le.HighlightJS=le,le.default=le},837:function(e,n,t){"use strict";var i=t(3390);n.Z=i},9622:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});const i="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],c=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],l=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(c,s,o);function g(e){const n=e.regex,t=i,g="<>",d="</>",h={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,i=e.input[t];if("<"===i||","===i)return void n.ignoreMatch();let r;">"===i&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch());(r=e.input.substr(t).match(/^\s+extends\s+/))&&0===r.index&&n.ignoreMatch()}},f={$pattern:i,keyword:r,literal:a,built_in:u,"variable.language":l},b="\\.([0-9](_?[0-9])*)",p="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${p})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${p})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},w={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},x={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},N=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,_,m];E.contains=N.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(N)});const A=[].concat(x,E.contains),v=A.concat([{begin:/\(/,end:/\)/,keywords:f,contains:["self"].concat(A)}]),k={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:v},S={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},O={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...s,...o]}},R={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[k],illegal:/%/};const M={match:n.concat(/\b/,(I=[...c,"super"],n.concat("(?!",I.join("|"),")")),t,n.lookahead(/\(/)),className:"title.function",relevance:0};var I;const T={begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},k]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",L={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[k]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:v,CLASS_REFERENCE:O},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,_,x,m,O,{className:"attr",begin:t+n.lookahead(":"),relevance:0},L,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[x,e.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:v}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:g,end:d},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:h.begin,"on:begin":h.isTrulyOpeningTag,end:h.end}],subLanguage:"xml",contains:[{begin:h.begin,end:h.end,skip:!0,contains:["self"]}]}]},R,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[k,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},T,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[k]},M,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},S,j,{match:/\$[(.]/}]}}}}]);