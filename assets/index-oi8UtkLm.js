const __vite__fileDeps=["assets/app-dq8awp8b.js","assets/runtime-dK_LJs7-.js","assets/core-BMvVMY20.js","assets/articles-CkcHdF0Y.js","assets/shared-Bs3KXJzH.js","assets/content-B3_zOwVc.js","assets/projects-CLmTa2rT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as a,_ as c}from"./articles-CkcHdF0Y.js";import{l as u,j as o,r as m,R as f}from"./runtime-dK_LJs7-.js";import{c as r,e as p,C as h,f as g,S as y}from"./shared-Bs3KXJzH.js";import{r as b}from"./courses-YKkp3aB6.js";import{r as j}from"./projects-CLmTa2rT.js";import{r as P}from"./core-BMvVMY20.js";import"./content-B3_zOwVc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const x=[r("").addChildren(r("blog").addChildren(...a),r("learning").addChildren(...b),r("portfolio").addChildren(...j),r("").addChildren(...P))],C={socials:{github:"https://github.com/jakubszpil/",linkedin:"https://www.linkedin.com/in/jakubszpil/"},meta:{title:"Jakub Szpil",titleTemplate:"%s - Jakub Szpil"}},_=p(r("").addModule(()=>c(()=>import("./app-dq8awp8b.js"),__vite__mapDeps([0,1,2,3,4,5,6]))).addChildren(...x));u(document.getElementById("root")).render(o.jsx(m.StrictMode,{children:o.jsx(h,{config:C,children:i=>o.jsxs(g,{children:[o.jsx(y,{defaultTitle:i.meta.title,titleTemplate:i.meta.titleTemplate}),o.jsx(f,{router:_})]})})}));
