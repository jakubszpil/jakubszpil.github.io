if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/articles-DldlnKZu.js",revision:null},{url:"assets/content/articles-DB22Y152.js",revision:null},{url:"assets/content/courses-Cjhb9eqW.js",revision:null},{url:"assets/core-CZWYZfE3.js",revision:null},{url:"assets/courses-Cg06bNqq.js",revision:null},{url:"assets/index-CoKBUSdO.js",revision:null},{url:"assets/index-DJ3v_Yj1.css",revision:null},{url:"assets/projects-B85P2btl.js",revision:null},{url:"assets/routing-RssI_yy3.js",revision:null},{url:"assets/shared-CK1iUFpx.js",revision:null},{url:"assets/vendor-Uiicy1kP.js",revision:null},{url:"index.html",revision:"2c21e938dd66b48ac1e8dca896aa15e9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"139714c73c79dc18c299ba258b3395cc"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"b4256d755742bd467d207c97341afb28"},{url:"manifest.webmanifest",revision:"3bf425243d627ab6e0709df9012b4e26"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
