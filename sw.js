if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>l(s,n),o={module:{uri:n},exports:t,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-996af70b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"1735051232424"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/about-BVrXCqsU.js",revision:null},{url:"assets/article-details-D76HB_ER.js",revision:null},{url:"assets/article-list-TmEdzR6-.js",revision:null},{url:"assets/articles-pDEdQqDx.js",revision:null},{url:"assets/button-BchY-9V6.js",revision:null},{url:"assets/categories-Bix1k7dQ.js",revision:null},{url:"assets/categories-qtjEJZOO.js",revision:null},{url:"assets/chunk-K6AXKMTT-CzbRfI_4.js",revision:null},{url:"assets/course-details-Z588zvt6.js",revision:null},{url:"assets/course-list-CNFM9uHq.js",revision:null},{url:"assets/courses-WZuXP5qd.js",revision:null},{url:"assets/date-BfXueLdd.js",revision:null},{url:"assets/edit-resource-BJis294H.js",revision:null},{url:"assets/entry.client-CU8QQB6l.js",revision:null},{url:"assets/handbook-DlYoaZ-z.js",revision:null},{url:"assets/home-i-135azT.js",revision:null},{url:"assets/IconSearch-BhJXjCfY.js",revision:null},{url:"assets/not-found-cBWPZvnS.js",revision:null},{url:"assets/not-found-Ch7gajn5.js",revision:null},{url:"assets/project-list-BIEXXCwc.js",revision:null},{url:"assets/root-CdqgUeZz.js",revision:null},{url:"assets/search-GreYn2rC.js",revision:null},{url:"assets/seo-DXInsMO8.js",revision:null},{url:"assets/socials-CBLJRlC6.js",revision:null},{url:"assets/string-BZnAEtKi.js",revision:null},{url:"assets/styles-0tPSqYkH.css",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"manifest.webmanifest",revision:"e7bfa06c4e1975cb3bf350f82d1c523c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute((({sameOrigin:s})=>s),new s.CacheFirst({cacheName:"assets-cache",plugins:[]}),"GET")}));
