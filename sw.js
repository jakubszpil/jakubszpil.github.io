if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const a=e=>n(e,r),t={module:{uri:r},exports:i,require:a};s[r]=Promise.all(c.map((e=>t[e]||a(e)))).then((e=>(o(...e),i)))}}define(["./workbox-a4900caa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1723918828151"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-B_SPKII1.js",revision:null},{url:"assets/components-D0-JMKwm.js",revision:null},{url:"assets/index-DoMVnRAQ.js",revision:null},{url:"assets/index-qIvpJCJ_.css",revision:null},{url:"assets/pages/about-TUbD1Tsl.js",revision:null},{url:"assets/pages/article-details-DY31pkui.js",revision:null},{url:"assets/pages/article-list-D96grPji.js",revision:null},{url:"assets/pages/course-details-zL7GCXlm.js",revision:null},{url:"assets/pages/course-list-BbzBkA_J.js",revision:null},{url:"assets/pages/home-DTyzrEd3.js",revision:null},{url:"assets/pages/not-found-Df_8f9X2.js",revision:null},{url:"assets/pages/project-list-CMl9Smc7.js",revision:null},{url:"assets/pages/search-BQyNEAO_.js",revision:null},{url:"assets/react-vvBGimMH.js",revision:null},{url:"assets/routing-CDreLu1L.js",revision:null},{url:"assets/runtime-BVelM1Lx.js",revision:null},{url:"assets/utils-BcD-Ro5x.js",revision:null},{url:"content/articles.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/articles/categories.json",revision:"141e5512c397e7139e456fb351a6c260"},{url:"content/articles/categories/typescript.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/articles/categories/wzorce.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"09f2f1d4c626d1fef3982b49513e8641"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"8b9e3580f3f97e0ec02a5b050cc6c025"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"01279ef06aa0a61364fa5884a757e5ff"},{url:"content/articles/slugs.json",revision:"64481a9dc78ffe2476abbecba8eb48eb"},{url:"content/courses.json",revision:"1fefa7c52739a9366fb704b5e0b31ad0"},{url:"content/courses/categories.json",revision:"a870887302e721735fae5c59736a7663"},{url:"content/courses/categories/css.json",revision:"f26306205e8ccdecc762c351dcf885be"},{url:"content/courses/categories/html.json",revision:"02e8cf20d290ca16ef7a29f19bd5cae9"},{url:"content/courses/categories/javascript.json",revision:"e8d00f332bfa27a520e984e8ec9a1415"},{url:"content/courses/categories/seo.json",revision:"8b51df5a328e4f1cd9bdd6fd60218f99"},{url:"content/courses/categories/wprowadzenie.json",revision:"e029a3c943a0d3d36764b3befe8999d2"},{url:"content/courses/nowoczesny-javascript.json",revision:"00e87440919594c5382e93ee7645b387"},{url:"content/courses/semantyczny-html.json",revision:"e358b61a6336f5dc3d13f1a1fac54891"},{url:"content/courses/slugs.json",revision:"b834e750bd5bfa0df9e7156ceb878182"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"798a755162b522646a58c30caface996"},{url:"content/courses/wprowadzenie-do-css.json",revision:"c70dc663cf59b44dea921292aac922f6"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"3a73c271e62ddc46b5e8b0ff6dde60b3"},{url:"content/courses/wprowadzenie-do-html.json",revision:"a1edeaa239d50f1c717ad5f1f832a8e6"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"5c4caa046355b92a9d6777f4ef642d0a"},{url:"content/search.json",revision:"cda6ff8e0eae000f80e4b00e4f8db52f"},{url:"favicon.ico",revision:"790104122cef8b03ba0b19cf20576ef9"},{url:"favicon.svg",revision:"5434bd2c351d8bf74438f6c7d5600d1c"},{url:"index.html",revision:"2a1cb174dd7fd8c175d9f4ff91ebe3cd"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"robots.txt",revision:"877057ecc1e850313fa52fae77fde1e0"},{url:"sitemap.txt",revision:"ed483ff50a7c304e37a4f23eaed39262"},{url:"static/media/screenshot-ipad-blog.png",revision:"ce7996972e7357cff70c4d1726c797eb"},{url:"static/media/screenshot-ipad-home.png",revision:"ec94d295a6cfa502744bce6f5f737494"},{url:"static/media/screenshot-ipad-learning.png",revision:"438a2e8366f0b7dcc00d8a8e61afad1a"},{url:"static/media/screenshot-iphone-blog.png",revision:"3178e5cc0c9b7f1b9de6c2d011b9f64e"},{url:"static/media/screenshot-iphone-home.png",revision:"8d927dfd662a528bc98b13c97eba0c1d"},{url:"static/media/screenshot-iphone-learning.png",revision:"4a9bb31a25e7bb3c839fb172a226425c"},{url:"static/fonts/inter/OFL.txt",revision:"52ccfed416a51baada9fe06010a9138d"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"content/articles.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/courses.json",revision:"1fefa7c52739a9366fb704b5e0b31ad0"},{url:"content/search.json",revision:"cda6ff8e0eae000f80e4b00e4f8db52f"},{url:"content/articles/categories.json",revision:"141e5512c397e7139e456fb351a6c260"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"09f2f1d4c626d1fef3982b49513e8641"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"8b9e3580f3f97e0ec02a5b050cc6c025"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"01279ef06aa0a61364fa5884a757e5ff"},{url:"content/articles/slugs.json",revision:"64481a9dc78ffe2476abbecba8eb48eb"},{url:"content/courses/categories.json",revision:"a870887302e721735fae5c59736a7663"},{url:"content/courses/nowoczesny-javascript.json",revision:"00e87440919594c5382e93ee7645b387"},{url:"content/courses/semantyczny-html.json",revision:"e358b61a6336f5dc3d13f1a1fac54891"},{url:"content/courses/slugs.json",revision:"b834e750bd5bfa0df9e7156ceb878182"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"798a755162b522646a58c30caface996"},{url:"content/courses/wprowadzenie-do-css.json",revision:"c70dc663cf59b44dea921292aac922f6"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"3a73c271e62ddc46b5e8b0ff6dde60b3"},{url:"content/courses/wprowadzenie-do-html.json",revision:"a1edeaa239d50f1c717ad5f1f832a8e6"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"5c4caa046355b92a9d6777f4ef642d0a"},{url:"content/articles/categories/typescript.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/articles/categories/wzorce.json",revision:"7c503e346367ab6b9ea7527ce9e3dca9"},{url:"content/courses/categories/css.json",revision:"f26306205e8ccdecc762c351dcf885be"},{url:"content/courses/categories/html.json",revision:"02e8cf20d290ca16ef7a29f19bd5cae9"},{url:"content/courses/categories/javascript.json",revision:"e8d00f332bfa27a520e984e8ec9a1415"},{url:"content/courses/categories/seo.json",revision:"8b51df5a328e4f1cd9bdd6fd60218f99"},{url:"content/courses/categories/wprowadzenie.json",revision:"e029a3c943a0d3d36764b3befe8999d2"},{url:"manifest.webmanifest",revision:"641df0f4e9c30d5b2a301719a7851180"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.endsWith(".js")),new e.CacheFirst({cacheName:"module-cache",plugins:[]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.startsWith("/content")),new e.CacheFirst({cacheName:"api-content-cache",plugins:[]}),"GET")}));
