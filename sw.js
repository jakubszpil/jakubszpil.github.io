if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/content/articles-CmmMKabk.js",revision:null},{url:"assets/content/courses-nqmGltWb.js",revision:null},{url:"assets/core-wVR0Pyga.js",revision:null},{url:"assets/index-DJ3v_Yj1.css",revision:null},{url:"assets/index-DlNP6QS9.js",revision:null},{url:"assets/modules/articles-DvpkD_QZ.js",revision:null},{url:"assets/modules/courses-JBu7kmFL.js",revision:null},{url:"assets/modules/projects-CP6LhvMO.js",revision:null},{url:"assets/pages/about-B2auJyB-.js",revision:null},{url:"assets/pages/article-details-DAvPRckS.js",revision:null},{url:"assets/pages/article-list-D4EwHBTQ.js",revision:null},{url:"assets/pages/course-details-CHaJhep5.js",revision:null},{url:"assets/pages/course-list-DN-nqyJq.js",revision:null},{url:"assets/pages/home-BmQOpd1V.js",revision:null},{url:"assets/pages/not-found-C1GcihcH.js",revision:null},{url:"assets/pages/search-BmR45ulS.js",revision:null},{url:"assets/shared-DFamYK76.js",revision:null},{url:"assets/vendor/libs-CY6I3fE4.js",revision:null},{url:"assets/vendor/react-DspzQBiZ.js",revision:null},{url:"assets/vendor/routing-DsYvJ3k2.js",revision:null},{url:"index.html",revision:"f1537bc0a756f61a0df6d5670577696c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"139714c73c79dc18c299ba258b3395cc"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"b4256d755742bd467d207c97341afb28"},{url:"manifest.webmanifest",revision:"1da9cdac9d28257d5164f60fb035c4b5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
