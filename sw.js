if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let l={};const o=s=>i(s,t),u={module:{uri:t},exports:l,require:o};e[t]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/articles-LfIfisCt.js",revision:null},{url:"assets/content/articles-AXS0y1km.js",revision:null},{url:"assets/content/courses-DPG8ph09.js",revision:null},{url:"assets/core-D12m9-tM.js",revision:null},{url:"assets/courses-CObg-hNb.js",revision:null},{url:"assets/index-BKZmhnyY.js",revision:null},{url:"assets/index-DJ3v_Yj1.css",revision:null},{url:"assets/projects-Ckc7gPLV.js",revision:null},{url:"assets/routing-Dcu2FEQn.js",revision:null},{url:"assets/shared-akT_7x6h.js",revision:null},{url:"assets/vendor-rOjkUzJz.js",revision:null},{url:"index.html",revision:"9dfce591b9962ee5a349788d53cb9025"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"139714c73c79dc18c299ba258b3395cc"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"b4256d755742bd467d207c97341afb28"},{url:"manifest.webmanifest",revision:"5111e1f2a212281ffa1e2e116d3e35c8"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));