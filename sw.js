if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>l(s,n),o={module:{uri:n},exports:t,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-996af70b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"1734987619095"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/about-CqasRbUk.js",revision:null},{url:"assets/article-details-2_NoZqnM.js",revision:null},{url:"assets/article-list-Bd07sLpg.js",revision:null},{url:"assets/articles-De5zskhx.js",revision:null},{url:"assets/button-CdK07Thq.js",revision:null},{url:"assets/categories-16XkQI9H.js",revision:null},{url:"assets/categories-MPoWQ6bF.js",revision:null},{url:"assets/chunk-W3HZJLUQ-BEGNWxIJ.js",revision:null},{url:"assets/course-details-CQirX7vs.js",revision:null},{url:"assets/course-list-DV8FFfdJ.js",revision:null},{url:"assets/courses-Dj3nZlq9.js",revision:null},{url:"assets/date-BfXueLdd.js",revision:null},{url:"assets/edit-resource-DUrh4WuX.js",revision:null},{url:"assets/entry.client-Dv8WTeBJ.js",revision:null},{url:"assets/handbook-CQSJukCw.js",revision:null},{url:"assets/home-CNAi9Msh.js",revision:null},{url:"assets/IconSearch-DeypQQ2W.js",revision:null},{url:"assets/not-found-8yWqC0Ad.js",revision:null},{url:"assets/not-found-Cl6Uh_CB.js",revision:null},{url:"assets/project-list-3NhevG4c.js",revision:null},{url:"assets/root-CEx1wjMp.js",revision:null},{url:"assets/search-ByqYo2Go.js",revision:null},{url:"assets/seo-LFC6jPoY.js",revision:null},{url:"assets/socials-C0EL1Yqr.js",revision:null},{url:"assets/string-BZnAEtKi.js",revision:null},{url:"assets/styles-0tPSqYkH.css",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"manifest.webmanifest",revision:"e7bfa06c4e1975cb3bf350f82d1c523c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute((({sameOrigin:s})=>s),new s.CacheFirst({cacheName:"assets-cache",plugins:[]}),"GET")}));
