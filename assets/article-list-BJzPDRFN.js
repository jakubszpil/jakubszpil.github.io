import{e as s,j as a,f as i}from"./index-NsJUTium.js";import{S as c}from"./seo-bCP9g-TW.js";import{c as n}from"./string-BZnAEtKi.js";import{a as l,b as m,g as p}from"./articles-y-FB9uyx.js";import{C as y}from"./categories-DoiYVfol.js";import{A as u}from"./articles-CoOrchBy.js";import"./fetch-EPc65CvA.js";import"./button-wTNYL8N3.js";import"./link-with-prefetch-C105oE90.js";import"./date-BfXueLdd.js";async function b({params:o,request:e}){const t=o.category,r=await l(e);if(t){if(!r.includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});return i({articles:await m(e,t),categories:r,category:t})}return i({articles:await p(e),categories:r,category:t})}function C(){const{articles:o,categories:e,category:t}=s(),r=t?n(t):void 0;return a.jsxs(a.Fragment,{children:[a.jsx(c,{title:r?`Artykuły / ${r}`:"Artykuły",description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),a.jsxs("header",{className:"prose container",children:[a.jsx("h1",{children:r??"Artykuły"}),a.jsx(y,{showAllCategory:!0,categories:e})]}),a.jsx(u,{articles:o,locationState:{pathname:t?`/blog/kategorie/${t}`:"/blog",label:"Powrót do listy artykułów"}})]})}export{C as default,b as loader};
