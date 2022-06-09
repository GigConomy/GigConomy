(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8239:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var i=o(2784),r=o(6277),s=o(9519),a=o(2322);function n(){var e=(0,i.useState)(!1),t=e[0],o=e[1];(0,i.useEffect)((function(){var e=function(){window.scrollY>50?t||o(!0):t&&o(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]);var n=function(){window.scrollTo(0,0)};return(0,a.jsx)("div",{className:(0,r.Z)("scroll-2-top-footer",t?"show":""),children:(0,a.jsxs)("button",{className:"scroll-2-top-button",onClick:n,onKeyPress:n,children:[(0,a.jsx)("div",{className:"scroll-2-top-text",children:"Top"}),(0,a.jsx)(s.r,{})]})})}},1714:function(e,t,o){"use strict";o.d(t,{V:function(){return a}});var i=o(29),r=o(7794),s=o.n(r),a=function(){var e=(0,i.Z)(s().mark((function e(t){var i,r,a,n,c,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,o.e(306).then(o.t.bind(o,2306,23));case 3:for(i=e.sent.default,r=new i.Controller,a=[],n=0;n<t.length;n++)c=t[n],a[n]=new i.Scene({triggerElement:"#"+c.trigger,triggerHook:"onEnter",offset:c.offset?c.offset:0,duration:c.duration});for(r.addScene(a),l=function(e){for(var o=t[e].floaters.length,i=function(o){var i=t[e].floaters[o].start.x,r=t[e].floaters[o].end.x,s=t[e].floaters[o].start.y,n=t[e].floaters[o].end.y,c=t[e].floaters[o].start.scale,l=t[e].floaters[o].end.scale,d=t[e].floaters[o].start.rotate,u=t[e].floaters[o].end.rotate,m=t[e].floaters[o].default?t[e].floaters[o].default:"",p=t[e].floaters[o].id;a[e].on("progress",(function(e){var t=document.getElementById(p);if(t&&!window.matchMedia("(max-width: 40rem)").matches){var o=e.progress,a=i&&r?(r-i)*o+i:0,f=s&&n?(n-s)*o+s:0,g=a&&f?"translate(".concat(a,"px, ").concat(f,"px)"):"",h=c&&l?"scale(".concat((l-c)*o+c,")"):"",_=d&&u?"rotate(".concat((u-d)*o+d,"deg)"):"";t.style.transform="".concat(m," ").concat(g," ").concat(h," ").concat(_)}}))},r=0;r<o;r++)i(r)},d=0;d<t.length;d++)l(d);return e.abrupt("return",r);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3057:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return l},default:function(){return d}});var i=o(2784),r=JSON.parse('{"cc":[[{"type":"section-data","gradient":true,"variant":"header"},{"id":"hero_header","columns":[{"type":"hero","page":"index","cols":{"num":"col-6_sm-8_mi-10_ti-12","push_left":"off-3_sm-2_mi-1_ti-0"},"format":"header","heading":"The easiest way to store data on the decentralized web.","subheading":"Store your data using our simple API. It\u2019s fast, open, and it\u2019s free.","cta":{"url":"/login","text":"START STORING NOW","event":"","ui":"HOME_HERO","action":"Get Started"}}]}],[{"id":"intro_1","columns":[{"type":"custom","cols":{"num":"col-5_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"customizations":[{"type":"corkscrew","id":"intro_1-hero-corkscrew"},{"type":"coil","id":"intro_1-coil"},{"type":"cross","id":"intro_1-cross"},{"type":"text_block","format":"medium","heading":"Store and retrieve with ease","description":["Most decentralized storage services either need you to jump through hoops (like buying some cryptocurrency) or aren\'t truly decentralized.","With Web3.Storage, things are both easy-to-use and trustless! Upload any data via our API or our web UI for free. The data will end up on a decentralized set of IPFS and Filecoin storage providers."],"cta":{"url":"/about","text":"LEARN MORE","theme":"light","event":"","ui":"","action":""}}]},{"type":"custom","cols":{"num":"col-6_sm-8_mi-10_ti-12","push_left":"off-1_sm-2_mi-1_ti-0"},"customizations":[{"type":"helix","id":"intro_1-helix"},{"type":"code_preview","tabs":[{"thumb":"STORE","lines":["// store.mjs","","import { Web3Storage, getFilesFromPath } from \'web3.storage\'","","const token = process.env.API_TOKEN","const client = new Web3Storage({ token })","","async function storeFiles () {","  const files = await getFilesFromPath(\'/path/to/file\')","  const cid = await client.put(files)","  console.log(cid)","}","","storeFiles()"],"output":{"label":"Run it with","value":"npm i web3.storage\\nAPI_TOKEN=YOUR_TOKEN node ./store.mjs"}},{"thumb":"RETRIEVE","lines":["// retrive.mjs","","import { Web3Storage, getFilesFromPath } from \'web3.storage\'","","const token = process.env.API_TOKEN","const client = new Web3Storage({ token })","","async function retrieveFiles () {","  const id =","     \'bafybeidd2gyhagleh47qeg77xqndy2qy3yzn4vkxmk775bg2t5lpuy7pcu\'","","  const res = await client.get(cid)","  const files = await res.files()","","  for (const file of files) {","    console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)","  }","}","","retrieveFiles()"],"output":{"label":"Run it with","value":"npm i web3.storage\\nAPI_TOKEN=YOUR_TOKEN node ./retrieve.mjs"}}]}]}]}],[{"type":"section-data","gradient":true,"variant":"light"},{"id":"intro_2-heading","columns":[{"type":"custom","cols":{"num":"col-4_md-5_sm-5_mi-8_ti-12","push_left":"off-0_sm-1_mi-1_ti-0"},"customizations":[{"type":"cross","id":"intro_2-cross"},{"type":"text_block","format":"medium","heading":"Web3.Storage is built for scale"}]},{"type":"triangle","cols":{"num":"col-6","push_left":"off-1"},"id":"intro_2-triangle"}]},{"id":"intro_2-statistics","columns":[{"type":"card_list_block","cols":{"num":"col-12_mi-10_ti-12","push_left":"off-0_mi-1_ti-0"},"direction":"row","cards":[{"type":"A","feature":"2500+","title":"Projects Worldwide","description":"Join a global community storing data on web3"},{"type":"A","feature":"15M+","title":"Stored Objects","description":"Store data for free with our easy to use API or our JS library"},{"type":"A","feature":"60+","title":"Filecoin Storage Providers","description":"Data is stored trustlessly across a growing network of storage providers via Filecoin"}]}]},{"id":"intro_2-cta","columns":[{"type":"text_block","cols":{"num":"col-5_sm-10_ti-12","push_left":"off-0_sm-1_ti-0"},"format":"medium","heading":"Why Web3.Storage?","description":"With Web3.Storage you get all the benefits of decentralized storage technologies with the frictionless experience you expect in a modern dev workflow.","cta":{"url":"/docs/","text":"READ DOCS","tracking":"","event":"","ui":"","action":""}},{"type":"custom","cols":{"num":"col-6_sm-10_ti-12","push_left":"off-1_sm-1_ti-0"},"customizations":[{"type":"text_block","format":"small","heading":"Simple","description":"With Web3.Storage, you get decentralized storage in minutes. Use our simple client library or the HTTP API directly - all you need is a free API token."},{"type":"text_block","format":"small","heading":"Open","description":"All data stored is accessible on the public IPFS network via a content ID - interoperable with the tools and services building on the decentralized web."},{"type":"text_block","format":"small","heading":"Free","description":"Data is stored on the Filecoin network, which has a unique economic model and over 15 EiB of capacity, allowing us to offer Web3.Storage for free today. This storage is cryptographically provable by anyone!"}]}]}],[{"id":"section_FAQ_info","grid":["middle"],"columns":[{"type":"custom","cols":{"num":"col-6_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"customizations":[{"type":"squiggle","id":"section_FAQ-squiggle"},{"type":"text_block","format":"medium","heading":"Frequently Asked Questions","subheading":"How is this free?","description":["Web3.Storage offers a simple interface that allows users and developers to take advantage of the vast array of decentralized storage provided by the Filecoin network.","The unique economics of Filecoin allow Web3.Storage to be completely free to use, while still ensuring that storage providers have a strong incentive to preserve user data for the long term."],"cta":{"url":"/faq","text":"MORE FAQs","theme":"light","event":"","ui":"","action":""}}]},{"type":"image_block","cols":{"num":"col-5_sm-8_mi-10_ti-12","push_left":"off-1_sm-2_mi-1_ti-0"},"src":"/images/index/cluster-1.png"}]},{"id":"section_FAQ_ctas","grid":["noGutter"],"columns":[{"type":"card_list_block","cols":{"num":"col-12_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"direction":"row","cards":[{"type":"F","label":"FAQ","title":"How is Web3.Storage different from NFT.Storage?","description":"Both services are offered by the same group and share much of the same architecture, but as the name suggests, NFT.Storage is\u2026","cta":{"url":"/faq/?section=service","text":"READ MORE","theme":"text-purple","event":"","ui":"","action":""}},{"type":"F","label":"\u2003","title":"What happens if Web3.Storage is discontinued?","description":"One major advantage of using Web3.Storage is its use of IPFS, making it easy to move to an alternative storage provider. All of your data\u2026","cta":{"url":"/faq/?section=data-security","text":"READ MORE","theme":"text-purple","event":"","ui":"","action":""}}]}]}],[{"id":"section_get-started","columns":[{"type":"custom","cols":{"num":"col-5_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"customizations":[{"type":"cross","id":"section_get-started-cross"},{"type":"text_block","format":"medium","heading":"Get Started with Web3.Storage","description":"Choose your own way to store and retrieve using Web3.Storage. You can sign up for free using your email address or GitHub.","cta":{"url":"/login","text":"CREATE AN ACCOUNT","theme":"dark","event":"","ui":"","action":""}}]},{"type":"custom","cols":{"num":"col-7_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"customizations":[{"type":"image_block","id":"get-started-image-storage","src":"/images/index/app-ui-screenshot-storage-manager.png"},{"type":"image_block","id":"get-started-image-files","src":"/images/index/app-ui-screenshot-file-manager.png"},{"type":"image_block","id":"get-started-image-upload","src":"/images/index/app-ui-screenshot-file-upload.png"}]}]},{"id":"section_get-started-cards","grid":["noGutter"],"columns":[{"type":"card_list_block","cols":{"num":"col-12_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"direction":"row","cards":[{"type":"B","label":"JS Client Library","feature":"<span class=\'highlight\'>npm install</span> web3.storage","description":"Import the lightweight Web3.Storage library into your project, and enjoy a simple and familiar way to store and retrieve.","icon_before":{"url":"https://www.npmjs.com/package/web3.storage","svg":"npm_icon"},"cta":{"url":"/docs/reference/js-client-library","text":"JS DOCS","theme":"blue","event":"","ui":"","action":""}},{"type":"B","label":"HTTP API","feature":"<span class=\'highlight\'>curl -X</span> POST <span class=\'highlight\'>\u2014data-binary</span> \u201c@foo.gif\u201d https://api.web3.storage/upload","description":"Test or build your project on any stack, using our easy-to-use HTTP API. Web3.Storage is as flexible as you need it to be.","icon_before":{"url":"/docs/reference/http-api/","text":"{\u2026}"},"cta":{"url":"/docs/reference/http-api/","text":"HTTP DOCS","theme":"blue","event":"","ui":"","action":""}},{"type":"B","label":"Web App","feature":"Drop file to upload","description":"Upload your files directly through our Web UI to debug and validate Web3.Storage\u2019s use case for your project.","icon_before":{"url":"/login","svg":"windows_icon"},"cta":{"url":"/login","text":"MAKE YOUR FIRST UPLOAD","theme":"blue","event":"","ui":"","action":""}}]}]}],[{"id":"section_testimonials","columns":[{"type":"text_block","cols":{"num":"col-5_md-7_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"format":"medium","heading":"Trusted by the future","description":["Web3.Storage is the easiest way to build on the decentralized web from hackathon projects to production code at scale.","See what people building the future of the web today have to say, and get started."]}]},{"id":"section_testimonials-cards","columns":[{"type":"card_list_block","cols":{"num":"col-12"},"direction":"row","cards":[{"type":"C","action":"link","url":"//www.strangemood.org","image":"/images/index/testimonial-jacob-p.jpg","title":"Jacob P.","subtitle":"New York, USA","description":"Web3.Storage enables <span className=\'description-link\'>Strangemood</span> to provide game devs with fast, free, and censorship resistant storage. Their simple SDK and responsive team makes decentralized storage on IPFS easier than even centralized alternatives."},{"type":"C","image":"/images/index/testimonial-ryan-w.jpg","title":"Ryan W.","subtitle":"Capetown, South Africa","description":"I work pretty much exclusively on Web3 applications, and I\'m really impressed with Web3.Storage. It\'s almost too easy - I didn\'t run into any stumbling blocks and had a basic implementation of my project in 30 minutes."},{"type":"C","action":"link","url":"//galacticpunks.io","image":"/images/index/testimonial-frank-j.jpg","title":"Frank J.","subtitle":"Toronto, Canada","description":"Web3.Storage was so simple to hook into, and does what you need it to do. We run the <span className=\'description-link\'>Galactic Punks</span> community on Terra, and it is great for storing off-chain data. It\'s like simplified S3 for IPFS."}]},{"type":"slider_block","cols":{"num":"col-12"},"breakpoints":{"medium":3,"small":2,"mini":1},"slides":[{"type":"C","action":"link","url":"//www.strangemood.org","image":"/images/index/testimonial-jacob-p.jpg","title":"Jacob P.","subtitle":"New York, USA","description":"Web3.Storage enables <span className=\'description-link\'>Strangemood</span> to provide game devs with fast, free, and censorship resistant storage. Their simple SDK and responsive team makes decentralized storage on IPFS easier than even centralized alternatives."},{"type":"C","image":"/images/index/testimonial-ryan-w.jpg","title":"Ryan W.","subtitle":"Capetown, South Africa","description":"I work pretty much exclusively on Web3 applications, and I\'m really impressed with Web3.Storage. It\'s almost too easy - I didn\'t run into any stumbling blocks and had a basic implementation of my project in 30 minutes."},{"type":"C","action":"link","url":"//galacticpunks.io","image":"/images/index/testimonial-frank-j.jpg","title":"Frank J.","subtitle":"Toronto, Canada","description":"Web3.Storage was so simple to hook into, and does what you need it to do. We run the <span className=\'description-link\'>Galactic Punks</span> community on Terra, and it is great for storing off-chain data. It\'s like simplified S3 for IPFS."}]}]}],[{"id":"section_explore-docs","grid":["noGutter"],"columns":[{"type":"text_block","cols":{"num":"col-3_md-7_ti-8","push_left":"off-0_md-1_sm-0"},"format":"medium","heading":"Open product. Open book.","cta":{"url":"/docs/","text":"EXPLORE DOCS","theme":"dark","event":"","ui":"","action":""}},{"type":"card_list_block","cols":{"num":"col-8_md-10_sm-12_mi-10","push_left":"off-1_md-1_sm-0_mi-1"},"cards":[{"type":"D","categories":[{"heading":"Welcome","links":[{"url":"/docs/#quickstart","text":"Quickstart"},{"url":"/docs/#create-an-account","text":"Create an Account"},{"url":"/docs/#get-an-api-token","text":"Get an API token"},{"url":"/docs/#create-the-upload-script","text":"Create the Upload Script"},{"url":"/docs/#run-the-script","text":"Run the Script"},{"url":"/docs/#get-your-file","text":"Get your file"},{"url":"/docs/#next-steps","text":"Next Steps"}]},{"heading":"Concepts","links":[{"url":"/docs/concepts/content-addressing","text":"Content Addressing"},{"url":"/docs/concepts/decentralized-storage","text":"Decentralized Storage"}]}]},{"type":"D","categories":[{"heading":"How-tos","links":[{"url":"/docs/how-tos/store/","text":"Store"},{"url":"/docs/how-tos/retrieve","text":"Retrieve"},{"url":"/docs/how-tos/query","text":"Query"},{"url":"/docs/how-tos/list","text":"List"},{"url":"/docs/how-tos/work-with-car-files","text":"Work with Content"},{"url":"/docs/how-tos/generate-api-token","text":"Generate an API Token"},{"url":"/docs/how-tos/troubleshooting","text":"Troubleshooting"}]},{"heading":"Reference","links":[{"url":"/docs/reference/http-api/","text":"HTTP API Reference"},{"url":"/docs/reference/js-client-library","text":"Javascript Client Library"}]}]}]},{"type":"text_block","cols":{"num":"col-3"},"format":"medium","heading":"Open product. Open book.","cta":{"url":"/docs/","text":"EXPLORE DOCS","theme":"dark","event":"","ui":"","action":""}}]}]],"Kc":[{"trigger":"hero_header","duration":1000,"offset":700,"floaters":[{"id":"index_hero-squiggle","start":{"rotate":-27,"scale":1,"x":-1,"y":1},"end":{"rotate":-5,"scale":1.2,"x":-100,"y":-5}},{"id":"index_hero-corkscrew","start":{"rotate":115,"scale":1,"x":1,"y":1},"end":{"rotate":130,"scale":1.2,"x":100,"y":20}},{"id":"intro_1-hero-corkscrew","start":{"rotate":189,"scale":1,"x":1,"y":1},"end":{"rotate":200,"scale":1.2,"x":30,"y":80}},{"id":"index_hero-cross","start":{"rotate":1,"scale":1,"x":1,"y":1},"end":{"rotate":-20,"scale":1.15,"x":50,"y":40}},{"id":"index_hero-zigzag","start":{"rotate":-185,"scale":1,"x":-1,"y":-1},"end":{"rotate":-270,"scale":1.15,"x":-40,"y":10}},{"id":"index_hero-triangle","start":{"scale":1,"rotate":-90},"end":{"scale":1.4,"rotate":-120}},{"id":"intro_1-coil","start":{"rotate":17,"x":1,"y":1},"end":{"rotate":2,"x":-40,"y":32}},{"id":"intro_1-cross","start":{"rotate":-1,"scale":1,"x":-1,"y":1},"end":{"rotate":-30,"scale":1.15,"x":-40,"y":45}}]},{"trigger":"intro_2-heading","duration":1000,"floaters":[{"id":"intro_2-cross","start":{"scale":1,"rotate":-1,"x":-1,"y":1},"end":{"scale":1.3,"rotate":-30,"x":-30,"y":20}},{"id":"intro_2-triangle","start":{"rotate":-90,"x":1,"y":1},"end":{"rotate":-45,"x":80,"y":60}}]},{"trigger":"section_FAQ_info","duration":1000,"floaters":[{"id":"section_FAQ-squiggle","default":"scaleX(-1)","start":{"rotate":18,"x":1,"y":1},"end":{"rotate":30,"x":25,"y":20}}]},{"trigger":"section_get-started","duration":1200,"floaters":[{"id":"section_get-started-cross","default":"translate(50%, 100%) scaleX(-1)","start":{"rotate":1},"end":{"rotate":50}}]}]}'),s=o(8239),a=o(7522),n=o(1714),c=o(2322),l=!0;function d(){var e=r.cc,t=r.Kc;return(0,i.useEffect)((function(){var e={};return(0,n.V)(t).then((function(t){e=t})),function(){e.hasOwnProperty("destroy")&&e.destroy()}}),[t]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("main",{className:"page page-index",children:e.map((function(e,t){return(0,c.jsx)(a.Z,{id:"section_".concat(t+1),subsections:e},"section_".concat(t+1))}))}),(0,c.jsx)(s.Z,{})]})}},8581:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3057)}])}},function(e){e.O(0,[273,127,522,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);