const __vite__fileDeps=["assets/app-C0AFIZRD.js","assets/runtime-BrFHtimR.js","assets/shared-DKJROExL.js","assets/core-BdN0tsgI.js","assets/articles-kO-8axEd.js","assets/content-B6Wz_xxL.js","assets/projects-C9hPKuev.js","assets/courses-taAj1pFF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as l,_ as c}from"./articles-kO-8axEd.js";import{n as u,j as o,r as m,R as p}from"./runtime-BrFHtimR.js";import{c as r,e as f,C as h,f as j,S as g}from"./shared-DKJROExL.js";import{r as z}from"./courses-taAj1pFF.js";import{r as y}from"./projects-C9hPKuev.js";import{r as b}from"./core-BdN0tsgI.js";import"./content-B6Wz_xxL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const C=[r("").addChildren(r("blog").addChildren(...l),r("learning").addChildren(...z),r("portfolio").addChildren(...y),r("").addChildren(...b))],k={socials:{github:"https://github.com/jakubszpil/",linkedin:"https://www.linkedin.com/in/jakubszpil/"},meta:{title:"Jakub Szpil",titleTemplate:"%s - Jakub Szpil",description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}},v=f(r("").addModule(()=>c(()=>import("./app-C0AFIZRD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))).addChildren(...C));u(document.getElementById("root")).render(o.jsx(m.StrictMode,{children:o.jsx(h,{config:k,children:i=>o.jsxs(j,{children:[o.jsx(g,{defaultTitle:i.meta.title,titleTemplate:i.meta.titleTemplate}),o.jsx(p,{router:v})]})})}));