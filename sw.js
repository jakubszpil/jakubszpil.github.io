if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>n(s,r),u={module:{uri:r},exports:t,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/content/articles/dependency-injection-kontra-typescript-Czs-0KWG.js",revision:null},{url:"assets/content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora-D_VYfMJM.js",revision:null},{url:"assets/content/articles/signalizacja-czyli-koncept-signals-w-typescript-BKAbAgzH.js",revision:null},{url:"assets/content/courses/nowoczesny-javascript-DnXqpbLy.js",revision:null},{url:"assets/content/courses/semantyczny-html-Bs4hSI-G.js",revision:null},{url:"assets/content/courses/szybszy-css-czyli-wprowadzenie-do-bem-BnIppYAf.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-css-Dx4jq-ia.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-dom-f-EO8XdW.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-html-D6cDVQ3A.js",revision:null},{url:"assets/content/courses/wprowadzenie-do-javascript-DkkvbhaT.js",revision:null},{url:"assets/core-C1DZsxPG.js",revision:null},{url:"assets/index-8kDsSy6Q.css",revision:null},{url:"assets/index-CBCoL4mB.js",revision:null},{url:"assets/modules/articles-D3Hx8j8l.js",revision:null},{url:"assets/modules/courses-CTHf2dPQ.js",revision:null},{url:"assets/modules/projects-cyunF7C9.js",revision:null},{url:"assets/pages/about-DhjYzU9S.js",revision:null},{url:"assets/pages/article-details-CLlMnCR7.js",revision:null},{url:"assets/pages/article-list-U_2vs0Hm.js",revision:null},{url:"assets/pages/course-details-Bw65lGta.js",revision:null},{url:"assets/pages/course-list-CIfuPtOF.js",revision:null},{url:"assets/pages/home-ClM91C7n.js",revision:null},{url:"assets/pages/not-found-TAlLlEKy.js",revision:null},{url:"assets/pages/search-dtqU1xDA.js",revision:null},{url:"assets/shared-CLQ9rWe9.js",revision:null},{url:"assets/vendor/libs-F3riCzjR.js",revision:null},{url:"assets/vendor/react-Bw4CMnMy.js",revision:null},{url:"assets/vendor/routing-DQuFDZ1V.js",revision:null},{url:"index.html",revision:"0156beea47a473837a711b0d26fe768d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"139714c73c79dc18c299ba258b3395cc"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"b4256d755742bd467d207c97341afb28"},{url:"manifest.webmanifest",revision:"f7400e7251ddc68cbd530399ad791154"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
