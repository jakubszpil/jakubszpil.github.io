if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>n(e,r),a={module:{uri:r},exports:c,require:t};s[r]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-a4900caa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1722845144753"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-DN3tO-Jq.js",revision:null},{url:"assets/components-Chjwwj7i.js",revision:null},{url:"assets/index-CiDxjZRH.js",revision:null},{url:"assets/index-DMHNG8Fp.css",revision:null},{url:"assets/pages/about-CMJnkPBr.js",revision:null},{url:"assets/pages/article-details-Bk74aj5l.js",revision:null},{url:"assets/pages/article-list-CYVAk8qh.js",revision:null},{url:"assets/pages/course-details-BPwLk6Dt.js",revision:null},{url:"assets/pages/course-list-B8Yezr5u.js",revision:null},{url:"assets/pages/home-BT3mUcXi.js",revision:null},{url:"assets/pages/not-found-Df_8f9X2.js",revision:null},{url:"assets/pages/project-list-TCrzqPTF.js",revision:null},{url:"assets/pages/search-5CYkWwqw.js",revision:null},{url:"assets/react-vvBGimMH.js",revision:null},{url:"assets/routing-CDreLu1L.js",revision:null},{url:"assets/runtime-Fe8qnWBl.js",revision:null},{url:"assets/utils-BZMZnvBm.js",revision:null},{url:"content/articles.json",revision:"f0d9129f4ead0f74d3b7fceaf0607518"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"fd93d4f048e43acca01d02bce883679e"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"e92b969ae92796734882d1c9ee8e9542"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"a90924d1530cd1c0d57207058d5c65c0"},{url:"content/courses.json",revision:"a4574d497222be80bb148ff23260e5ee"},{url:"content/courses/nowoczesny-javascript.json",revision:"56e0e3449d89d2df89243e7948d3f429"},{url:"content/courses/semantyczny-html.json",revision:"1a8c639fb38ba4e5c545f987ef5e3130"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"84a9a99d8bf30fcbcae992fb9cab628c"},{url:"content/courses/wprowadzenie-do-css.json",revision:"6ac6cf3dfdfdaa0d52154cb4d23d2f0c"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"95015fe3e1238752a71e98e7bbdff6d7"},{url:"content/courses/wprowadzenie-do-html.json",revision:"d15ad3214ee030f98d0c4f0e6d7c00a0"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"6f0d831ad355e523d96b1f016d39e12d"},{url:"favicon.ico",revision:"790104122cef8b03ba0b19cf20576ef9"},{url:"favicon.svg",revision:"5434bd2c351d8bf74438f6c7d5600d1c"},{url:"index.html",revision:"c3855369dbe9bfc633e01f9918a7544d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"robots.txt",revision:"877057ecc1e850313fa52fae77fde1e0"},{url:"sitemap.txt",revision:"ed483ff50a7c304e37a4f23eaed39262"},{url:"static/media/screenshot-ipad-blog.png",revision:"ce7996972e7357cff70c4d1726c797eb"},{url:"static/media/screenshot-ipad-home.png",revision:"ec94d295a6cfa502744bce6f5f737494"},{url:"static/media/screenshot-ipad-learning.png",revision:"438a2e8366f0b7dcc00d8a8e61afad1a"},{url:"static/media/screenshot-iphone-blog.png",revision:"3178e5cc0c9b7f1b9de6c2d011b9f64e"},{url:"static/media/screenshot-iphone-home.png",revision:"8d927dfd662a528bc98b13c97eba0c1d"},{url:"static/media/screenshot-iphone-learning.png",revision:"4a9bb31a25e7bb3c839fb172a226425c"},{url:"static/fonts/inter/OFL.txt",revision:"52ccfed416a51baada9fe06010a9138d"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"content/articles.json",revision:"f0d9129f4ead0f74d3b7fceaf0607518"},{url:"content/courses.json",revision:"a4574d497222be80bb148ff23260e5ee"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"fd93d4f048e43acca01d02bce883679e"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"e92b969ae92796734882d1c9ee8e9542"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"a90924d1530cd1c0d57207058d5c65c0"},{url:"content/courses/nowoczesny-javascript.json",revision:"56e0e3449d89d2df89243e7948d3f429"},{url:"content/courses/semantyczny-html.json",revision:"1a8c639fb38ba4e5c545f987ef5e3130"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"84a9a99d8bf30fcbcae992fb9cab628c"},{url:"content/courses/wprowadzenie-do-css.json",revision:"6ac6cf3dfdfdaa0d52154cb4d23d2f0c"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"95015fe3e1238752a71e98e7bbdff6d7"},{url:"content/courses/wprowadzenie-do-html.json",revision:"d15ad3214ee030f98d0c4f0e6d7c00a0"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"6f0d831ad355e523d96b1f016d39e12d"},{url:"manifest.webmanifest",revision:"641df0f4e9c30d5b2a301719a7851180"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.endsWith(".js")),new e.CacheFirst({cacheName:"module-cache",plugins:[]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.startsWith("/content")),new e.CacheFirst({cacheName:"api-content-cache",plugins:[]}),"GET")}));
