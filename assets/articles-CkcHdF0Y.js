import{j as e,c as E,L as j,r as C}from"./runtime-dK_LJs7-.js";import{c as u,a as P,B as p,g as L,u as m,S as h,d as _,n as y}from"./shared-Bs3KXJzH.js";import{_ as N,a as S,b as z}from"./content-B3_zOwVc.js";const O="modulepreload",R=function(t){return"/"+t},f={},g=function(r,s,n){let c=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));c=Promise.all(s.map(a=>{if(a=R(a),a in f)return;f[a]=!0;const d=a.endsWith(".css"),w=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${w}`))return;const i=document.createElement("link");if(i.rel=d?"stylesheet":O,d||(i.as="script",i.crossOrigin=""),i.href=a,l&&i.setAttribute("nonce",l),document.head.appendChild(i),d)return new Promise((A,k)=>{i.addEventListener("load",A),i.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${a}`)))})}))}return c.then(()=>r()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})},Q=[u("").addModule(()=>g(()=>Promise.resolve().then(()=>U),void 0)),u(":slug").addModule(()=>g(()=>Promise.resolve().then(()=>V),void 0)),u("kategorie/:category").addModule(()=>g(()=>Promise.resolve().then(()=>W),void 0))],[$,T,b,D]=P(Object.assign({"../../../../content/articles/dependency-injection-kontra-typescript.md":N,"../../../../content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora.md":S,"../../../../content/articles/signalizacja-czyli-koncept-signals-w-typescript.md":z}),"categories");function v(t){return e.jsx("section",{className:E("container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",t.className),children:t.articles.map(r=>e.jsx(p,{asChild:!0,variant:t.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(j,{to:`/blog/${r.slug}`,children:[e.jsx("h3",{className:"line-clamp-3 flex-1 m-0",children:r.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal",children:r.description}),r.createdAt&&e.jsx("span",{className:"text-neutral-500 text-xs",children:L(r.createdAt)})]})},r.id))})}function x(t){var s;const r=C.useCallback((n,c)=>e.jsx(p,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(j,{to:c,children:["#",n]})},n),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.showAllCategory&&r("wszystko","/blog"),(s=t.categories)==null?void 0:s.map(n=>r(n,`/blog/kategorie/${n}`))]})}const B=_(()=>{const t=$(),r=b();return{articles:t,categories:r}});function F(){const{articles:t,categories:r}=m();return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Artykuły"}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:"Artykuły"}),e.jsx(x,{showAllCategory:!0,categories:r})]}),e.jsx(v,{articles:t})]})}const U=Object.freeze(Object.defineProperty({__proto__:null,default:F,loader:B},Symbol.toStringTag,{value:"Module"})),I=_(t=>{const r=T(t.params.slug);if(!r)throw y();return r});function M(){const t=m();return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:t.title,description:t.description,keywords:t.keywords}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:t.title}),e.jsx(x,{categories:t.categories})]}),e.jsx("article",{className:"prose container",children:t.content})]})}const V=Object.freeze(Object.defineProperty({__proto__:null,default:M,loader:I},Symbol.toStringTag,{value:"Module"})),q=_(({params:t})=>{const r=t.category,s=b();if(!s.includes(r))throw y();const n=D(r);return{category:r,categories:s,articles:n}});function K(){const{articles:t,categories:r,category:s}=m();return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:`Kategoria: ${s}`}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{className:"capitalize",children:s}),e.jsx(x,{showAllCategory:!0,categories:r})]}),e.jsx(v,{articles:t})]})}const W=Object.freeze(Object.defineProperty({__proto__:null,default:K,loader:q},Symbol.toStringTag,{value:"Module"}));export{v as A,g as _,$ as g,Q as r};