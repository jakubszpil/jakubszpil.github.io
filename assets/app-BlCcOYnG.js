const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pages/home-DcyTYfju.js","assets/react-f9Xa8TJW.js","assets/pages/article-details-htl6inIh.js","assets/runtime-Bil-2W2T.js","assets/components-DMJuwcw9.js","assets/utils-DdRODKh7.js","assets/routing-CQDCBRuK.js","assets/pages/course-details-DEzlsfID.js","assets/pages/search-CKztS0es.js","assets/pages/about-cnaKbO9Y.js","assets/pages/not-found-D0DSM5RQ.js","assets/pages/article-list-CYWKyIVl.js","assets/pages/course-list-CoukBPPP.js","assets/pages/project-list-BVUJllAY.js"])))=>i.map(i=>d[i]);
import{c as e}from"./utils-DdRODKh7.js";import{j as t}from"./react-f9Xa8TJW.js";import{S as f,O as v,u as x,i as R}from"./routing-CQDCBRuK.js";import{L as m,N as P,B as g,a as j}from"./components-DMJuwcw9.js";const L="modulepreload",y=function(o){return"/"+o},_={},r=function(l,n,b){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.all(n.map(d=>{if(d=y(d),d in _)return;_[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":L,u||(i.as="script",i.crossOrigin=""),i.href=d,a&&i.setAttribute("nonce",a),document.head.appendChild(i),u)return new Promise((p,E)=>{i.addEventListener("load",p),i.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}return c.then(()=>l()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},O=[e("").addModule(()=>r(()=>import("./pages/home-DcyTYfju.js").then(o=>o.h),__vite__mapDeps([0,1,2,3,4,5,6,7]))).setIndex(!0),e("search").addModule(()=>r(()=>import("./pages/search-CKztS0es.js"),__vite__mapDeps([8,1,6,2,3,4,5,7,0]))),e("me").addModule(()=>r(()=>import("./pages/about-cnaKbO9Y.js"),__vite__mapDeps([9,1,5,6,3,4]))),e("*").addModule(()=>r(()=>import("./pages/not-found-D0DSM5RQ.js"),__vite__mapDeps([10,1])))],I=[e("").addModule(()=>r(()=>import("./pages/article-list-CYWKyIVl.js"),__vite__mapDeps([11,1,2,3,4,5,6]))).setIndex(!0),e("kategorie/:category").addModule(()=>r(()=>import("./pages/article-list-CYWKyIVl.js"),__vite__mapDeps([11,1,2,3,4,5,6]))),e(":slug").addModule(()=>r(()=>import("./pages/article-details-htl6inIh.js").then(o=>o.d),__vite__mapDeps([2,1,3,4,5,6])))],A=[e("").addModule(()=>r(()=>import("./pages/course-list-CoukBPPP.js"),__vite__mapDeps([12,1,7,2,3,4,5,6]))).setIndex(!0),e("kategorie/:category").addModule(()=>r(()=>import("./pages/course-list-CoukBPPP.js"),__vite__mapDeps([12,1,7,2,3,4,5,6]))),e(":slug").addModule(()=>r(()=>import("./pages/course-details-DEzlsfID.js").then(o=>o.c),__vite__mapDeps([7,1,2,3,4,5,6])))],T=[e("").addModule(()=>r(()=>import("./pages/project-list-BVUJllAY.js"),__vite__mapDeps([13,1,4,5,6,3]))).setIndex(!0)],k=[e("").addChildren(e("blog").addChildren(...I),e("learning").addChildren(...A),e("portfolio").addChildren(...T),e("").addChildren(...O))];function D(){return t.jsxs(m,{children:[t.jsx(f,{}),t.jsx(v,{})]})}function V(){const o=x(),l=n=>R(n)?n.status===404?t.jsx(P,{}):t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:[n.status,": ",n.statusText]}),t.jsx("p",{children:n.data}),t.jsx(g,{asChild:!0,className:"no-underline",variant:"outline",size:"sm",children:t.jsx(j,{to:"/",children:"Powrót do strony głównej"})})]}):(console.error(n),t.jsx("h1",{children:"Wystąpił nieoczekiwany błąd"}));return t.jsx(m,{children:t.jsx("header",{className:"container prose",children:l(o)})})}const $=Object.freeze(Object.defineProperty({__proto__:null,ErrorBoundary:V,default:D},Symbol.toStringTag,{value:"Module"}));export{r as _,k as a,$ as b};
