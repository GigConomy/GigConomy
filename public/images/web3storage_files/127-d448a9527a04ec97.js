(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{8566:function(t,e,n){"use strict";var i=n(930),r=n(5696),o=n(7980);e.default=function(t){var e,n=t.src,a=t.sizes,f=t.unoptimized,m=void 0!==f&&f,j=t.priority,z=void 0!==j&&j,A=t.loading,k=t.lazyRoot,S=void 0===k?null:k,x=t.lazyBoundary,E=void 0===x?"200px":x,P=t.className,_=t.quality,R=t.width,I=t.height,q=t.objectFit,D=t.objectPosition,C=t.onLoadingComplete,L=t.loader,N=void 0===L?O:L,W=t.placeholder,M=void 0===W?"empty":W,Z=t.blurDataURL,B=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=c.useRef(null),H=c.useContext(d.ImageConfigContext),T=c.useMemo((function(){var t=p||H||s.imageConfigDefault,e=[].concat(o(t.deviceSizes),o(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return g({},t,{allSizes:e,deviceSizes:n})}),[H]),F=B,G=a?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var J="";if(function(t){return"object"===typeof t&&(b(t)||function(t){return void 0!==t.src}(t))}(n)){var V=b(n)?n.default:n;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(Z=Z||V.blurDataURL,J=V.src,(!G||"fill"!==G)&&(I=I||V.height,R=R||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}n="string"===typeof n?n:J;var Q=w(R),K=w(I),X=w(_),Y=!z&&("lazy"===A||"undefined"===typeof A);(n.startsWith("data:")||n.startsWith("blob:"))&&(m=!0,Y=!1);h.has(n)&&(Y=!1);0;var $,tt=l.useIntersection({rootRef:S,rootMargin:E,disabled:!Y}),et=r(tt,2),nt=et[0],it=et[1],rt=!Y||it,ot={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},at={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ct=!1,ut={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:D},st="blur"===M?{filter:"blur(20px)",backgroundSize:q||"cover",backgroundImage:'url("'.concat(Z,'")'),backgroundPosition:D||"0% 0%"}:{};if("fill"===G)ot.display="block",ot.position="absolute",ot.top=0,ot.left=0,ot.bottom=0,ot.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var lt=K/Q,dt=isNaN(lt)?"100%":"".concat(100*lt,"%");"responsive"===G?(ot.display="block",ot.position="relative",ct=!0,at.paddingTop=dt):"intrinsic"===G?(ot.display="inline-block",ot.position="relative",ot.maxWidth="100%",ct=!0,at.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===G&&(ot.display="inline-block",ot.position="relative",ot.width=Q,ot.height=K)}else 0;var ft={src:y,srcSet:void 0,sizes:void 0};rt&&(ft=v({config:T,src:n,unoptimized:m,layout:G,width:Q,quality:X,sizes:a,loader:N}));var gt=n;0;0;var pt=(i(e={},"imagesrcset",ft.srcSet),i(e,"imagesizes",ft.sizes),e),ht=c.default.useLayoutEffect,yt=c.useRef(C);return c.useEffect((function(){yt.current=C}),[C]),ht((function(){nt(U.current)}),[nt]),c.useEffect((function(){!function(t,e,n,i,r){var o=function(){var n=t.current;n&&(n.src!==y&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(h.add(e),"blur"===i&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),r.current)){var o=n.naturalWidth,a=n.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(U,gt,0,M,yt)}),[gt,G,M,rt]),c.default.createElement("span",{style:ot},ct?c.default.createElement("span",{style:at},$?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,c.default.createElement("img",Object.assign({},F,ft,{decoding:"async","data-nimg":G,className:P,ref:U,style:g({},ut,st)})),Y&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},F,v({config:T,src:n,unoptimized:m,layout:G,width:Q,quality:X,sizes:a,loader:N}),{decoding:"async","data-nimg":G,style:ut,className:P,loading:A||"lazy"}))),z?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ft.src+ft.srcSet+ft.sizes,rel:"preload",as:"image",href:ft.srcSet?void 0:ft.src},pt))):null)};var a,c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(2784)),u=(a=n(2717))&&a.__esModule?a:{default:a},s=n(5809),l=n(639),d=n(9239);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){f(t,e,n[e])}))}return t}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},h=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=new URL("".concat(e.path).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(j(n))}],["akamai",function(t){var e=t.config,n=t.src,i=t.width;return"".concat(e.path).concat(j(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(t){return void 0!==t.default}function v(t){var e=t.config,n=t.src,i=t.unoptimized,r=t.layout,a=t.width,c=t.quality,u=t.sizes,s=t.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var l=function(t,e,n,i){var r=t.deviceSizes,a=t.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,s=[];c=u.exec(i);c)s.push(parseInt(c[2]));if(s.length){var l=.01*Math.min.apply(Math,s);return{widths:a.filter((function(t){return t>=r[0]*l})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([e,2*e].map((function(t){return a.find((function(e){return e>=t}))||a[a.length-1]})))),kind:"x"}}(e,a,r,u),d=l.widths,f=l.kind,g=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(t,i){return"".concat(s({config:e,src:n,quality:c,width:t})," ").concat("w"===f?t:i+1).concat(f)})).join(", "),src:s({config:e,src:n,quality:c,width:d[g]})}}function w(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function O(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",i=m.get(n);if(i)return i(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(t){return"/"===t[0]?t.slice(1):t}},5675:function(t,e,n){t.exports=n(8566)},748:function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return i}})},2777:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return i}})},2262:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,{Z:function(){return r}})},7247:function(t,e,n){"use strict";function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}n.d(e,{Z:function(){return i}})},5959:function(t,e,n){"use strict";function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,{Z:function(){return r}})},3553:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(4027),r=n(748);function o(t,e){if(e&&("object"===i(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(t)}}}]);