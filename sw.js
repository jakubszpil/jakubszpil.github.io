if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const a=e=>n(e,r),t={module:{uri:r},exports:i,require:a};s[r]=Promise.all(c.map((e=>t[e]||a(e)))).then((e=>(o(...e),i)))}}define(["./workbox-a4900caa"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1723711455472"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-CMLIn5UH.js",revision:null},{url:"assets/components-CxpGlKlM.js",revision:null},{url:"assets/index-1QklDN98.js",revision:null},{url:"assets/index-a2aG6zYX.css",revision:null},{url:"assets/pages/about-DKOtbj7Z.js",revision:null},{url:"assets/pages/article-details-Bzw16Gds.js",revision:null},{url:"assets/pages/article-list-rATeqmpP.js",revision:null},{url:"assets/pages/course-details-EwXGXR_6.js",revision:null},{url:"assets/pages/course-list-D__tx5p0.js",revision:null},{url:"assets/pages/home-Vq3HYKC4.js",revision:null},{url:"assets/pages/not-found-Df_8f9X2.js",revision:null},{url:"assets/pages/project-list-lBO7Fapq.js",revision:null},{url:"assets/pages/search-B-_JJnsp.js",revision:null},{url:"assets/react-vvBGimMH.js",revision:null},{url:"assets/routing-CDreLu1L.js",revision:null},{url:"assets/runtime-Fe8qnWBl.js",revision:null},{url:"assets/utils-46OwyQtw.js",revision:null},{url:"content/articles.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/articles/categories.json",revision:"141e5512c397e7139e456fb351a6c260"},{url:"content/articles/categories/typescript.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/articles/categories/wzorce.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"b7c102a2ec96c83565384e0ae18f11b8"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"1476582fc1a1562e1490c8733b7636bf"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"64374901f9a5e5d8e930e2c44da4ebd2"},{url:"content/articles/slugs.json",revision:"64481a9dc78ffe2476abbecba8eb48eb"},{url:"content/courses.json",revision:"c5461b168e17a76cd3efcbe15dc723a0"},{url:"content/courses/categories.json",revision:"a870887302e721735fae5c59736a7663"},{url:"content/courses/categories/css.json",revision:"cf1ac1db21ad2253232fc7fd09be72ce"},{url:"content/courses/categories/html.json",revision:"c59e5c5e742ba70fcdd8381b98ac0d60"},{url:"content/courses/categories/javascript.json",revision:"ec325f42655a22ccbaaead73e98ff718"},{url:"content/courses/categories/seo.json",revision:"e7d08a5b25ea4aa90224fb913c992aa0"},{url:"content/courses/categories/wprowadzenie.json",revision:"5207498cd67203de573a1aa331636f04"},{url:"content/courses/nowoczesny-javascript.json",revision:"e575689e62dd5af0273abe53e3bd091b"},{url:"content/courses/semantyczny-html.json",revision:"99bc17c55268b19c29457c64f655c7dc"},{url:"content/courses/slugs.json",revision:"b834e750bd5bfa0df9e7156ceb878182"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"24f12a2e3cdadaafc6ef9c515ded7124"},{url:"content/courses/wprowadzenie-do-css.json",revision:"31684763368a41ed9f68580e2d82e894"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"9e0f0cb08261330fa52004b626fb48b7"},{url:"content/courses/wprowadzenie-do-html.json",revision:"d7453c0a496007602c892314453ae75b"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"97d823e66d1cd872c8da4c2cb162a88b"},{url:"content/search.json",revision:"ff8307bb0d7da81a02b070461985190d"},{url:"favicon.ico",revision:"790104122cef8b03ba0b19cf20576ef9"},{url:"favicon.svg",revision:"5434bd2c351d8bf74438f6c7d5600d1c"},{url:"index.html",revision:"375971fcf3ff3b29acf7634f4f4b3ca9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"robots.txt",revision:"877057ecc1e850313fa52fae77fde1e0"},{url:"sitemap.txt",revision:"ed483ff50a7c304e37a4f23eaed39262"},{url:"static/media/screenshot-ipad-blog.png",revision:"ce7996972e7357cff70c4d1726c797eb"},{url:"static/media/screenshot-ipad-home.png",revision:"ec94d295a6cfa502744bce6f5f737494"},{url:"static/media/screenshot-ipad-learning.png",revision:"438a2e8366f0b7dcc00d8a8e61afad1a"},{url:"static/media/screenshot-iphone-blog.png",revision:"3178e5cc0c9b7f1b9de6c2d011b9f64e"},{url:"static/media/screenshot-iphone-home.png",revision:"8d927dfd662a528bc98b13c97eba0c1d"},{url:"static/media/screenshot-iphone-learning.png",revision:"4a9bb31a25e7bb3c839fb172a226425c"},{url:"static/fonts/inter/OFL.txt",revision:"52ccfed416a51baada9fe06010a9138d"},{url:"static/fonts/inter/font.css",revision:"eb2985488c6fe298ee8c82ab114ef98a"},{url:"static/fonts/inter/font.woff2",revision:"32204736a4290ec41200abe91e5190d1"},{url:"content/articles.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/courses.json",revision:"c5461b168e17a76cd3efcbe15dc723a0"},{url:"content/search.json",revision:"ff8307bb0d7da81a02b070461985190d"},{url:"content/articles/categories.json",revision:"141e5512c397e7139e456fb351a6c260"},{url:"content/articles/dependency-injection-kontra-typescript.json",revision:"b7c102a2ec96c83565384e0ae18f11b8"},{url:"content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.json",revision:"1476582fc1a1562e1490c8733b7636bf"},{url:"content/articles/signalizacja-czyli-koncept-signals-w-typescript.json",revision:"64374901f9a5e5d8e930e2c44da4ebd2"},{url:"content/articles/slugs.json",revision:"64481a9dc78ffe2476abbecba8eb48eb"},{url:"content/courses/categories.json",revision:"a870887302e721735fae5c59736a7663"},{url:"content/courses/nowoczesny-javascript.json",revision:"e575689e62dd5af0273abe53e3bd091b"},{url:"content/courses/semantyczny-html.json",revision:"99bc17c55268b19c29457c64f655c7dc"},{url:"content/courses/slugs.json",revision:"b834e750bd5bfa0df9e7156ceb878182"},{url:"content/courses/szybszy-css-czyli-wprowadzenie-do-bem.json",revision:"24f12a2e3cdadaafc6ef9c515ded7124"},{url:"content/courses/wprowadzenie-do-css.json",revision:"31684763368a41ed9f68580e2d82e894"},{url:"content/courses/wprowadzenie-do-dom.json",revision:"9e0f0cb08261330fa52004b626fb48b7"},{url:"content/courses/wprowadzenie-do-html.json",revision:"d7453c0a496007602c892314453ae75b"},{url:"content/courses/wprowadzenie-do-javascript.json",revision:"97d823e66d1cd872c8da4c2cb162a88b"},{url:"content/articles/categories/typescript.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/articles/categories/wzorce.json",revision:"4f139e13ea2aa65a2b9bf4a00c1e207c"},{url:"content/courses/categories/css.json",revision:"cf1ac1db21ad2253232fc7fd09be72ce"},{url:"content/courses/categories/html.json",revision:"c59e5c5e742ba70fcdd8381b98ac0d60"},{url:"content/courses/categories/javascript.json",revision:"ec325f42655a22ccbaaead73e98ff718"},{url:"content/courses/categories/seo.json",revision:"e7d08a5b25ea4aa90224fb913c992aa0"},{url:"content/courses/categories/wprowadzenie.json",revision:"5207498cd67203de573a1aa331636f04"},{url:"manifest.webmanifest",revision:"641df0f4e9c30d5b2a301719a7851180"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.endsWith(".js")),new e.CacheFirst({cacheName:"module-cache",plugins:[]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>e&&s.pathname.startsWith("/content")),new e.CacheFirst({cacheName:"api-content-cache",plugins:[]}),"GET")}));
