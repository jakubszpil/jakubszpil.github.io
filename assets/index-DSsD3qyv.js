import{c as v,j as t,r as x}from"./vendor/react-KwYbH8cK.js";import{R as P,S as z,O as E,a as w,i as _}from"./vendor/routing-Cqygv9cq.js";import{c as C,d as L,i as k}from"./vendor/libs-5-INbZ1m.js";import{c as l,b as R,a as S,d as O,C as B,S as $,e as F,B as I,L as N}from"./shared-u2vI9lnt.js";import{r as A}from"./modules/articles-DXaZjhvE.js";import{r as T}from"./modules/courses-6dZYOJx4.js";import{r as W}from"./modules/projects-BGOCkGn9.js";import{r as q,L as p,N as H}from"./core-Do7H_sW0.js";import"./index-DSsD3qyv.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const M="modulepreload",U=function(o){return"/"+o},m={},D=function(c,n,u){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),s=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=U(i),i in m)return;m[i]=!0;const d=i.endsWith(".css"),y=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${y}`))return;const a=document.createElement("link");if(a.rel=d?"stylesheet":M,d||(a.as="script",a.crossOrigin=""),a.href=i,s&&a.setAttribute("nonce",s),document.head.appendChild(a),d)return new Promise((g,b)=>{a.addEventListener("load",g),a.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>c()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})};function ce(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}const G=[l("").addChildren(l("blog").addChildren(...A),l("learning").addChildren(...T),l("portfolio").addChildren(...W),l("").addChildren(...q))],f={routes:[],socials:[{href:"https://www.linkedin.com/in/jakubszpil/",label:"LinkedIn",icon:C},{href:"https://github.com/jakubszpil/",label:"GitHub",icon:L}],meta:{description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}},h=R(l("").addModule(()=>D(()=>Promise.resolve().then(()=>Y),void 0)).addChildren(...G)),K=S(h,{hashLocation:!0,future:{v7_fetcherPersist:!0,v7_normalizeFormMethod:!0,v7_partialHydration:!0,v7_relativeSplatPath:!0}}),j=document.getElementById("root");k(j);const V=v(j);V.render(t.jsx(x.StrictMode,{children:t.jsx(O,{children:t.jsx(B,{config:{...f,routes:h},children:t.jsxs($,{children:[t.jsx(F,{...f.meta}),t.jsx(P,{router:K})]})})})}));function J(){return t.jsxs(p,{children:[t.jsx(z,{}),t.jsx(E,{})]})}function Q(){const o=w();console.error(o);const c=n=>_(n)?n.status===404?t.jsx(H,{}):t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:[n.status,": ",n.statusText]}),t.jsx("p",{children:n.data}),t.jsx(I,{asChild:!0,className:"no-underline",variant:"outline",size:"sm",children:t.jsx(N,{to:"/",children:"Powrót do strony głównej"})})]}):t.jsx("h1",{children:"Wystąpił nieoczekiwany błąd"});return t.jsx(p,{children:t.jsx("header",{className:"container prose",children:c(o)})})}function X(){return null}const Y=Object.freeze(Object.defineProperty({__proto__:null,ErrorBoundary:Q,HydrateFallback:X,default:J},Symbol.toStringTag,{value:"Module"}));export{D as _,ce as g};