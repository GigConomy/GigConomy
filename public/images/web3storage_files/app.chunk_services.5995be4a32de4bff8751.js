(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{112:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var r=e(220);var i=e(257);var o=e(7);var a=e(50);var u=e(26);var c=e(300);var s=e(14);var d=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function f(t){if(!Object(a["k"])())return t;const n=Object(u["e"])();return`${t}-${n}`}function v(t){try{return typeof t==="string"?JSON.parse(t):t!==null&&t!==void 0?t:{}}catch(n){return t!==null&&t!==void 0?t:{}}}function l(t){return d(this,void 0,void 0,(function*(){const n=v(t.data);if(n===null||n===void 0?void 0:n.payload){const t=Object(s["d"])(n===null||n===void 0?void 0:n.payload);t.rt=n===null||n===void 0?void 0:n.rt;t.jwt=n===null||n===void 0?void 0:n.jwt}if((n===null||n===void 0?void 0:n.msgType)===f(r["FmOutgoingWindowMessage"].FORTMATIC_HANDLE_FORTMATIC_REQUEST)||(n===null||n===void 0?void 0:n.msgType)===f(r["FmOutgoingWindowMessage"].FORTMATIC_HANDLE_REQUEST)||(n===null||n===void 0?void 0:n.msgType)===f(i["d"].MAGIC_HANDLE_REQUEST)){if(Object(o["isArray"])(n===null||n===void 0?void 0:n.payload))Object(c["a"])(n===null||n===void 0?void 0:n.payload);else Object(c["b"])(n===null||n===void 0?void 0:n.payload)}}))}function h(t,n,e){window.parent.postMessage({msgType:f(t),response:n,rt:e},"*")}var g=e(253);var p=e(10);var m=e(88);var y=e(384);var _=e(148);var w=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function b(t){try{return JSON.parse(decodeURI(t===null||t===void 0?void 0:t.payload))}catch(t){return{}}}function x(t){var n,e,r;return w(this,void 0,void 0,(function*(){if(((n=t.data)===null||n===void 0?void 0:n.msgType)==="update"){const n=b(t.data);p["b"].dispatch(Object(y["a"])(Object.assign(Object.assign({},Object(g["a"])(Object.assign(Object.assign({},m["a"].config),{primaryColor:Object(_["a"])(`#${n.color}`)?`#${n.color}`:m["a"].hex.primary.base,type:n.themeType}))),{logoImage:(e=n.logoImage)!==null&&e!==void 0?e:m["a"].logoImage,appName:(r=n.appName)!==null&&r!==void 0?r:m["a"].appName,isPreview:true})))}}))}function O(){const t=window.location.pathname;const n="PreviewChannelReady";window.parent.postMessage({msgType:n,previewType:t},"*")}const j={rpc:{handle:l,post:h},themePreview:{handle:x,postReady:O}}},119:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(735);const i={kmsEncrypt:r["b"],kmsDecrypt:r["a"]}},1222:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(22);function i(){const t=`v1/custom_theme/retrieve`;return r["a"].magic.get(t)}const o={retrieve:i}},1223:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(22);function i(t,n){const e=`v1/auth/user/wallet/flow/message/sign`;const i={auth_user_id:t,message:n};return r["a"].magic.post(e,i)}const o={flowSignMessage:i}},156:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(535);const i={ethereumProxy:r["a"]}},157:function(t,n,e){"use strict";e.d(n,"h",(function(){return a}));e.d(n,"f",(function(){return u}));e.d(n,"a",(function(){return c}));e.d(n,"g",(function(){return s}));e.d(n,"d",(function(){return d}));e.d(n,"i",(function(){return f}));e.d(n,"b",(function(){return v}));e.d(n,"e",(function(){return l}));e.d(n,"c",(function(){return h}));var r=e(156);var i=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function o(t,n=[]){return{jsonrpc:"2.0",id:"1",method:t,params:n}}function a(t,n="latest"){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_getTransactionCount",[t,n]))}))}function u(){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_gasPrice"))}))}function c(t){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_estimateGas",[t]))}))}function s(){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("net_version"))}))}function d(){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_chainId"))}))}function f(t){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_sendRawTransaction",[t]))}))}function v(t){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_getBalance",[t]))}))}function l(t){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_getCode",[t,"latest"]))}))}function h(t="latest",n=false){return i(this,void 0,void 0,(function*(){return r["a"].ethereumProxy(o("eth_getBlockByNumber",[t,n]))}))}},199:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(22);function i(t,n){const e=`/v1/auth/user/email/update`;const i={new_email:t,auth_user_id:n};return r["a"].magic.post(e,i)}function o(t){const n=`/v1/auth/user/email/update/status?auth_user_id=${t}`;return r["a"].magic.get(n)}function a(t,n){const e={token:t};const i=`/v1/auth/user/email/update/new/confirm?e=${n}`;return r["a"].magic.post(i,e)}function u(t,n){const e={token:t};const i=`/v1/auth/user/email/update/old/confirm?e=${n}`;return r["a"].magic.post(i,e)}function c(t,n,e){const i={token:t,request_id:n};const o=`/v1/auth/user/email/update/resend?e=${e}`;return r["a"].magic.post(o,i)}const s={emailUpdateStart:i,emailUpdateStatus:o,confirmNewEmail:a,confirmCurrentEmail:u,resendConfirmEmail:c}},22:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=e(7);var i=e(536);var o=e(27);var a=e(287);var u=e(10);var c=e(50);var s=e(374);var d=e(6);var f=e(170);var v=e(3);function l(){return o["m"]?"x-magic":"x-fortmatic"}const h=Object(s["a"])({requestInterceptor:t=>{const n=Object(a["a"])();const e=Object(c["e"])();const{ust:s}=u["b"].getState().Auth;const d=Object(f["a"])();const h=Object(i["v4"])();const g=Object(v["b"])();return Object(r["merge"])({baseURL:o["c"],withCredentials:true,headers:Object(r["pickBy"])({authorization:s&&`Bearer ${s}`,[`${l()}-referrer`]:n,[`${l()}-api-key`]:d,"x-magic-trace-id":h,"x-amzn-trace-id":`Root=${h}`,"x-fortmatic-network":e,"accept-language":g})},t)},metadataFactory:t=>{var n;return{endpoint:t.url,trace_id:(n=t.headers)===null||n===void 0?void 0:n["x-magic-trace-id"]}},errorTransform:(t,n)=>{var e,r;return Object(d["f"])((r=(e=t.response)===null||e===void 0?void 0:e.data)!==null&&r!==void 0?r:t,Object.assign({},n))}});const g=Object(s["a"])({metadataFactory:t=>({body:t.data}),errorTransform:(t,n)=>{var e,r;return Object(d["f"])((r=(e=t.response)===null||e===void 0?void 0:e.data)!==null&&r!==void 0?r:t,Object.assign({urgency:"warning"},n))}});var p=e(172);const m=Object(s["a"])({requestInterceptor:t=>{const n=Object(a["a"])();const{_aucsrf:e}=Object(p["a"])();const{ust:o}=u["b"].getState().Auth;const c=Object(f["a"])();const s=Object(i["v4"])();return Object(r["merge"])({baseURL:window.location.origin,withCredentials:true,headers:Object(r["pickBy"])({authorization:o&&`Bearer ${o}`,"x-magic-trace-id":s,"x-amzn-trace-id":`Root=${s}`,"x-magic-referrer":n,"x-magic-api-key":c,"x-magic-csrf":e,"accept-language":Object(v["b"])()})},t)},metadataFactory:t=>{var n;return{endpoint:t.url,trace_id:(n=t.headers)===null||n===void 0?void 0:n["x-magic-trace-id"]}},errorTransform:(t,n)=>{var e,r;return Object(d["f"])((r=(e=t.response)===null||e===void 0?void 0:e.data)!==null&&r!==void 0?r:t,Object.assign({urgency:"warning"},n))}});const y={magic:h,authRelayer:m,json:g}},267:function(t,n,e){"use strict";e.d(n,"a",(function(){return _}));var r=e(22);var i=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function o(t){return i(this,void 0,void 0,(function*(){const n=`v1/auth/user/web_authn/registration/start`;const e={username:t};return r["a"].magic.post(n,e)}))}var a=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function u(t,n="",e,i,o){return a(this,void 0,void 0,(function*(){const a=`v1/auth/user/web_authn/register`;const u={webauthn_user_id:t,nickname:n,transport:e,user_agent:i,registration_response:o};return r["a"].magic.post(a,u)}))}var c=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function s(t,n){return c(this,void 0,void 0,(function*(){const e=`v1/auth/user/web_authn/unregister`;const i={auth_user_id:t,webauthn_id:n};return r["a"].magic.post(e,i)}))}function d(t){const n=`v1/auth/user/web_authn/info/retrieve?auth_user_id=${t}`;return r["a"].magic.get(n)}var f=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function v(t,n,e){return f(this,void 0,void 0,(function*(){const i=`v1/auth/user/web_authn/info/update`;const o={auth_user_id:t,webauthn_id:n,nickname:e};return r["a"].magic.post(i,o)}))}function l(t){const n=`v1/auth/user/web_authn/re_auth/start`;const e={username:t};return r["a"].magic.post(n,e)}function h(t,n){const e=`v1/auth/user/web_authn/re_auth/verify`;const i={username:t,assertion_response:n};return r["a"].magic.post(e,i)}var g=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function p(t){return g(this,void 0,void 0,(function*(){const n=`v1/auth/user/web_authn/device/registration/start?auth_user_id=${t}`;return r["a"].magic.get(n)}))}var m=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function y(t,n="",e,i,o){return m(this,void 0,void 0,(function*(){const a=`v1/auth/user/web_authn/device/register`;const u={auth_user_id:t,nickname:n,transport:e,user_agent:i,registration_response:o};return r["a"].magic.post(a,u)}))}const _={registrationStart:o,register:u,getInfo:d,unregister:s,update:v,webAuthnReAuthStart:l,reauthVerify:h,registerDeviceStart:p,registerDevice:y}},301:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var r=e(585);var i=e.n(r);var o=e(734);var a=e(26);var u=e(21);var c=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};let s;function d(t){return(...n)=>c(this,void 0,void 0,(function*(){var e;try{if(!s){s=i.a.createInstance({name:"magic_auth"});yield s.defineDriver(o);const t=[i.a.INDEXEDDB,i.a.LOCALSTORAGE,o["_driver"]];const n=Object(a["c"])(u["a"].Client.SendV1);if(n.sdk==="magic-sdk-flutter"){t.shift()}yield s.setDriver(t)}yield s.ready();return(e=yield s[t].apply(s,n))!==null&&e!==void 0?e:null}catch(t){return null}}))}const f={getItem:d("getItem"),setItem:d("setItem"),removeItem:d("removeItem"),clear:d("clear"),length:d("length"),key:d("key"),keys:d("keys"),iterate:d("iterate")};const v=1;var l=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function h(){return l(this,void 0,void 0,(function*(){const t=yield f.getItem("__client_storage_version__");if(t){if(t!==v){yield f.clear()}}else{yield f.setItem("__client_storage_version__",v)}}))}const g={data:f,cacheBust:h}},335:function(t,n,e){"use strict";(function(t){e.d(n,"d",(function(){return c}));e.d(n,"e",(function(){return s}));e.d(n,"f",(function(){return d}));e.d(n,"a",(function(){return f}));e.d(n,"b",(function(){return v}));e.d(n,"c",(function(){return l}));var r=e(398);var i=e.n(r);var o=e(451);var a=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};const u="0x0";function c(n,e){if(e){const r=t.from(e.substring(2),"hex");const o=i.a.signTypedDataLegacy(r,{data:n});e=null;return o}return u}function s(n,e){if(e){const r=t.from(e.substring(2),"hex");const o=i.a.signTypedData(r,{data:n});e=null;return o}return u}function d(n,e){if(e){const r=t.from(e.substring(2),"hex");const o=i.a.signTypedData_v4(r,{data:n});e=null;return o}return u}function f(n,e){if(e){const r=t.from(e.substring(2),"hex");const o=i.a.personalSign(r,{data:n});e=null;return o}return u}function v(t,n){return i.a.recoverPersonalSignature({data:t,sig:n})}function l(t,n){return a(this,void 0,void 0,(function*(){if(n){try{const e=Object(o["b"])(n);return e.signTransaction(t)}catch(t){throw t}finally{n=null}}throw new Error("Cannot sign a transaction without a valid private key.")}))}}).call(this,e(15).Buffer)},386:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(22);function i(t,n){const e=`v2/transaction/fee/retrieve?crypto=ETH&fiat=USD`;const i={is_auth_user:true,wallet_id:n,payload:t,suggest_txn_fee:false};return r["a"].magic.post(e,i)}function o(){const t="v1/transaction/fee/retrieve?crypto=ETH&fiat=USD";return r["a"].magic.get(t)}const a={getTransactionFeeV1:o,getTransactionFeeV2:i}},41:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(335);var i=e(451);var o=e(157);const a={createWallet:i["a"],privateKeyToAccount:i["b"],signTypedDataV1:r["d"],signTypedDataV3:r["e"],signTypedDataV4:r["f"],personalSign:r["a"],recoverPersonalSignature:r["b"],signTransaction:r["c"],getTransactionCount:o["h"],getGasPrice:o["f"],estimateGas:o["a"],getNetworkId:o["g"],getChainId:o["d"],sendRawTransaction:o["i"],getBlock:o["c"],getBalance:o["b"],getCode:o["e"]}},451:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));e.d(n,"b",(function(){return h}));var r=e(866);var i=e.n(r);var o=e(1180);var a=e.n(o);var u=e(1181);var c=e.n(u);var s=e(1189);var d=e.n(s);var f=e(50);var v=e(174);function l(){const t=s["generateMnemonic"]();const n=c.a.fromMnemonic(t);const e=`0x${n.derive(v["b"].path0).getPrivateKey().toString("hex")}`;const r=`0x${n.derive(v["b"].path0).getAddress().toString("hex")}`;return{privateKey:e,address:r,mnemonic:t,HDWalletPath:v["b"].path0}}function h(t){const n=new a.a(Object(f["c"])());return n.privateKeyToAccount(t)}},535:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(50);var i=e(22);var o=e(6);var a=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function u(t){if(t===null||t===void 0?void 0:t.error){throw Object(o["e"])(Object(o["o"])(t),"Error forwarded from node",Object(o["p"])(t))}}function c(t){const n=`v1/ethereum/provider/async/proxy`;return i["a"].magic.post(n,t)}function s(t){return a(this,void 0,void 0,(function*(){if(Object(r["h"])()){const n=Object(r["b"])();if(n){const e=yield i["a"].json.post(n,t);u(e);return e.result}}const n=(yield c(t)).data;u(n);return n.result}))}},538:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(22);var i=e(24);var o=e(27);var a=e(153);function u(t,n=i["e"].ETH){const e=`${o["a"]}?auth_user_id=${t}&wallet_type=${n}`;return r["a"].magic.get(e,Object(a["a"])())}},539:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(22);function i(t,n="testnet"){const e=`v1/request_anomaly/approve?tlt=${t}&e=${n}`;return r["a"].magic.post(e,{})}},555:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(22);function i(t,n){const e=`v1/currency/convert?from=${t}&to=USD&currency_amount=${n}`;return r["a"].magic.get(e)}},577:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(530);var i=e.n(r);var o=e(41);var a=e(289);var u=e(198);var c=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function s(t){return c(this,void 0,void 0,(function*(){const{account:n,subject:e,audience:r,lifespan:c,attachment:s,systemClockOffset:d=0}=t;const f=Math.floor(Date.now()/1e3)+Math.floor(d/1e3);const v=JSON.stringify({iat:f,ext:f+c,iss:Object(a["a"])(n.address),sub:e,aud:r,nbf:f,tid:i()(),add:o["a"].personalSign(s||"none",n.privateKey)});const l=o["a"].personalSign(v,n.privateKey);return Object(u["c"])(JSON.stringify([l,v]))}))}const d={createToken:s}},735:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return h}));e.d(n,"a",(function(){return g}));var r=e(1225);var i=e(2051);var o=e(2052);var a=e(1224);var u=e(2053);var c=e(533);var s=e(233);var d=e(27);var f=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};const v="us-west-2";function l(t,n=0){var e,r,i,o;return f(this,void 0,void 0,(function*(){if(!(t===null||t===void 0?void 0:t.delegated_access_token)){throw new Error("DKMS - Missing delegated access token")}const c={IdentityId:t.delegated_identity_id,Logins:{"cognito-identity.amazonaws.com":t.delegated_access_token}};let f=new a["a"]({region:v,systemClockOffset:n});const l=new u["a"](c);if(d["i"]){const t=s["b"].digest(JSON.stringify(c));f=new a["a"]({region:"us-west-2",systemClockOffset:n,endpoint:`${d["i"]}/get-credentials/${t}`})}const h=yield f.send(l);return{accessKeyId:(e=h===null||h===void 0?void 0:h.Credentials)===null||e===void 0?void 0:e.AccessKeyId,secretAccessKey:(r=h===null||h===void 0?void 0:h.Credentials)===null||r===void 0?void 0:r.SecretKey,sessionToken:(i=h===null||h===void 0?void 0:h.Credentials)===null||i===void 0?void 0:i.SessionToken,expiration:(o=h===null||h===void 0?void 0:h.Credentials)===null||o===void 0?void 0:o.Expiration}}))}function h(n,e,o=0){return f(this,void 0,void 0,(function*(){if(!n){throw new Error("DKMS - missing encrypted private key")}const a=yield l(e,o);const u=new r["a"]({region:v,credentials:a});const c=new i["a"]({KeyId:e===null||e===void 0?void 0:e.delegated_key_id,Plaintext:t.from(n)});const s=yield u.send(c);if(!s.CiphertextBlob){throw new Error("DKMS - Failed encryption")}return t.from(s.CiphertextBlob).toString("base64")}))}function g(n,e,i=0){return f(this,void 0,void 0,(function*(){const a=yield l(e,i);const u=new r["a"]({region:v,credentials:a});const s=new o["a"]({CiphertextBlob:Object(c["a"])(n)});const d=yield u.send(s);if(!d.Plaintext){throw new Error("DKSM - Failed decryption")}return t.from(d.Plaintext).toString("ascii")}))}}).call(this,e(15).Buffer)},75:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var r=e(538);var i=e(171);var o=e.n(i);var a=e(22);var u=e(450);function c(t,n,e,r,i){var c,s;const d=Object(u["a"])();const f=d?`v1/hl/auth/user/login/email/start?${o.a.stringify({queueittoken:d})}`:`v1/auth/user/login/email/start`;const v={email:t,request_origin_message:n,redirect_url:e,app_name:(c=i===null||i===void 0?void 0:i.appName)!==null&&c!==void 0?c:undefined,asset_uri:(s=i===null||i===void 0?void 0:i.logoURL)!==null&&s!==void 0?s:undefined};const l=r?{headers:{dpop:r}}:{};return a["a"].magic.post(f,v,l)}function s(t,n="testnet"){const e=`v2/auth/user/login/verify?e=${n}`;const r={tlt:t!==null&&t!==void 0?t:""};return a["a"].magic.post(e,r)}function d({email:t,requestOriginMessage:n,jwt:e,loginFlowContext:r}){const i="/v1/auth/user/login/email/status";const o={email:t,rom:n,login_flow_context:r};const u=e?{headers:{dpop:e}}:{};return a["a"].magic.post(i,o,u)}var f=undefined&&undefined.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};function v(t){return f(this,void 0,void 0,(function*(){const n=`v1/auth/user/logout`;const e={auth_user_id:t};yield a["a"].magic.post(n,e)}))}var l=e(24);var h=e(153);function g(t,n,e,r=l["e"].ETH,i,o){const u=`v2/auth/user/wallet/sync`;const c={auth_user_id:t,public_address:n,encrypted_private_address:e,wallet_type:r,encrypted_seed_phrase:i,hd_path:o};return a["a"].magic.post(u,c,Object(h["a"])())}var p=e(539);function m(t,n="testnet"){const e=`v1/request_anomaly/block?tlt=${t}&e=${n}`;return a["a"].magic.post(e,{})}var y=e(7);var _=e(326);function w(t,n){const e=`v2/auth/user/redirect/login`;return a["a"].magic.post(e,undefined,{headers:Object.assign(Object.assign({},Object(y["pickBy"])({authorization:t&&`Bearer ${t}`})),Object(_["a"])(n))})}function b(t,n,e="testnet"){const r=`v1/auth/user/login/email/confirm?e=${e}`;const i={tlt:t!==null&&t!==void 0?t:"",login_flow_context:n};return a["a"].magic.post(r,i)}function x(t,n=true,e="",r=true){const i=`v1/auth/user/wallet/export`;const o={auth_user_id:t,are_consequences_ack:n,export_reason:e,is_backup:r};return a["a"].magic.post(i,o)}function O(t,n){const e=`/v1/auth/user/session/refresh`;const r={auth_user_refresh_token:t};const i=n?{headers:{dpop:n}}:{};return a["a"].magic.post(e,r,i)}const j={loginStart:c,loginVerify:s,loginStatus:d,getUserInfo:r["a"],logout:v,syncWallet:g,requestAnomalyApprove:p["a"],requestAnomalyBlock:m,redirectLogin:w,redirectConfirm:b,exportWallet:x,getUstWithRt:O}},760:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(22);var i=e(21);function o(t,n){const e={auth_user_id:t,request_origin_message:n};return r["a"].authRelayer.post(i["a"].Session.Persist,e)}function a(){return r["a"].authRelayer.get(i["a"].Session.Refresh)}const u={persist:o,refresh:a}}}]);