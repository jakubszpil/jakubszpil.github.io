if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>n(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/content/articles/dependency-injection-kontra-typescript--lHtd-Bj.js",revision:null},{url:"assets/content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora-BmxXmuzX.js",revision:null},{url:"assets/content/articles/signalizacja-czyli-koncept-signals-w-typescript-CAZ31kIf.js",revision:null},{url:"assets/content/courses/nowoczesny-javascript-gbeECjV1.js",revision:null},{url:"assets/content/courses/semantyczny-html-7pMmxkV9.js",revision:null},{url:"assets/content/courses/szybszy-css-czyli-wprowadzenie-do-bem-CtuKKbIG.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-css-EY5cjLBL.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-dom-BL_WFjrb.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-html-C79jeOGl.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-javascript-Du6Kziuk.js",revision:null},{url:"assets/core-DthUg1gT.js",revision:null},{url:"assets/index-fAB-Hc0m.js",revision:null},{url:"assets/index-yk4KZLBs.css",revision:null},{url:"assets/modules/articles-D4_WyJlG.js",revision:null},{url:"assets/modules/courses-D0xGr9rt.js",revision:null},{url:"assets/modules/projects-DKYqQX6h.js",revision:null},{url:"assets/pages/about-qP_VHIU9.js",revision:null},{url:"assets/pages/article-details-D_FIad5J.js",revision:null},{url:"assets/pages/article-list-B8jkqNnU.js",revision:null},{url:"assets/pages/course-details-DRpg2G11.js",revision:null},{url:"assets/pages/course-list-QoWFF6NF.js",revision:null},{url:"assets/pages/home-0NQZZSqr.js",revision:null},{url:"assets/pages/not-found-BfHciEaO.js",revision:null},{url:"assets/pages/search-OGLugMxm.js",revision:null},{url:"assets/shared-C0O4mna4.js",revision:null},{url:"assets/vendor/libs-Dgr5UeD8.js",revision:null},{url:"assets/vendor/react-CFpgdT8K.js",revision:null},{url:"assets/vendor/routing-D1rnJZHu.js",revision:null},{url:"index.html",revision:"cf2657d52b00926b3bbb84ad7b122c98"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"139714c73c79dc18c299ba258b3395cc"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"b4256d755742bd467d207c97341afb28"},{url:"manifest.webmanifest",revision:"f7400e7251ddc68cbd530399ad791154"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
