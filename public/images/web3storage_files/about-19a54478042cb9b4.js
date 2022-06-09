(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8239:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var a=o(2784),r=o(6277),i=o(9519),n=o(2322);function s(){var e=(0,a.useState)(!1),t=e[0],o=e[1];(0,a.useEffect)((function(){var e=function(){window.scrollY>50?t||o(!0):t&&o(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]);var s=function(){window.scrollTo(0,0)};return(0,n.jsx)("div",{className:(0,r.Z)("scroll-2-top-footer",t?"show":""),children:(0,n.jsxs)("button",{className:"scroll-2-top-button",onClick:s,onKeyPress:s,children:[(0,n.jsx)("div",{className:"scroll-2-top-text",children:"Top"}),(0,n.jsx)(i.r,{})]})})}},1714:function(e,t,o){"use strict";o.d(t,{V:function(){return n}});var a=o(29),r=o(7794),i=o.n(r),n=function(){var e=(0,a.Z)(i().mark((function e(t){var a,r,n,s,c,l,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,o.e(306).then(o.t.bind(o,2306,23));case 3:for(a=e.sent.default,r=new a.Controller,n=[],s=0;s<t.length;s++)c=t[s],n[s]=new a.Scene({triggerElement:"#"+c.trigger,triggerHook:"onEnter",offset:c.offset?c.offset:0,duration:c.duration});for(r.addScene(n),l=function(e){for(var o=t[e].floaters.length,a=function(o){var a=t[e].floaters[o].start.x,r=t[e].floaters[o].end.x,i=t[e].floaters[o].start.y,s=t[e].floaters[o].end.y,c=t[e].floaters[o].start.scale,l=t[e].floaters[o].end.scale,d=t[e].floaters[o].start.rotate,u=t[e].floaters[o].end.rotate,h=t[e].floaters[o].default?t[e].floaters[o].default:"",p=t[e].floaters[o].id;n[e].on("progress",(function(e){var t=document.getElementById(p);if(t&&!window.matchMedia("(max-width: 40rem)").matches){var o=e.progress,n=a&&r?(r-a)*o+a:0,m=i&&s?(s-i)*o+i:0,f=n&&m?"translate(".concat(n,"px, ").concat(m,"px)"):"",g=c&&l?"scale(".concat((l-c)*o+c,")"):"",b=d&&u?"rotate(".concat((u-d)*o+d,"deg)"):"";t.style.transform="".concat(h," ").concat(f," ").concat(g," ").concat(b)}}))},r=0;r<o;r++)a(r)},d=0;d<t.length;d++)l(d);return e.abrupt("return",r);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1084:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return l},default:function(){return d}});var a=o(2784),r=JSON.parse('{"cc":[[{"type":"section-data","gradient":true,"variant":"light"},{"id":"about_hero-header","columns":[{"type":"hero","page":"about","cols":{"num":"col-6_sm-7_mi-10_ti-12","push_left":"off-6_sm-5_mi-1_ti-0"},"format":"header","heading":"What is Web3.Storage?","subheading":"Web3.Storage is a service to make building on top of Filecoin as simple as possible - giving developers the power of distributed storage and content addressing via simple client libraries or an HTTP API."}]}],[{"id":"section_architecture-1","columns":[{"type":"custom","cols":{"num":"col-11"},"customizations":[{"type":"corkscrew","id":"architecture-blurred-background"},{"type":"text_block","format":"small","description":["Content uploaded to Web3.Storage is pinned redundantly three times to an IPFS Cluster of 6+ geographically distributed nodes. Before uploading, our client side libraries convert data into a CAR file (that includes the CID of the file), which keeps things trustless: the client can cryptographically verify that the CID corresponds to their file when storing and retrieving.","Once this 31GiB CAR file is uploaded, a queue of geographically distributed storage providers - selected for performance and availability - bid for the right to store these deals, with the Web3.Storage client making a minimum of 5 deals with the various storage providers.","This data is made available to the public IPFS network, meaning you or anyone can access the data from anyone broadcasting the data via its CID.","Please <a href=\'/docs\' alt=\'Web3.Storage Documentation\'>see the documentation</a> for how one can use the Status API to query for information regarding pin status and deal status for your uploaded content."]},{"type":"image_block","src":"/images/about/placeholder_image.png"}]},{"type":"corkscrew","id":"about_section_architecture-corkscrew","cols":{"num":"col-1"}}]},{"id":"section_architecture-2","columns":[{"type":"custom","cols":{"num":"col-5_md-4"},"customizations":[{"type":"helix","id":"section_architecture-2-helix"},{"type":"image_block","id":"section_architecture-image-storage","src":"/images/index/app-ui-screenshot-storage-manager.png"},{"type":"image_block","id":"section_architecture-image-files","src":"/images/index/app-ui-screenshot-file-manager.png"},{"type":"image_block","id":"section_architecture-image-upload","src":"/images/index/app-ui-screenshot-file-upload.png"}]},{"type":"custom","cols":{"num":"col-6_md-7_sm-12","push_left":"off-1_sm-0"},"customizations":[{"type":"cross","id":"section_architecture-2-cross"},{"type":"text_block","format":"small","heading":"Once the deals are active, the Web3.Storage client polls to ensure that the relevant sectors are still available.","description":["If the Filecoin network finds that a copy of your data is no longer proven to be stored, e.g., a storage deal expires or a miner goes offline, the Web3.Storage client will automatically add the relevant data into the queue of upcoming deals to ensure at all times there are always a minimum of 5 copies of data being stored with Filecoin Storage Providers.","In the future, we hope to expand this service to offer a variety of options for storing data - including purely protocol-based approaches (e.g. via smart contracts) as well as other hosted options (e.g. HTTP endpoints). We also aim to provide more native tooling for automated deal management via tools like smart contracts - which may augment the offerings of this service in the future.","Our aim today is to provide a user-friendly experience that massively reduces the burden for onboarding new use cases into the web3 ecosystem today - while providing an upgrade path for the future."]}]},{"type":"custom","cols":{"num":"col-5_md-4_sm-8_mi-10_ti-12","push_left":"off-0_sm-2_mi-1_ti-0"},"customizations":[{"type":"helix","id":"section_architecture-2-helix-small"},{"type":"image_block","id":"section_architecture-image-storage","src":"/images/index/app-ui-screenshot-storage-manager.png"},{"type":"image_block","id":"section_architecture-image-files","src":"/images/index/app-ui-screenshot-file-manager.png"},{"type":"image_block","id":"section_architecture-image-upload","src":"/images/index/app-ui-screenshot-file-upload.png"}]}]}],[{"id":"section_how-it-works","columns":[{"type":"text_block","cols":{"num":"col-5_sm-10_ti-12","push_left":"off-0_sm-1_ti-0"},"format":"medium","heading":"How Does Web3.Storage work?","description":["<a href=\'/docs/#quickstart\' class=\'how-it-works-highlight\' target=\'_blank\'>Developers can start building in a matter of minutes</a> - allowing them to take advantage of all the power and openness of the decentralized web with none of the infrastructure complexity.","Behind the scenes, Web3.Storage is backed by Filecoin and makes content available via IPFS leveraging the unique properties of each network."]},{"type":"custom","cols":{"num":"col-6_sm-10_ti-12","push_left":"off-1_sm-1_ti-0"},"customizations":[{"type":"text_block","format":"small","heading":"About Filecoin","description":"Filecoin offers persistent, decentralized storage - guaranteeing the integrity of the underlying data through a robust economic model while also providing cryptographic proofs for verifiability."},{"type":"text_block","format":"small","heading":"About IPFS","description":"IPFS offers content addressing - enabling developers to create immutable links to their content, and flexibility for developers in how they\u2019d like to retrieve their data (whether it be running personal nodes, relying on public infrastructure, or paying for hosted options)."}]}]},{"id":"how-it-works-accordion","columns":[{"type":"accordion_block","cols":{"num":"col-12_sm-10_ti-12","push_left":"off-0_sm-1_ti-0"},"multiple":true,"toggleOnLoad":true,"sections":[{"heading":"Storage Term","content":"All data uploaded to Web3.Storage is available to anyone who requests it using the correct CID. Users should not store any private or sensitive information in an unencrypted form using Web3.Storage. Further, deleting files from Web3.Storage via the site\u2019s Files page or API will remove them from the file listing for a user\u2019s account, but nodes on the IPFS network may retain copies of the data indefinitely. Users should not use Web3.Storage for data that may need to be permanently deleted in the future."},{"heading":"Data Limits","content":"Web3.Storage supports uploads up to 32GiB in size per request, and currently has a cap of 1TiB of storage per account. Data limits can be increased at not cost by submitting a request via your Account page when logged in."},{"heading":"Filecoin Deals","content":"Data stored via the website is guaranteed to be available in IPFS upon completion of a successful upload. Please note that once replication in IPFS is complete (at a minimum of 3 copies being stored), data is also pushed to be stored on Filecoin. Content is batched into deals on Filecoin and it is expected that there may be a delay between the content being uploaded to the website and being stored on Filecoin through a deal. You may query the status of any CID uploaded through Web3.Storage using the Status API (updated every five minutes) for the latest information regarding an individual CID\u2019s pin status or deal status.<br><br>For reference, the following parameters and strategies are used to ensure highly redundant storage on the Filecoin network:<ul><li>Deals with storage providers are set to last 18 months with automatic deal renewals, managed by Web3.Storage.</li><li>Each piece of content is stored with a minimum of 5 storage providers, typically exceeding this minimum (the specific list of storage providers being provided via the Status API). In the event of a terminated sector, Web3.Storage will automatically store an additional copy to meet the minimum of 5 copies being stored on the Filecoin network.</li><li>It is recommended that you do not rely on Filecoin deals directly for performant retrieval, and instead retrieve the data via IPFS (where Web3.Storage will be dual pinning the content). Retrieving data over the IPFS network is the recommended means of accessing Web3.Storage data.</li><ul>"}]}]}],[{"id":"section_explore-docs","grid":["noGutter"],"columns":[{"type":"text_block","cols":{"num":"col-3_md-7_ti-8","push_left":"off-0_md-1_sm-0"},"format":"medium","heading":"Open product. Open book.","cta":{"url":"/docs","text":"EXPLORE DOCS","theme":"dark","event":"","ui":"","action":""}},{"type":"card_list_block","cols":{"num":"col-8_md-10_sm-12_mi-10","push_left":"off-1_md-1_sm-0_mi-1"},"cards":[{"type":"D","categories":[{"heading":"Welcome","links":[{"url":"/docs/#quickstart","text":"Quickstart"},{"url":"/docs/#create-an-account","text":"Create an Account"},{"url":"/docs/#get-an-api-token","text":"Get an API token"},{"url":"/docs/#create-the-upload-script","text":"Create the Upload Script"},{"url":"/docs/#run-the-script","text":"Run the Script"},{"url":"/docs/#get-your-file","text":"Get your file"},{"url":"/docs/#next-steps","text":"Next Steps"}]},{"heading":"Concepts","links":[{"url":"/docs/concepts/content-addressing","text":"Content Addressing"},{"url":"/docs/concepts/decentralized-storage","text":"Decentralized Storage"}]}]},{"type":"D","categories":[{"heading":"How-tos","links":[{"url":"/docs/how-tos/store/","text":"Store"},{"url":"/docs/how-tos/retrieve","text":"Retrieve"},{"url":"/docs/how-tos/query","text":"Query"},{"url":"/docs/how-tos/list","text":"List"},{"url":"/docs/how-tos/work-with-car-files","text":"Work with Content"},{"url":"/docs/how-tos/generate-api-token","text":"Generate an API Token"},{"url":"/docs/how-tos/troubleshooting","text":"Troubleshooting"}]},{"heading":"Reference","links":[{"url":"/docs/reference/http-api/","text":"HTTP API Reference"},{"url":"/docs/reference/js-client-library","text":"Javascript Client Library"}]}]}]},{"type":"text_block","cols":{"num":"col-3"},"format":"medium","heading":"Open product. Open book.","cta":{"url":"/docs/","text":"EXPLORE DOCS","theme":"dark","event":"","ui":"","action":""}}]}]],"Kc":[{"trigger":"about_hero-header","duration":1000,"offset":700,"floaters":[{"id":"about_hero-ring","start":{"scale":0.8,"rotate":35},"end":{"scale":1,"rotate":55}},{"id":"about_hero-helix","start":{"scale":1,"rotate":20,"x":1,"y":-1},"end":{"scale":1.2,"rotate":-20,"x":80,"y":-40}},{"id":"about_hero-spring","start":{"rotate":45},"end":{"rotate":70}},{"id":"about_hero-cone","start":{"scale":1,"rotate":1},"end":{"scale":1.1,"rotate":15}},{"id":"about_section_architecture-corkscrew","start":{"rotate":29,"scale":1,"x":1,"y":1},"end":{"rotate":40,"scale":1.15,"x":60,"y":80}}]},{"trigger":"section_architecture-2","duration":1200,"floaters":[{"id":"section_architecture-2-helix","start":{"rotate":-79,"scale":1,"x":-1,"y":1},"end":{"rotate":-129,"scale":1.2,"x":-140,"y":20}},{"id":"section_architecture-2-helix-small","start":{"rotate":-79,"scale":1,"x":-1,"y":1},"end":{"rotate":-129,"scale":1.2,"x":-140,"y":20}},{"id":"section_architecture-2-cross","start":{"rotate":1,"scale":1,"x":1,"y":1},"end":{"rotate":40,"scale":1.3,"x":70,"y":70}}]}]}'),i=o(8239),n=o(7522),s=o(1714),c=o(2322),l=!0;function d(){var e=r.cc,t=r.Kc;return(0,a.useEffect)((function(){var e={};return(0,s.V)(t).then((function(t){e=t})),function(){e.hasOwnProperty("destroy")&&e.destroy()}}),[t]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("main",{className:"page page-about",children:e.map((function(e,t){return(0,c.jsx)(n.Z,{id:"about_section_".concat(t+1),subsections:e},"about_section_".concat(t+1))}))}),(0,c.jsx)(i.Z,{})]})}},8961:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return o(1084)}])}},function(e){e.O(0,[273,127,522,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);